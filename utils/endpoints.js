// const BASE_URL = 'http://192.168.24.83:1337'
// const BASE_URL = 'http://ec2-107-21-75-69.compute-1.amazonaws.com:1337'
const BASE_URL = 'https://caracterizacionprueba.azurewebsites.net/api'
const PLANTILLA_URL = BASE_URL + '/plantillas';
const FORM_URL = BASE_URL + '/formularios';
const FORM_URL_BYPLANTILLA = FORM_URL + '/byPlantilla';
const USERS_URL = BASE_URL + '/account';
const FICHAS_URL = BASE_URL + '/fichas';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRhcm9tYW45QGdtYWlsLmNvbSIsIm1pVmFsb3IiOiJMbyBxdWUgeW8gcXVpZXJhIiwianRpIjoiYmFiMGY4NzEtYWFlYi00ZTBjLTg2N2YtZmRlZjNkNjFiYWE5IiwiZXhwIjoxODk1MzI3MjAyLCJpc3MiOiJ5b3VyZG9tYWluLmNvbSIsImF1ZCI6InlvdXJkb21haW4uY29tIn0.PgDQX6Z1rlhL9lUHvFnVRqEJmLZwQaLvUSUhEGFclec'

// const REGISTER_URL = `${BASE_URL}/auth/local/register`

export {
    PLANTILLA_URL,
    TOKEN,
    FORM_URL,
    FORM_URL_BYPLANTILLA,
    USERS_URL,
    BASE_URL,
    FICHAS_URL
}