import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";

export default function Discount() {
    return (<div className="discount">
        <h1>Exclusive Discounts for Members</h1>

        <p>The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you.</p>

        <button ><FontAwesomeIcon className="gift" icon={faGift} size="2px" ></FontAwesomeIcon> Get your code </button>
    </div>

    )
}