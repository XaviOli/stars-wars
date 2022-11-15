import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (<footer>
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
  </footer>)
}
