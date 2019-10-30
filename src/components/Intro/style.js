import styled from 'styled-components';

const IntroWrapper = styled.div`
  height: 50vh;
  background: url(${props => props.imageUrl}) 0% 50% no-repeat;
  background-size: 55%;
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const IntroText = styled.p`
  font-family: 'Poppins', sans-serif;
  width: 45%;
  font-size: 2.5em;
  font-weight: 600;
  text-align: right;
  /* text-transform: lowercase; */
  line-height: 1.1;

  strong { color: var(--color-highlight)}
`

export { IntroWrapper, IntroText }

