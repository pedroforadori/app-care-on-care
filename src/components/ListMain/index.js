import React, { Component } from 'react';

import { List, Content, Detail, Title, Apply, Spacing } from './style';
import ApiService from '../../tools/ApiService';
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
                <List key={index}>
                    <Content>
                        <Title>{line.name}</Title>
                        <Apply> <LinkWrapper to={`/detail/${line._id}`}>Apply</LinkWrapper></Apply>
                        <Detail>{line.proffession}</Detail>
                        <Spacing />
                    </Content>
                </List>
            );
        })

        return lines;
    }
}

export default ListMain;