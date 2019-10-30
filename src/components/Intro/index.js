import React from 'react';
import { IntroWrapper, IntroText } from './style';

import illustration from '../../img/undraw_doctors_hwty.svg'


const Intro = () => {
  return(
    <IntroWrapper imageUrl={illustration} className="wrapper">
      <IntroText>
        <strong>Encontre blá</strong> blá blá blá lorem lorem Diguin 
        <strong> vai fazer</strong> um <strong>texto</strong> beeeem vendedor 👌
      </IntroText>
    </IntroWrapper>
  )
}

export default Intro