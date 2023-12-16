import React from 'react';
import '../assets/css/card.css'; 

const Card = ({ title, description, imageUrl }) => {
  return (
    <div class="card">
      <div class="image-container">
                  
          <div class="price">$49.9</div>
      </div>

      <div class="content">
          <div class="brand">ADIDAS</div>
          <div class="product-name">Classic oversized hoodie</div>
      </div>

      <div class="button-container">
          <button class="buy-button button">Buy Now</button>
          <button class="cart-button button">
              <svg viewBox="0 0 27.97 25.074" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,1.175A1.173,1.173,0,0,1,1.175,0H3.4A2.743,2.743,0,0,1,5.882,1.567H26.01A1.958,1.958,0,0,1,27.9,4.035l-2.008,7.459a3.532,3.532,0,0,1-3.4,2.61H8.36l.264,1.4a1.18,1.18,0,0,0,1.156.955H23.9a1.175,1.175,0,0,1,0,2.351H9.78a3.522,3.522,0,0,1-3.462-2.865L3.791,2.669A.39.39,0,0,0,3.4,2.351H1.175A1.173,1.173,0,0,1,0,1.175ZM6.269,22.724a2.351,2.351,0,1,1,2.351,2.351A2.351,2.351,0,0,1,6.269,22.724Zm16.455-2.351a2.351,2.351,0,1,1-2.351,2.351A2.351,2.351,0,0,1,22.724,20.373Z" id="cart-shopping-solid"></path>
              </svg>

          </button>
      </div>
  </div>
  );
};

export default Card;
