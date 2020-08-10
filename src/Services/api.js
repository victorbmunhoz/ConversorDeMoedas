import axios from 'axios';

const api = axios.create({
    baseURL: 'https://free.currencyconverterapi.com/api/v5'
})

export default api;


// baseUrl = https://free.currencyconverterapi.com/api/v5
// > convert?q=USD_BRL&compact=ultra&apiKey=7b3d67698b2b1506b423