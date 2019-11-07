import { API } from './Config';

const ApiService = {
    //getall,
    ListNurse: () => {
        return fetch(`${API.url}/nurse`)
            .then(res => res.json())
            .then(res => res.nurse)
    },
    CreateNurse: nurse => {
        return fetch(`${API.url}/nurse`,
            {
                method: 'POST',
                headers: {'content-type': 'application/json'},
                body: nurse
            })
            .then(res => res.json());
    },
    //getbyid
    ListNurseById: id => {
        return fetch(`${API.url}/nurse/${id}`)
            .then(res => res.json())
    },
    ListSpecialities: () => {
        return fetch(`${API.url}/nurse/specialty`)
            .then(res => res.json())
            .then(res => res.nurse)
    },
    ListStates: () => {
        // return fetch(`${API.url}/nurse/states`)
        return fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
            .then(res => res.json())
    },
    ListCities: stateId => {
        // return fetch(`${API.url}/nurse/cities/${stateId}`)
        return fetch(`http://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`)
            .then(res => res.json())
    },
    FindNurse: query => {
        // return fetch(`${API.url}/search?${query}`)
        debugger
        return fetch(`${API.url}/nurse`)
            .then(res => res.json())
            .then(res => res.nurse)
    }
}

export default ApiService;