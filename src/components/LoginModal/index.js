import  React, { useState } from 'react';

import {   
  ModalWrapper,
  ModalBackdrop,
  ModalWindow,
  ModalHeader,
  ModalBody,
  ModalFooter } from './style'


const Login = ({ opened, close }) => {

  return(
    <ModalWrapper opened={opened} >
      <ModalWindow>
        
        <ModalHeader></ModalHeader>
        <ModalBody></ModalBody> 
        <ModalFooter></ModalFooter> 
      
      </ModalWindow>
      <ModalBackdrop onClick={close} />
    </ModalWrapper>
  )

}

export default Login