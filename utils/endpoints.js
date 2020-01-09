// const BASE_URL = 'http://192.168.24.83:1337'
// const BASE_URL = 'http://ec2-107-21-75-69.compute-1.amazonaws.com:1337'
const BASE_URL = 'http://apicaracterizacion.azurewebsites.net/api'
const PLANTILLA_URL = BASE_URL + '/plantillas';
const FORM_URL = BASE_URL + '/formularios/byPlantilla';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImRhcm9tYW45QGdtYWlsLmNvbSIsIm1pVmFsb3IiOiJMbyBxdWUgeW8gcXVpZXJhIiwianRpIjoiZjQ5MDA2MmQtYmU1ZS00Yjk1LWFkMWUtMWRiNzA5NGYxYmMzIiwiZXhwIjoxODk0MjA0OTE5LCJpc3MiOiJ5b3VyZG9tYWluLmNvbSIsImF1ZCI6InlvdXJkb21haW4uY29tIn0.MGpLCX90Ar8SHm7KKyCwTMnMS0MIuHZE0oasTz9FPiw'

// const REGISTER_URL = `${BASE_URL}/auth/local/register`

export {
    PLANTILLA_URL,
    TOKEN,
    FORM_URL
}