import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import MyNavbar from './components/MyNavbar';
import Herocroser from './components/Herocroser';
import HeroCaption from './components/HeroCaption';
import CategorySlider from './components/CategorySlider';
import Footer from './components/Footer/Footer';
import ProductSlider from './components/ProductSlider/ProductSlider';
import GameSection from './components/GameSection/GameSection';
import ProfileSection from './components/ProfileSection/ProfileSection';
import Features from './components/Features/Features';


const App = () => {

  let ProfileSectionData1 = {
    image : "https://demo.bagisto.com/bagisto-common/storage/theme/6/BM9JR17OYnbD1n2kK9PqFj9ojBIxk4TGJBOy5P61.webp",
    row : "simple"
  }
  let ProfileSectionData2 = {
    image : "https://demo.bagisto.com/bagisto-common/storage/theme/10/GhiESeKgXxebvQ0nS4JBRd0Gbf0ASvQDaUFKS6uT.webp",
    row : "reverse"
  }
  let gameSectionData1 = [
    {
        image : "https://demo.bagisto.com/bagisto-common/storage/theme/5/3XL8cmo8sM0K8wuJm9wz6csE3rMXBe9pfYG9IlHW.webp",
        title : "Our Collections"
    },
    {
        image : "https://demo.bagisto.com/bagisto-common/storage/theme/5/d6GYuRe8cV9pby9uxfKmhRItjnJ48wVOAFJemptv.webp",
        title : "Our Collections"
    },
    {
        image : "https://demo.bagisto.com/bagisto-common/storage/theme/5/7ngJKLLNxpwAegtDwhfuVUnrTKS8fSFDUVOdUokB.webp",
        title : "Our Collections"
    },
    {
        image : "https://demo.bagisto.com/bagisto-common/storage/theme/5/DoopG1tsDX3zYNhbz0IvwkRegqxqvdLSCO1BGlbf.webp",
        title : "Our Collections"
    },
    {
        image : "https://demo.bagisto.com/bagisto-common/storage/theme/5/KrdvSvksB2A9Zi9nIfcEMaRFxTaeXUUY7a1R8r1K.webp",
        title : "Our Collections"
    },
    {
        image : "https://demo.bagisto.com/bagisto-common/storage/theme/5/qKtsz80jsMSm2hcyrHoyg6c13e8nWyUG7yzayfji.webp",
        title : "Our Collections"
    },
  ];
  let gameSectionData2 = [
    {
        image : "https://demo.bagisto.com/bagisto-common/storage/theme/8/UQrrhngMrjNBrOtX9O2T63zFsWbTAEAgsZliWQfI.webp",
        title : "Our Collections"
    },
    {
        image : "https://demo.bagisto.com/bagisto-common/storage/theme/8/A4LcK6YbIWuHLzM8ajzyc8QTFoJQUIvZzhqjGx95.webp",
        title : "Our Collections"
    }
  ];

  return (
    <div style={{paddingTop : '73px'}}>
      <Herocroser />
      <HeroCaption />
      <CategorySlider />
      <ProductSlider id={0} />
      <GameSection data={gameSectionData1} column={2} /> 
      <ProfileSection data={ProfileSectionData1} />
      <ProductSlider id={1} />
      <GameSection data={gameSectionData2} column={1} />
      <ProductSlider id={2} />
      <ProfileSection data={ProfileSectionData2} />
      <Features />
    </div>
  )
}

export default App