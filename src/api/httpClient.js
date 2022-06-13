import axios from 'axios';

const options = {
  baseURL: process.env.REACT_APP_BASE_URL,
  responseType: 'json',
  headers: {
    common: {
      Accept: 'application/json',
    },
  },
};

const httpClient = axios.create(options);
// TODO: later
// httpClient.interceptors.request.use(apiRequestInterceptor);
// httpClient.interceptors.response.use(null, apiResponseInterceptor);

export default httpClient;
