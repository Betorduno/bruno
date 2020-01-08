import axios from 'axios';
import $ from "jquery";

import {
    PLANTILLA_URL,
    TOKEN_PLANTILLA,
} from './endpoints';


export function getPlantillas() {
    return axios({
        url: PLANTILLA_URL,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': "Bearer " + TOKEN_PLANTILLA
        }
    })
}
export function getIDPlantillas(id) {
    return axios({
        url: PLANTILLA_URL + '/' + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': "Bearer " + TOKEN_PLANTILLA
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
            'Authorization': 'Bearer ' + TOKEN_PLANTILLA
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
            'Authorization': 'Bearer ' + TOKEN_PLANTILLA
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
            'Authorization': 'Bearer ' + TOKEN_PLANTILLA
        },
        data: {
            id,
            nombre
        }
    })
}