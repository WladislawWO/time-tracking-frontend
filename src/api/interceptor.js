import { toast } from 'react-toastify';

export const apiRequestInterceptor = (config) => {
  const { url } = config;
  const token = localStorage.getItem('token');

  if (!/^(http|https):/i.test(url)) {
    const headers = {};

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    config.headers = {
      ...config.headers,
      ...headers,
    };

    config.url = `${url.replace(/^\/+/, '')}`;

    return config;
  }

  return config;
};

export const apiResponseInterceptor = () => {
  toast.error('Network error');
};
