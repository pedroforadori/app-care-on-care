import React, { Component } from 'react';

import { Detail, Title, Apply, Spacing } from './style';

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

        const lines = nurse.map((line, index) => {
            return (
                <article className="content">
                    <div className="wrapper" key={index}>
                        <Title>{line.name}</Title>
                        <Apply> <LinkWrapper to={`/detail/${line._id}`}>Apply</LinkWrapper></Apply>
                        <Detail>{line.proffession}</Detail>
                        <Spacing />
                    </div>
                </article>
            );
        })

        return lines;
    }
}

export default ListMain;