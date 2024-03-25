import React from "react";
import { useState } from "react";
import './style.css'
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function CategorySlider() {

  let CategoryData = [
    {
      image : "https://demo.bagisto.com/bagisto-106-221-90-50/storage/category/2/OYsuHioryn5KrOE7p8wQ2hQ3BReXY5CSbDzhvEk8.webp",
      title : "Men",
    },
    {
      image : "https://demo.bagisto.com/bagisto-106-221-90-50/storage/category/4/oT8LA8gG6K7UlBgzB3ZVOjczO3iKyRkrVLD6d1s9.webp",
      title : "Women"
    },
    {
      image : "https://demo.bagisto.com/bagisto-106-221-90-50/storage/category/3/IZckbPVQSOboHJrXmguJnJA3jPCUD1GfjSZHgtB3.webp",
      title : "Kids"
    }
  ];

  function moveRight(){
    const slider = document.querySelector(".slider");

    slider.scrollBy({
      top: 0,
      left: +120,
      behavior: 'smooth'
    }) 
  }

  function moveLeft(){
    const slider = document.querySelector(".slider");
    
    slider.scrollBy({
      top: 0,
      left: -120,
      behavior: 'smooth'
    }) 
  }
  
  return (
    <div className="main-slider">
      <div className="arrow-div arrow-left-div" onClick={moveLeft}>
          <FaArrowLeft />
        </div>
        <div className="arrow-div arrow-right-div" onClick={moveRight}>
          <FaArrowRight />
        </div>
      <div className="slider">
        {
          CategoryData.map((item) => {
            return(
              <div className="slider-card">
                <img className="slider-image" src={item.image} alt="" />
                <h2>{item.title}</h2>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}