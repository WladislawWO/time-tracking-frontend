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

export const apiResponseInterceptor = (response) => {
  if (response.response.status === 401) {
    if (window.location.pathname !== '/login') {
      window.location = '/login';
    }
  }
  if (response.code === 'ERR_NETWORK') {
    if (window.location.pathname !== '/login') {
      window.location = '/login';
    }
  }
};
