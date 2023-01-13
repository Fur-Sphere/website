import axios from "axios"

const APIInstance = axios.create({
	baseURL: 'https://fursphere-api.onrender.com/'
})

const baseAPI = {
	waitlist: {
		post: (payload) => APIInstance.post('/waitlist', payload)
	}
}

export default baseAPI