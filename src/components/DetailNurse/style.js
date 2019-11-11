import styled from "styled-components";

const Title = styled.h2`
  text-transform: uppercase;
  color: var(--color-highlight);
  font-size: 1.5em;
  letter-spacing: 2px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 25px;
  background: #fff;
`;

const CardBody = styled.div`
  padding: 25px;
  margin-bottom: 20px;
  background: #fff;
`;

const CardFooter = styled.div`
  text-align: center;
  padding: 25px;
  background: #fff;
  /* display: flex; */

  .button {
    font-size: 0.85em;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--color-highlight);
    border-radius: 10px;
    cursor: pointer;
    -webkit-letter-spacing: 1px;
    -moz-letter-spacing: 1px;
    -ms-letter-spacing: 1px;
    letter-spacing: 1px;
    outline: none;
    margin: 0 25px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Description = styled.p`
  color: #888;
`;

const List = styled.dl`
  margin-top: 50px;
  line-height: 1.5;
`;

const ListTitle = styled.dt`
  color: #666;
  display: inline-block;
  margin-right: 10px;
`;

const ListItem = styled.dd`
  font-weight: 600;
  display: inline-block;
  width: 90%;
`;

const Tag = styled.span`
  background: #ccc;
  padding: 5px 15px;
  border-radius: 15px;
  display: inline-block;
  margin: 0 15px;
  letter-spacing: 1px;
  font-size: 0.95em;

  &:empty { display: none; }
`;

export {
  Title,
  Tag,
  CardHeader,
  CardBody,
  CardFooter,
  Description,
  List,
  ListTitle,
  ListItem
};
