import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import MyNavbar from './components/MyNavbar';
import Herocroser from './components/Herocroser';
import HeroCaption from './components/HeroCaption';
import CategorySlider from './components/CategorySlider';
import Footer from './components/Footer/Footer';
import ProductSlider from './components/ProductSlider/ProductSlider';


const App = () => {
  return (
    <div>
      <Herocroser />
      <HeroCaption />
      <CategorySlider />
      <ProductSlider />
    </div>
  )
}

export default App