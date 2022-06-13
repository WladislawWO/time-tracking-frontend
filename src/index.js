import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import TimeDetails from './pages/TimeDetails';
import './index.css';
import ModalProvider from './contexts/modals';

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
        <Switch>
          <Route exact path="/time/:id">
            <TimeDetails />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ModalProvider>
    </QueryClientProvider>
  </BrowserRouter>,
);

reportWebVitals();
