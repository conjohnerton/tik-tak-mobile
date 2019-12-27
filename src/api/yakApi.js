import axios from 'axios'

export default axios.create({
	baseURL: 'http://tiktakapp.herokuapp.com/'
});