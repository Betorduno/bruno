import axios from 'axios';
import $ from "jquery";
import moment from 'moment';
import {
    PLANTILLA_URL,
    TOKEN,
    FORM_URL,
    FORM_URL_BYPLANTILLA,
    USERS_URL,
    FICHAS_URL
} from './endpoints';
import { async } from 'q';


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
        url: FORM_URL_BYPLANTILLA + '/' + id,
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
export function validateFecha(fechaIni, fechaFin) {

    if (fechaFin.format("YYYY") >= fechaIni.format("YYYY")) {
        if (fechaFin.format("MM") >= fechaIni.format("MM")) {
            if (fechaFin.format("DD") >= fechaIni.format("DD")) {
                return true
            }
        }
    } else {
        return false
    }
}
export function formatDate(data) {
    let fecha = moment(data).format('YYYY-MM-DD');
    return fecha
}

export async function deleteFormulario(id) {
    return await axios({
        method: 'DELETE',
        url: FORM_URL + '/' + id,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + TOKEN
        }
    })
}
export function updateFormulario(data) {
    // console.log('ººººº>', data)
    return axios({
        method: 'PUT',
        url: FORM_URL + '/' + data.id,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + TOKEN
        },
        data
    })
}
export function getUsuarios() {
    return axios({
        url: USERS_URL,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': "Bearer " + TOKEN
        }
    })
}
//user crub
export function getUser() {
    return axios({
        url: USERS_URL,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': "Bearer " + TOKEN
        }
    })
}
export function getIDUser(id) {
    return axios({
        url: USERS_URL + '/' + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': "Bearer " + TOKEN
        }
    })
}
export async function createUser(data) {
    return await axios({
        method: 'POST',
        url: USERS_URL,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + TOKEN
        },
        data
    })
}

export async function deleteUser(id) {
    return await axios({
        method: 'DELETE',
        url: USERS_URL + '/' + id,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + TOKEN
        }
    })
}
export function updateUser(id, nombre) {
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
//fichas crub
export function getFichas() {
    return axios({
        url: FICHAS_URL,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': "Bearer " + TOKEN
        }
    })
}
export function getIDFichas(id) {
    return axios({
        url: FICHAS_URL + '/' + id,
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Authorization': "Bearer " + TOKEN
        }
    })
}
export async function createFichas(data) {
    return await axios({
        method: 'POST',
        url: FICHAS_URL,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + TOKEN
        },
        data
    })
}

export async function deleteFicha(id) {
    return await axios({
        method: 'DELETE',
        url: FICHAS_URL + '/' + id,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + TOKEN
        }
    })
}
export function updateFicha(data) {
    return axios({
        method: 'PUT',
        url: FICHAS_URL + '/' + data.id,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + TOKEN
        },
        data: {
            id: data.id,
            latitud: data.latitud,
            longitud: data.longitud,
            id_usuario: data.id_usuario,
            id_formulario: data.id_formulario,
            id_plantilla: data.id_plantilla
        }
    })
}