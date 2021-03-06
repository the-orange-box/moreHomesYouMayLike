import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div id="title">
          <h2>More homes you may like</h2>
        </div>

        <div className="threeHouses">
          <div className="house">
            <div className="frontImage">
              <img className="frontPageImages" src="images/OaPhoto011_small.jpg" alt="picture of a house" />
            </div>
            {/*
              NEED TO COME BACK LATER TO PRODUCTION, THUS DID NOT DELETED

            <div className="heart">
              <svg viewBox="0 0 24 24" fill="#484848" fillOpacity="0.5" stroke="#ffffff" strokeWidth="2" focusable="false"
                aria-label="Add listing to a list" role="img" strokeLinecap="round" strokeLinejoin="round"
                style="height: 28px; width: 28px; display: block; overflow: visible;">
                <path
                  d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6"
                  strokeLinejoin="round"></path>
              </svg>

              MAYBE DO SOMETHING LIKE THAT:
               <svg className="star" width="10px" height="10px">
         <polygon points ="5,0.5 2,9.9 9.5,3.9 0.5,3.9 8,9.9" fill="teal" />
       </svg>

              */}
          </div>

          <div className="houseTypeAndCity">
            <span>ENTIRE APARTMENT &#183 RAMAT GAN</span>
          </div>

          <div className="houseTitle">
            <span>Shick Apartment With Views</span>
          </div>

          <div className="price">
            <span>$200/night</span>
          </div>

          <div className="reviews">
            <span className="star">&#9733</span>
            <span className="rating">4.54</span>
            <span className="totalReviews">(171)</span>
          </div>
        </div>

        <div className="house">
          <div className="frontImage">
            <img className="frontPageImages" src="images/OaPhoto011_small.jpg" alt="picture of a house" />
            <div className="heart">
              {/*
                NEED TO COME BACK LATER TO PRODUCTION, THUS DID NOT DELETED

                <svg viewBox="0 0 24 24" fill="#484848" fillOpacity="0.5" stroke="#ffffff" strokeWidth="2"
                  focusable="false" aria-label="Add listing to a list" role="img" strokeLinecap="round"
                  strokeLinejoin="round" style="height: 28px; width: 28px; display: block; overflow: visible;">
                  <path
                    d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6"
                    strokeLinejoin="round"></path>
                </svg> */}
            </div>
          </div>

          <div className="houseTypeAndCity">
            <span>ENTIRE APARTMENT &#183 RAMAT GAN</span>
          </div>

          <div className="houseTitle">
            <span>Shick Apartment With Views</span>
          </div>

          <div className="price">
            <span>$200/night</span>
          </div>

          <div className="reviews">
            <span className="star">&#9733</span>
            <span className="rating">4.54</span>
            <span className="totalReviews">(171)</span>
          </div>
        </div>

        <div className="house">
          <div className="frontImage">
            <img className="frontPageImages" src="images/OaPhoto011_small.jpg" alt="picture of a house" />
            <div className="heart">
              {/*
                NEED TO COME BACK LATER TO PRODUCTION, THUS DID NOT DELETED

                <svg viewBox="0 0 24 24" fill="#484848" fillOpacity="0.5" stroke="#ffffff" strokeWidth="2"
                  focusable="false" aria-label="Add listing to a list" role="img" strokeLinecap="round"
                  strokeLinejoin="round" style="height: 28px; width: 28px; display: block; overflow: visible;">
                  <path
                    d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6"
                    strokeLinejoin="round"></path>
                </svg> */}
            </div>
          </div>

          <div className="houseTypeAndCity">
            <span>ENTIRE APARTMENT &#183 RAMAT GAN</span>
          </div>

          <div className="houseTitle">
            <span>Shick Apartment With Views</span>
          </div>

          <div className="price">
            <span>$200/night</span>
          </div>

          <div className="reviews">
            <span className="star">&#9733</span>
            <span className="rating">4.54</span>
            <span className="totalReviews">(171)</span>
          </div>
        </div>
      </div>
      // </div >
    );
  }
}

export default App;