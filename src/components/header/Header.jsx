import React from 'react';
import CTA from './CTA';
import ME3 from '../../assets/ME3.png';
import HeaderSocials from './HeaderSocials';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>David Adeola</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME3} alt="me" />
        </div>
        <a className='scroll__down' href="#contact">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;