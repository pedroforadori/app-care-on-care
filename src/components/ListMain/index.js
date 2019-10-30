import React, { useEffect, useContext } from 'react';

import { AppContext } from '../AppContext';

import ApiService from '../../tools/ServicesConfig/ApiService';
import LinkWrapper from '../../tools/LinkWrapper';
import Filter from '../Filter/index';
import Loader from '../Loader/index';

import { Detail, Title, Card } from './style';



const ListMain = () => {
    
    const { appState, setState } = useContext(AppContext)
    const { nurseList } = appState

    useEffect(() => {
        ApiService.ListNurse()
            .then(res => setState({ ...appState, nurseList: [...res] }))
    }, [appState, setState])

    return(
        <>
        <Filter />
        {
            nurseList.length 
            ? nurseList.map((line, index) => {
                return (
                    <Card className="content" key={index}>
                    <Title>{line.name}</Title>
                    <LinkWrapper className="button link" to={`/detail/${line._id}`}>Ver detalhes</LinkWrapper>
                    <Detail>{line.proffession}</Detail>
                    </Card>
                );
            })
            : <Loader />
        } 
        </>       
    )
}
        
export default ListMain;
