import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';



export default function Features() {
    return (
        <>
            <div className="hider">
                <h3>Product Features</h3>
                <p>Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible</p>
            </div>
            <div className="features">
                <div className="timer">
                    <h2>
                        Product Description
                    </h2>
                    <p>Society has put up so many boundaries, so many limitations on what’s right and wrong that it’s almost impossible to get a pure thought out. It’s like a little kid, a little boy, looking at colors, and no one told him what colors are good, before somebody tells you you shouldn’t like pink because that’s for girls, or you’d instantly become a gay two-year-old.</p>
                    <ul>
                        <li> <FontAwesomeIcon icon={faCheckCircle} className='icons' style={{ fontSize: "16px" }} />   Oil is a primary source of energy for various sectors, including transportation, industries, and residential use.</li>
                        <li> <FontAwesomeIcon icon={faCheckCircle} className='icons' style={{ fontSize: "16px" }} />   Oil is highly versatile and used in the production of a wide range of products. It serves as a raw material for manufacturing plastics.</li>
                        <li> <FontAwesomeIcon icon={faCheckCircle} className='icons' style={{ fontSize: "16px" }} />   Oil is a crucial source of petrochemicals, which are used in the production of plastics.</li>


                    </ul>
                </div>
                <div className="sider">
                    <img className='big' src='./Images/feature1.jpg' alt='first feature' />

                    <div className='small-pics'>
                        <img src='./Images/feature 2.jpg' alt='second' />  <img src='./Images/feature3.jpg' alt='third' />
                    </div>
                </div>

            </div>

        </>
    )
}