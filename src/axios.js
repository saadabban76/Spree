import axios from 'axios';

const instance = axios.create({
    baseURL:'http://localhost:5001/spree-f4a4e/us-central1/api' // The Api (cload function) Url
});

export default instance