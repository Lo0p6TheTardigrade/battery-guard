import React from 'react';
import Img from './Img';

const Header = () => {
  return (
    <header>
      Header
      <Img
        src="https://res.cloudinary.com/dp5onh4yw/image/upload/v1712369914/assets/images/BatteryGuardLogoB_da04hb.webp"
        alt="logo du site"
        classX="logo"
        height={90}
        width={210}
      />
    </header>
  );
};

export default Header;
