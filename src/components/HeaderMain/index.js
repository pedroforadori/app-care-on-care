import React from 'react';

import LogoImg from '../../img/logo-img.png';
import LogoText from '../../img/logo-text.png';

import { Header, LogoImgStyle, LogoTextStyle } from './style';

const HeaderMain = () => (
    <Header>
        <LogoImgStyle src={LogoImg} />
        <LogoTextStyle src={LogoText} />
    </Header>
);

export default HeaderMain;