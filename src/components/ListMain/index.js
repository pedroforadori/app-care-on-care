import React, { Component } from 'react';

import { Detail, Title, Card } from './style';

import ApiService from '../../tools/ServicesConfig/ApiService';
import LinkWrapper from '../../tools/LinkWrapper';

class ListMain extends Component {
    constructor() {
        super();

        this.state = {
            nurse: []
        }
    }

    componentDidMount() {
        ApiService.ListNurse()
            .then(res => {
                this.setState({ nurse: [...this.state.nurse, ...res.nurse] })
            });
    }

    render() {
        const { nurse } = this.state;

        return(
            <div className="wrapper">
                {
                    nurse.map((line, index) => {
                        return (
                            <Card className="content" key={index}>
                                <Title>{line.name}</Title>
                                <LinkWrapper className="button link" to={`/detail/${line._id}`}>Apply</LinkWrapper>
                                <Detail>{line.proffession}</Detail>
                            </Card>
                        );
                    })
                } 
            </div>
        )



    }
}

export default ListMain;