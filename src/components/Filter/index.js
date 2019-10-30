import React, { useState, useEffect, useContext } from 'react';
import { FilterWrapper, FilterButton } from './style';

import ApiService from '../../tools/ServicesConfig/ApiService';
import { AppContext } from '../AppContext/index';


const Filter = () => {

  const { appState, setState } = useContext(AppContext)

  const [specialities, loadSpecialities] = useState([])
  const [states, loadStates] = useState([])
  const [cities, loadCities] = useState([])

  const [selectedSpecialty, selectSpeciality] = useState("0")
  const [selectedState, selectState] = useState("0")
  const [selectedCity, selectCity] = useState("0")
  
  useEffect(() => {
    ApiService.ListSpecialities().then(loadSpecialities)
    ApiService.ListStates().then(loadStates)
  }, [])

  const clearResults = () => setState({ ...appState, nurseList: [] })

  const onSelectState = stateId => {
    selectState(stateId)
    
    if(stateId === '0') {
      return loadCities([])  
    }

    ApiService.ListCities(stateId).then(loadCities)
  }
  
  const onFilterResults = () => {
    clearResults()
    
    const query = `specialtyProffesion=${selectedSpecialty}&state=${selectedState}&city=${selectedCity}`

    ApiService.FindNurse(query)
      .then(res => setState({ ...appState, nurseList: [...res] }))
  }
  

  return(
    <FilterWrapper>

      <div className="filter" data-fetching={!specialities.length}>
        <select 
          onChange={ ({ target }) => selectSpeciality(target.value) }>
          <option disabled={specialities.length}>Especialidade</option>
          <option value="0">Todas as especialidades</option>
          {
            specialities.map(s => <option key={s._id} value={s._id}>{s.description}</option>)
          }
        </select>
      </div>

      <div className="filter" data-fetching={!states.length}>
        <select 
          disabled={!states.length} 
          onChange={ ({ target }) => onSelectState(target.value) }>
          <option disabled={states.length} >Estado</option>
          <option value="0">Todos os estados</option>
          {
            states.map(s => <option key={s.id} value={s.id}>{s.nome}</option>)
          }
        </select>
      </div>

      <div className="filter">
        <select 
          onChange={ ({ target }) => selectCity(target.value) } 
          data-fetching={selectedState && !cities.length}>
          <option disabled={cities.length}>Cidade</option>
          <option value="0">Todos as cidades</option>
          {
            cities.map(s => <option key={s.id} value={s.id}>{s.nome}</option>)
          }
        </select>
      </div>

      <FilterButton 
        className="button"
        disabled={!selectSpeciality}
        onClick={() => onFilterResults()}>
        Buscar
      </FilterButton>
    </FilterWrapper>
  )
}

export default Filter