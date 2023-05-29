import axios, {CreateAxiosDefaults} from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:4000',
} as CreateAxiosDefaults)


// TODO write an interceptor with a toast
export default instance;
