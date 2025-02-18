import Landing from './components/landing.js';
import './App.css';
import Header from './components/header.js'
import Photos from './components/Photos.js';
import Features from './components/features.js';
import Discount from './components/discount.js';
import Reviews from './components/reviews.js';
import reviews from "./reviewsData";
import Footer from './components/footer.js';
function App() {
  return (
    <div className='containe'>
      <Header />
      <div className="land">
        <Landing
          landingTitle="Collection Is here"
          landingText="The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out.
"
        />
      </div>
      <Photos />
      <div className='centered'>
        <div className='half'>
          <Landing
            landingTitle="Basic Starter Pack"
            landingText="The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out."
          />
        </div>
      </div>
      <Features />
      <Discount />
      <div className='contain'>
        <h3>Our customer’s opinion</h3>
        <p>Society has put up so many boundaries, so many limitations
          on what’s right and wrong that it’s almost impossible to get a pure thought out.</p>
        <div className='reviewers'>

          {reviews.map((review, index) => (
            <Reviews
              key={index}
              rating={review.rating}
              reviewerName={review.reviewerName}
              reviewerText={review.reviewerText}
            />
          ))}
        </div>

      </div>
      <Footer />
    </div>

  );
}

export default App;
