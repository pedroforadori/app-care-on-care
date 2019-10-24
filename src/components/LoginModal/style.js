import styled from 'styled-components';

const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  justify-content: center;
  align-items: center;
  display: ${ props => props.opened ? 'flex' : 'none' }
`;


const ModalBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.25);
  z-index: 1;
`;

const ModalWindow = styled.div`
  position: relative;
  width: 600px;
  height: 400px;
  background-color: #fff;
  z-index: 2;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-around;

  .button {
    width: 50%;
    padding: 30px 20px;
    font-weight: 600;
    /* border-bottom: 1px solid transparent; */
    /* text-transform: uppercase; */
    font-size: 1.2em;
    /* letter-spacing: 2px; */
    outline: none;
    color: #ccc;
    cursor: pointer;
    /* font-family: inital; */

    &.selected {
      color: #666;
      /* text-decoration: underline; */
      /* color: var(--color-highlight); */
      /* border-color: var(--color-highlight); */
      /* box-shadow: inset 0px -9px 5px -8px rgba(0,123,255,.5); */
    }

  }
`

const ModalBody = styled.div`
  padding: 30px;
`


const ModalFooter = styled.div``

export {
  ModalWrapper,
  ModalBackdrop,
  ModalWindow,
  ModalHeader,
  ModalBody,
  ModalFooter
}