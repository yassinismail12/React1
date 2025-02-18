export default function Landing(props) {
    return (

        <div className="text">
            <h1>{props.landingTitle}</h1>
            <p>{props.landingText}
            </p>
            <button>Explore new collections</button>
        </div>


    )

}