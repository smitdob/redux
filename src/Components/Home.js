import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <>
      <div className="add-to-cart">
        <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-png-image-download-pngm-2.png" alt="cart" />
      </div>
      <div className="cart-wrapper">
        <div className='image-wrapper item'>
            <img src="https://www.pngmart.com/files/15/Apple-iPhone-11-PNG-Image.png" alt="" />
        </div>
        <div className='text-wrapper item'>
            <span>
              Iphone
            </span>
            <span>
              price : $150.00
            </span>
        </div>
        <div className='btn-wrapper item'>
            <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </>

  )
}

export default Home