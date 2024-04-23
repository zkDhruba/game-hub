import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7c3fbfa0f3c2424baf8f9cb4eee72176'
    }
})