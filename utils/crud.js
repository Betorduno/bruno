import axios from 'axios';
import $ from "jquery";


import {
    PLANTILLA_URL,
    TOKEN,
    FORM_URL,
} from './endpoints';


export function getPlantillas() {
    return axios({
        url: PLANTILLA_URL,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': "Bearer " + TOKEN
        }
    })
}
export function getIDPlantillas(id) {
    return axios({
        url: PLANTILLA_URL + '/' + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': "Bearer " + TOKEN
        }
    })
}
export async function createPlantilla(data) {
    return await axios({
        method: 'POST',
        url: PLANTILLA_URL,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + TOKEN
        },
        data
    })
}

export async function deletePlantilla(id) {
    return await axios({
        method: 'DELETE',
        url: PLANTILLA_URL + '/' + id,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + TOKEN
        }
    })
}
export function updatePlantilla(id, nombre) {
    return axios({
        method: 'PUT',
        url: PLANTILLA_URL + '/' + id,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + TOKEN
        },
        data: {
            id,
            nombre
        }
    })
}
export function getFormulario(id) {
    return axios({
        url: FORM_URL + '/' + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': "Bearer " + TOKEN
        }
    })
}
export async function createFormulario(data) {
    return await axios({
        method: 'POST',
        url: FORM_URL,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + TOKEN
        },
        data
    })
}