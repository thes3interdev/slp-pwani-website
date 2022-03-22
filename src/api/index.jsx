import axios from 'axios';

export default axios.create({
	baseURL:
		process.env.NODE_ENV === 'production'
			? 'https://baas.s3interdev.com/api'
			: 'http://localhost:1337/api',
});
