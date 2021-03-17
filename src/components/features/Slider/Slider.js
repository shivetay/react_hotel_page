import React from 'react';

import { Fade } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';
import './Slider.scss';

import SliderImage from './SliderImage';

const Slider = () => {
  return (
    <div className='Slider'>
      <div className='slide-container'>
        <Fade>
          {SliderImage.map((slide) => {
            return (
              <div className='Slider__Container '>
                <div className='Slider__Text'>
                  <h1>{slide.header}</h1>
                  <p>{slide.paragraph}</p>
                </div>
                <div>
                  <img
                    className='Slider__Image'
                    src={slide.photo}
                    key={slide.id}
                    alt='slide_content'
                  />
                </div>
              </div>
            );
          })}
        </Fade>
      </div>
    </div>
  );
};

export default Slider;
