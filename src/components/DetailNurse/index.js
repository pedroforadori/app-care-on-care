import React, { Component, useState, useEffect } from 'react';

import HeaderMain from '../HeaderMain';
import ApiService from '../../tools/ServicesConfig/ApiService';
import Loader from '../Loader';

import {
    CardHeader,
    CardFooter,
    Title,
    Tag,
    Description,
    List,
    ListTitle,
    ListItem
} from './style'

const DetailNurse = props => {

    const [nurse, setNurse] = useState(false)

    useEffect(() => {
        ApiService.ListNurseById(props.match.params.id)
            .then(setNurse)
    }, [])

    return(
        <>
            <HeaderMain />
            <div className="wrapper">
            {
               nurse
               ? <div className="card">
                   <CardHeader>
                        <Title>{ nurse.name }</Title>
                        <Tag>{ nurse.specialtyProffesion }</Tag>
                   </CardHeader>

                    <Description>{ nurse.proffession }</Description>

                   <List>
                     <ListTitle>E-mail</ListTitle>
                     <ListItem>{ nurse.email }</ListItem>

                     <ListTitle>Estado</ListTitle>
                     <ListItem>{ nurse.state }</ListItem>

                     <ListTitle>Cidade</ListTitle>
                     <ListItem>{ nurse.city }</ListItem>
                   </List>

                   <CardFooter>
                        <button className="button">Entrar em contato</button>
                   </CardFooter>
                 </div> 
               : <Loader />
            }
            </div>
        </>
    )
}




// class DetailNurse extends Component {
//     constructor() {
//         super();

//         this.state = {
//             nurse: []
//         }
//     }

//     componentDidMount() {
//         ApiService.ListNurseById(this.props.match.params.id)
//             .then(res => {
//                 this.setState({
//                     nurse: [res.nurse]
//                 })
//             });
//     }

//     render() {
//         const { nurse } = this.state;

//         return (
//             <>
//                 <HeaderMain />
//                 <article className="content">
//                     <div className="wrapper">
//                         <Box>
//                             <NameNurse>{nurse.length ? nurse[0].name : ""}</NameNurse>
//                             <AlignTitle>Especialidade: </AlignTitle>
//                             <AlignText>{nurse.length ? nurse[0].proffession : ""}</AlignText>
//                             <AlignTitle>CPF: </AlignTitle>
//                             <AlignText>{nurse.length ? nurse[0].cpf : ""}</AlignText>
//                             <AlignTitle>País: </AlignTitle>
//                             <AlignText>{nurse.length ? nurse[0].country : ""}</AlignText>
//                             <AlignTitle>Estado: </AlignTitle>
//                             <AlignText>{nurse.length ? nurse[0].state : ""}</AlignText>
//                             <AlignTitle>Cidade: </AlignTitle>
//                             <AlignText>{nurse.length ? nurse[0].city : ""}</AlignText>
//                             <AlignTitle>Endereço: </AlignTitle>
//                             <AlignText>{nurse.length ? nurse[0].adress : ""}</AlignText>
//                             <AlignTitle>Número: </AlignTitle>
//                             <AlignText>{nurse.length ? nurse[0].number : ""}</AlignText>
//                             <AlignTitle>Whatsapp: </AlignTitle>
//                             <AlignText>{nurse.length ? nurse[0].phone : ""}</AlignText>
//                             <AlignTitle>Email: </AlignTitle>
//                             <AlignText>{nurse.length ? nurse[0].email : ""}</AlignText>
//                             <AlignTitle>Descrição: </AlignTitle>
//                             <AlignText>{nurse.length ? nurse[0].email : ""}</AlignText>
//                             <ButtonContact></ButtonContact>
//                         </Box>
//                     </div>
//                 </article>
//             </>
//         )
//     }

// };

export default DetailNurse;