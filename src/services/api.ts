import axios, { InternalAxiosRequestConfig } from "axios";

import ApiConfig from "./api.config";

const createApiInstance = () => {
	interface StatusMessages {
		[key: number]: string;
	}

	const axiosInstance = axios.create({
		baseURL: ApiConfig.BASE_URL,
        headers: {
            "accept": "application/json"
        }
	});
	
		axiosInstance.interceptors.request.use(
			async (config: InternalAxiosRequestConfig) => {
				return config;
			},
		);

		axiosInstance.interceptors.response.use(
			(response: any) => {
				return response;
			},
			async (error: StatusMessages) => {
				return Promise.reject(error);
			},
		);
	
	return axiosInstance;
};


const api = () => createApiInstance();

export { api }