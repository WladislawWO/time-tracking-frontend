import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ToastContainer } from 'react-toastify';
import reportWebVitals from './reportWebVitals';
import ModalProvider from './contexts/modals';
import Routes from './routes';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries:
    {
      refetchOnWindowFocus: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <Routes />
        <ToastContainer />
      </ModalProvider>
    </QueryClientProvider>
  </BrowserRouter>,
);

reportWebVitals();
