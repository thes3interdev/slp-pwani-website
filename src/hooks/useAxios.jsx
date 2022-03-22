import { useState, useEffect } from 'react';
import api from '../api/index';

const useAxios = ({ url }) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const abortController = new AbortController();

		const fetchData = async () => {
			try {
				const response = await api.get(url, { signal: abortController.signal });
				setData(response.data);
				setIsLoading(false);
				setError(null);
			} catch (err) {
				if (err.name === 'AbortError') {
					console.log('A fetch abort has occured...');
				} else {
					setIsLoading(false);
					setError(err.message);
				}
			}
		};

		fetchData();

		return () => abortController.abort();
	}, [url]);

	return { data, isLoading, error };
};

export default useAxios;
