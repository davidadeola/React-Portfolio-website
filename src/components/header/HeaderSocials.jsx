import React from 'react';
import {BsLinkedin, BsTwitter} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
      <div className="header__socials">
          <a href="https://linkedin.com/in/david-adeola" target='_blank'><BsLinkedin /></a>
          <a href="https://github.com/davidadeola" target='_blank'><FaGithub /></a>
          <a href="https://twitter.com/DavidAdeola_" target='_blank'><BsTwitter /></a>
      </div>
  )
}

export default HeaderSocials;