import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-75c3c.firebaseio.com/'
});

export default instance;