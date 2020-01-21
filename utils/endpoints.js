// const BASE_URL = 'http://192.168.24.83:1337'
// const BASE_URL = 'http://ec2-107-21-75-69.compute-1.amazonaws.com:1337'
const BASE_URL = 'http://caracterizacionprueba.azurewebsites.net/api'
const PLANTILLA_URL = BASE_URL + '/plantillas';
const FORM_URL = BASE_URL + '/formularios';
const FORM_URL_BYPLANTILLA = FORM_URL + '/byPlantilla';
const USERS_URL = BASE_URL + '/account';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRhcm9tYW45QGdtYWlsLmNvbSIsIm1pVmFsb3IiOiJMbyBxdWUgeW8gcXVpZXJhIiwianRpIjoiZDljMGE4NTAtZDlmZC00Yzk1LTg1ZDktM2M3NDYwMTBlNWExIiwiZXhwIjoxODk0NjQ3NzMzLCJpc3MiOiJ5b3VyZG9tYWluLmNvbSIsImF1ZCI6InlvdXJkb21haW4uY29tIn0.RsA3qNylwdP0SPgd8Q-98IC5pd2fmtXcbdy5Bmz9Gww'

// const REGISTER_URL = `${BASE_URL}/auth/local/register`

export {
    PLANTILLA_URL,
    TOKEN,
    FORM_URL,
    FORM_URL_BYPLANTILLA,
    USERS_URL
}