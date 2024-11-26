import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An eCommerce website is an online platform that enables businesses to sell 
            products or services directly to customers over the internet.
            It typically includes features such as a homepage showcasing popular 
            products or promotions, product categories for easy navigation, detailed
            product pages with images, descriptions, and reviews, a shopping cart for 
            collecting items, and a secure checkout process to finalize purchases. 
            </p>
            <p>eCommerce sites often offer user accounts for order tracking, a search 
                function, and filters to help customers find products efficiently.
            </p>
      </div>
    </div>
  )
}

export default DescriptionBox
