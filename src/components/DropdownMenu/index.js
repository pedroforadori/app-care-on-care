import React, { useState } from 'react';
import { DropdownWrapper, Trigger, Menu } from './style';
import LinkWrapper from '../../tools/LinkWrapper/index';


const DropdownMenu = ({text, items}) => {
  
  return(
    <DropdownWrapper>
      <Trigger className="button login-button">{text}</Trigger>
      <Menu className>
        { items.map(item => <LinkWrapper to={`${item.url}`}> {item.text} </LinkWrapper>) }
      </Menu>

    </DropdownWrapper>
  )
}

export default DropdownMenu