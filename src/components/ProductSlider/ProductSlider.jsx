import React from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import '../style.css';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';

const ProductSlider = () => {

  let products = [
    {
      name : "Adorable BunnyHop Baby Shoes",
      image : "https://demo.bagisto.com/bagisto-common/cache/medium/product/521/Ca725Cof60gloeFYBf4ccYnfkxGEh8G3LIgn1LVF.webp",
      title : "As low as",
      previousPrice : "",
      price : "$16.99",
      status : "New"
    },
    {
      name : "Adventure Seeker Boys' Half Sleeve Graphic T-Shirt",
      image : "https://demo.bagisto.com/bagisto-common/cache/medium/product/306/cFWJlmL8oJBhzD5sRzh3vp9Cyc2lnWP98fAnnqBH.webp",
      title : "As low as",
      previousPrice : "",
      price : "$49.99",
      status : "New"
    },
    {
      name : "AeroFit Women's Fitness Performance Jacket",
      image : "https://demo.bagisto.com/bagisto-common/cache/medium/product/59/ifkPboTqNbmEaDE0Oiceb2gp518QoV6ISyfh24pL.webp",
      title : "As low as",
      previousPrice : "",
      price : "$87.99",
      status : "New"
    },
    {
      name : "All-in-One Smart Casual Outfit Set",
      image : "https://demo.bagisto.com/bagisto-common/cache/medium/product/174/6zgmyY14TQ2WqCxEEdENs8tSfI6bAJbq0bjljQOq.webp",
      title : "",
      previousPrice : "$176.96",
      price : "$168.96",
      status : "Sale"
    },
    {
      name : "AquaStride Men's Stylish Waterproof Casual Sports Shoes",
      image : "https://demo.bagisto.com/bagisto-common/cache/medium/product/479/kExtv9yWu6yqFYHMrkZvDMR16FPfIWcplQqwGDI3.webp",
      title : "As low as",
      previousPrice : "",
      price : "$85.99",
      status : "New"
    },
    {
      name : "Arctic Bliss Stylish Winter Scarf",
      image : "https://demo.bagisto.com/bagisto-common/cache/medium/product/182/pJpBLP0t16lAXy62nHdYhjDgSWKzteiijuGu0QSJ.webp",
      title : "",
      previousPrice : "$25.99",
      price : "24.99",
      status : "Sale"
    },
    {
      name : "Arctic Cozy Knit Unisex Beanie",
      image : "https://demo.bagisto.com/bagisto-common/cache/medium/product/184/46b2yaNraeL4zEOXSjzVUnKf50h3gFebIfs5axaa.webp",
      title : "",
      previousPrice : "",
      price : "19.99",
      status : "New"
    },
    {
      name : "Arctic Frost Winter Accessories Bundle",
      image : "https://demo.bagisto.com/bagisto-common/cache/medium/product/175/aKFTZ36lejYZmrAL5hlOWWiYCkN2BMXVUwM6z6bL.webp",
      title : "Starting at",
      previousPrice : "",
      price : "$17.99",
      status : "Sale"
    },
    {
      name : "Arctic Touchscreen Winter Gloves",
      image : "https://demo.bagisto.com/bagisto-common/cache/medium/product/183/shw0pym2GqbsEbnuvsGLknszOzTjv2gDkYYDWGHn.webp",
      title : "",
      previousPrice : "$29.99",
      price : "$27.99",
      status : "Sale"
    },
    {
      name : "Arctic Warmth Wool Blend Socks",
      image : "https://demo.bagisto.com/bagisto-common/cache/medium/product/185/jM27OiFkT55XpllZWgZqqqei9UrmBtHt6BAazrd2.webp",
      title : "",
      previousPrice : "$18.99",
      price : "$17.99",
      status : "Sale"
    }

  ]

  function moveRight(){
    const slider = document.querySelector(".product-slider");
    const card = document.querySelector(".product-card");
    let scrollWidth = card.clientWidth + 20;
    
    slider.scrollBy({
      top: 0,
      left: scrollWidth,
      behavior: 'smooth'
    }) 
  }

  function moveLeft(){
    const slider = document.querySelector(".product-slider");
    const card = document.querySelector(".product-card");
    let scrollWidth = card.clientWidth + 20;

    slider.scrollBy({
      top: 0,
      left: -scrollWidth,
      behavior: 'smooth'
    }) 
  }


  return (
    <div className='product-div'>
      <div className='product-title d-flex justify-content-between align-items-center mb-3'>
        <h1 className='fs-2'>New Products</h1>
        <div className='arrows-box d-flex gap-4'>
          <FaArrowLeft onClick={moveLeft} />
          <FaArrowRight onClick={moveRight} />          
        </div>
      </div>
      <div className='product-slider d-flex gap-4 flex-nowrap overflow-hidden'>
      {
        products.map((item) => {
          return (
                <div className='product-card d-flex flex-column gap-2'>
                  <div className='product-image'>
                    <div className='product-status' style={{backgroundColor : item.status == 'New' ? "#060c3b" : "#e51a1a"}}>
                      <p>{item.status}</p>
                    </div>
                    <div className='product-like position-absolute'>
                        <div className='product-like-child rounded-1 bg-light mb-2 '>
                          <FaRegHeart />
                        </div>
                        <div className='product-like-child rounded-1 bg-light m-0 '>
                          <FaArrowRightArrowLeft />
                        </div>
                    </div>
                    <div className='add-product position-absolute'>
                      <button className='bg-light py-2 px-4 rounded-2'>Add To Card</button>
                    </div>
                    <img src={item.image} alt='' />
                  </div>  
                  <h5 className='m-0'>{item.name}</h5>
                  <div className='d-flex align-items-center gap-3'>
                    <p className='price-title fw-bold'>{item.title}</p>
                    <h5 className='previous-price text-decoration-line-through m-0'>{item.previousPrice}</h5>
                    <h5 className='price m-0'>{item.price}</h5>
                  </div>
                </div>
          )
        })
      } 
      </div>
      <div className='view-all d-flex justify-content-center mt-5'>
        <button className='view-all-button'>View All</button>
      </div> 
    </div>
  )
}

export default ProductSlider