import React, { useState, useEffect } from "react";

import HeaderMain from "../HeaderMain";
import ApiService from "../../tools/ServicesConfig/ApiService";
import Loader from "../Loader";
import LoginModal from "../LoginModal";

import {
  CardHeader,
  CardBody,
  CardFooter,
  Title,
  Tag,
  Description,
  List,
  ListTitle,
  ListItem
} from "./style";

const DetailNurse = props => {
  const [nurse, setNurse] = useState(false);
  const [isPrivateDataVisible, togglePrivateData] = useState(false);
  const [modalIsVisible, showModal] = useState(false);

  const validateToken = () => {
    const token = '23.3e'
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYmI0MmI5NWY2MGU0OTc3MzQyZWIyYyIsImlhdCI6MTU3MjkwMzU1NSwiZXhwIjoxNTcyOTg5OTU1fQ.mqLZdbpRxt0GZmM91aPdu0YXYA_dtDOoL57dLEfjBOk'
    
    ApiService.ValidateToken(token)
      .then(() => togglePrivateData(true))
      .catch(() => showModal(true))
  }

  useEffect(() => {
    ApiService.ListNurseById(props.match.params.id)
      .then(setNurse)
  }, [props.match.params.id]);

  return (
    <>
      <HeaderMain />
      <div className="wrapper">
        {nurse ? (
          <div className="card no-padding">
            <CardHeader>
              <Title>{nurse.name}</Title>
              <Tag>{nurse.specialtyProffesion}</Tag>
            </CardHeader>

            <CardBody>
              <Description>{nurse.proffession}</Description>
              <List>
                <ListTitle>Estado</ListTitle>
                <ListItem>{nurse.state}</ListItem>
                <ListTitle>Cidade</ListTitle>
                <ListItem>{nurse.city}</ListItem>
              </List>
            </CardBody>

            <CardFooter>
              {isPrivateDataVisible  
               ? (
                  <>
                    <button className="button">{nurse.email}</button>
                    <button className="button">{nurse.phone}</button>
                  </>
                ) : (
                  <button className="button" onClick={() => validateToken()}>
                    Ver informações de contato
                  </button>
                )
              }
            </CardFooter>
          </div>
        ) : (
          <Loader />
        )}
        {  modalIsVisible && <LoginModal opened={modalIsVisible} close={() => showModal(false)} /> }
      </div>
    </>
  );
};

export default DetailNurse;
