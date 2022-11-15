import React from "react";

import andor from '../../assets/img/1.jpeg';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-main flex items-center justify-center flex-col">
        <img className='w-3/4' src={andor} alt='New film' />
        <div className="w-3/4 home-texts my-12 text-justify font-semibold mx-10">
          <p className="p-text py-2.5">
            The crew behind Andor, now streaming on Disney+, was hard 
            at work in production of the first season at Pinewood Studios 
            at the time and Arjona and creator Tony Gilroy discussed Bix’s 
            character arc at length. Now more than three quarters of the 
            way through the season, viewers have witnessed the downward 
            spiral taking Bix from self-made salvage dealer at the start to 
            tortured captive being held against her will by the Empire. 
            “Bix is bold and fearless, hardworking and incredibly loyal 
            — sometimes to her own detriment,” Arjona explains. But her 
            world begins to unravel swiftly.
          </p>
        </div>
      </div>
    </div>
  );
}