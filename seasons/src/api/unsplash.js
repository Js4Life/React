import axios from 'axios';

// creates axios client custom
const unsplash = axios.create({
    baseURL:'https://api.unsplash.com',
    headers : {
        Authorization : 'Client-ID ZgwBGFoRJchMg9dzI2icpCuubGI33Q4tLRaB_tpY_DQ'
    }
});

export default unsplash;