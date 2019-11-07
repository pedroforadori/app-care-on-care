import React, { Component } from 'react';

import HeaderMain from '../HeaderMain';
import { NameNurse, Box, AlignText, AlignTitle } from './style';

import ApiService from '../../tools/ServicesConfig/ApiService';
import ButtonContact from '../ButtonContact';

class DetailNurse extends Component {
    constructor() {
        super();

        this.state = {
            nurse: []
        }
    }

    componentDidMount() {
        ApiService.ListNurseById(this.props.match.params.id)
            .then(res => {
                this.setState({
                    nurse: [res.nurse]
                })
            });
    }

    render() {
        const { nurse } = this.state;

        return (
            <>
                <HeaderMain />
                <article className="content">
                    <div className="wrapper">
                        <Box>
                            <NameNurse>{nurse.length ? nurse[0].name : ""}</NameNurse>
                            <AlignTitle>Especialidade: </AlignTitle>
                            <AlignText>{nurse.length ? nurse[0].proffession : ""}</AlignText>
                            <AlignTitle>CPF: </AlignTitle>
                            <AlignText>{nurse.length ? nurse[0].cpf : ""}</AlignText>
                            <AlignTitle>País: </AlignTitle>
                            <AlignText>{nurse.length ? nurse[0].country : ""}</AlignText>
                            <AlignTitle>Estado: </AlignTitle>
                            <AlignText>{nurse.length ? nurse[0].state : ""}</AlignText>
                            <AlignTitle>Cidade: </AlignTitle>
                            <AlignText>{nurse.length ? nurse[0].city : ""}</AlignText>
                            <AlignTitle>Endereço: </AlignTitle>
                            <AlignText>{nurse.length ? nurse[0].adress : ""}</AlignText>
                            <AlignTitle>Número: </AlignTitle>
                            <AlignText>{nurse.length ? nurse[0].number : ""}</AlignText>
                            <AlignTitle>Whatsapp: </AlignTitle>
                            <AlignText>{nurse.length ? nurse[0].phone : ""}</AlignText>
                            <AlignTitle>Email: </AlignTitle>
                            <AlignText>{nurse.length ? nurse[0].email : ""}</AlignText>
                            <AlignTitle>Descrição: </AlignTitle>
                            <AlignText>{nurse.length ? nurse[0].email : ""}</AlignText>
                            <ButtonContact></ButtonContact>
                        </Box>
                    </div>
                </article>
            </>
        )
    }

};

export default DetailNurse;