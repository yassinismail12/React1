import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons"; // Filled star
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

export default function Reviews({ rating, reviewerName, reviewerText }) {
    const totalStars = 5
    return (<div className="review-box">

        <div>
            {[...Array(totalStars)].map((_, index) => (
                <FontAwesomeIcon
                    key={index}
                    icon={index < rating ? solidStar : regularStar}
                    style={{ color: "#FFD700", fontSize: "15px", marginRight: "5px", marginBottom: "10px" }}
                />
            ))}
        </div>
        <p>{reviewerText}</p>

        <div className="review-footer">
            <img src="./Images/Avatar.avif" alt="reviewerName" className="avatar" />
            <span className="reviewer-name">{reviewerName}</span>


        </div>
    </div>
    )
}
