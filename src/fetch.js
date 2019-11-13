import axios from 'axios';
export default (url,callback) => axios.get(url).then( res => callback(res.data) );
