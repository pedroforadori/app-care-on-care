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
        return fetch(`${API.url}/nurse/states`)
            .then(res => res.json())
            .then(res => res.nurse)
    },
    ListCities: () => {
        return fetch(`${API.url}/nurse/cities`)
            .then(res => res.json())
            .then(res => res.nurse)
    },
    Find: query => {
        return fetch(`${API.url}/search?${query}`)
            .then(res => res.json())
            .then(res => res.nurse)
    }
}

export default ApiService;