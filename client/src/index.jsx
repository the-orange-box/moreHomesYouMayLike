import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="root">

        <div id="title">
          <h2>More homes you may like</h2>
        </div>

        <div class="threeHouses">
          <div class="house">
            <div class="frontImage">
              <img class="frontPageImages" src="images/OaPhoto011_small.jpg" alt="picture of a house" />
            </div>
            <div class="heart">
              <svg viewBox="0 0 24 24" fill="#484848" fill-opacity="0.5" stroke="#ffffff" stroke-width="2" focusable="false"
                aria-label="Add listing to a list" role="img" stroke-linecap="round" stroke-linejoin="round"
                style="height: 28px; width: 28px; display: block; overflow: visible;">
                <path
                  d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6"
                  stroke-linejoin="round"></path>
              </svg>
            </div>

            <div class="houseTypeAndCity">
              <span>ENTIRE APARTMENT &#183 RAMAT GAN</span>
            </div>

            <div class="houseTitle">
              <span>Shick Apartment With Views</span>
            </div>

            <div class="price">
              <span>$200/night</span>
            </div>

            <div class="reviews">
              <span class="star">&#9733</span>
              <span class="rating">4.54</span>
              <span class="totalReviews">(171)</span>
            </div>
          </div>

          <div class="house">
            <div class="frontImage">
              <img class="frontPageImages" src="images/OaPhoto011_small.jpg" alt="picture of a house" />
              <div class="heart">
                <svg viewBox="0 0 24 24" fill="#484848" fill-opacity="0.5" stroke="#ffffff" stroke-width="2"
                  focusable="false" aria-label="Add listing to a list" role="img" stroke-linecap="round"
                  stroke-linejoin="round" style="height: 28px; width: 28px; display: block; overflow: visible;">
                  <path
                    d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6"
                    stroke-linejoin="round"></path>
                </svg>
              </div>
            </div>

            <div class="houseTypeAndCity">
              <span>ENTIRE APARTMENT &#183 RAMAT GAN</span>
            </div>

            <div class="houseTitle">
              <span>Shick Apartment With Views</span>
            </div>

            <div class="price">
              <span>$200/night</span>
            </div>

            <div class="reviews">
              <span class="star">&#9733</span>
              <span class="rating">4.54</span>
              <span class="totalReviews">(171)</span>
            </div>
          </div>

          <div class="house">
            <div class="frontImage">
              <img class="frontPageImages" src="images/OaPhoto011_small.jpg" alt="picture of a house" />
              <div class="heart">
                <svg viewBox="0 0 24 24" fill="#484848" fill-opacity="0.5" stroke="#ffffff" stroke-width="2"
                  focusable="false" aria-label="Add listing to a list" role="img" stroke-linecap="round"
                  stroke-linejoin="round" style="height: 28px; width: 28px; display: block; overflow: visible;">
                  <path
                    d="m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6"
                    stroke-linejoin="round"></path>
                </svg>
              </div>
            </div>

            <div class="houseTypeAndCity">
              <span>ENTIRE APARTMENT &#183 RAMAT GAN</span>
            </div>

            <div class="houseTitle">
              <span>Shick Apartment With Views</span>
            </div>

            <div class="price">
              <span>$200/night</span>
            </div>

            <div class="reviews">
              <span class="star">&#9733</span>
              <span class="rating">4.54</span>
              <span class="totalReviews">(171)</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);