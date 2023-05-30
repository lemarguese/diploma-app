import axios, {CreateAxiosDefaults} from 'axios'
import {enqueueSnackbar} from "notistack";

const instance = axios.create({
    baseURL: 'http://localhost:4000',
} as CreateAxiosDefaults)

instance.interceptors.response.use((res) => {
    enqueueSnackbar(res.data.message)
    return res;
}, (err) => {
    enqueueSnackbar(err.response.data.message)
})

export default instance;
