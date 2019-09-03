import { API } from './Config';

const ApiService = {
    //getall
    ListNurse: () => {
        return fetch(`${API.url}/nurse`)
            .then(res => res.json());
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
            .then(res => res.json());
    }
}

export default ApiService;