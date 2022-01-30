/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
import './Banner.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Banner() {
  return (
    <div className="App">
      <AliceCarousel autoPlay activeIndex infinite disableButtonsControls autoPlayInterval="3000">
        <img src="/next/meeting_next.jpg" className="sliderimg" alt="" />
        <img src="/next/durbar_conference.jpg" className="sliderimg" alt="" />
        <img src="/next/jsw_autorium_delhi.jpg" className="sliderimg" alt="" />
        <img src="/next/leela_goa_party_next.jpg" className="sliderimg" alt="" />
        <img src="/next/baby_shower.jpg" className="sliderimg" alt="" />
        <img src="/next/date_high_ultra_banglore.jpg" className="sliderimg" alt="" />
      </AliceCarousel>
    </div>
  );
}

export default Banner;
