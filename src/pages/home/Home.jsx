import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import andor from '../../assets/img/1.jpeg';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-main">
      <img className=' ml-20 flex items-center justify-center' src={andor} alt='New film' />
        <div className="home-texts">
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
      <footer>
        <div className="footer-links flex items-center justify-center my-1.5">
          <a href="http://facebook.com">
            <FaFacebook className="link mr-3 ml-3" />
          </a>
          <> </>
          <a href="http://twitter.com">
            <FaTwitter className="link mr-3 ml-3" />
          </a>
          <> </>
          <a href="http://instagram.com">
            <FaInstagram className="link mr-3 ml-3" />
          </a>
          <> </>
          <a href="http://youtube.com">
            <FaYoutube className="link mr-3 ml-3" />
          </a>
        </div>
        <p className="footer-text flex items-center justify-center">
          TM & © Lucasfilm Ltd. All Rights Reserved{" "}
        </p>
      </footer>
    </div>
  );
}