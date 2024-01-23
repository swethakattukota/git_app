import React, { useState } from 'react';
import maruti from '../images/maruti.png';
import hyundai from '../images/hyundai.jpg';
import benz from '../images/benz.jpg';
import ford from '../images/ford.jpg';
import bmw from '../images/bmw.jpg';
import hondo from '../images/hondo.jpg';
import mahindra from '../images/mahindra.png';
import more from '../images/more.png';
import renault from '../images/renault.jpg';
import tata from '../images/tata.png';
import toyoto from '../images/toyoto.jpg';
import volks from '../images/volkswagen.jpg';
import LogoForm from '../components/LogoForm';

const ImageGrid = () => {
  const imageUrls = [
    maruti,
    hyundai,
    renault,
    hondo,
    tata,
    ford,
    volks,
    mahindra,
    toyoto,
    bmw,
    benz,
    more
  ];
  const [visibleDetails, setVisibleDetails] = useState(false);
  const handleClick = () => {
    setVisibleDetails(!visibleDetails)
  }
  return (
    <div>
      <div className="image-grid">
        {imageUrls.map((imageUrl, index) => (
          <div key={index} className="image-item">
            <img className="image-src" onClick={handleClick} src={imageUrl} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      {visibleDetails ?  <LogoForm />: ""}

    </div>
  );
};

export default ImageGrid;
