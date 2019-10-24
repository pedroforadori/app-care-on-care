import React, { useState } from 'react';

import LogoImg from '../../img/logo-img.png';
import LogoText from '../../img/logo-text.png';

import { Header, LogoImgStyle, LogoTextStyle, HeaderWrapper } from './style';
import LinkWrapper from '../../tools/LinkWrapper';
import DropdownMenu from '../DropdownMenu/index';

const HeaderMain = () => {

    const [modalIsVisible, showModal] = useState(true)

    const menu = [
        {text: 'Como usuário', url: ''}, 
        {text: 'Como parceiro', url: ''}
    ]

    return(
        <Header>
            <HeaderWrapper className="wrapper">
                <LinkWrapper to={`/`}>
                    <LogoImgStyle src={LogoImg} />
                    <LogoTextStyle src={LogoText} />   
                </LinkWrapper>    
                 <button className="login-button link">Entre</button>
                 <DropdownMenu text={'Registre-se'} items={menu} />
            </HeaderWrapper>
        </Header>
    )
};

export default HeaderMain;