import React, { useState, useEffect, useContext } from 'react';
import { FilterWrapper, FilterButton } from './style';

import ApiService from '../../tools/ServicesConfig/ApiService';
import { AppContext } from '../AppContext/index';


const Filter = () => {

  const { appState, setState } = useContext(AppContext)

  const [specialities, loadSpecialities] = useState([])
  const [states, loadStates] = useState([])
  const [city, loadCities] = useState([])

  const [selectedState, selectState] = useState(null)
  

  const filterResults = () => {
    setState({ ...appState, nurseList: [] })
    
      ApiService.ListNurse()
        .then(res => setState({ ...appState, nurseList: [...res] }))
  }

  useEffect(() => {
    ApiService.ListSpecialities().then(loadSpecialities)
    // ApiService.ListStates().then(loadStates)
    // ApiService.ListCities().then(loadCities)
  })
  

  return(
    <FilterWrapper>
      <div className="filter" data-fetching={!specialities.length}>
        <select>
          <option disabled={specialities.length}>Especialidade</option>
          {
            specialities.map(s => <option key={s._id}>{s.description}</option>)
          }
        </select>
      </div>
      <div className="filter" data-fetching={!states.length}>
        <select onChange={ ({ target }) => selectState(target.value) }>
          <option disabled={states.length} >Estado</option>
          {/* {
            specialities.map(s => <option key={s._id} value={s._id}>{s.description}</option>)
          } */}
        </select>
      </div>
      <div className="filter">
        <select disabled>
          <option>Cidade</option>
        </select>
      </div>
      <FilterButton className="button" onClick={() => filterResults()}>Buscar</FilterButton>
    </FilterWrapper>
  )
}

export default Filter