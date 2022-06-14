import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loader from '../components/Loader';
import MainLayout from '../layouts/MainLayout';

const Home = lazy(() => import('../pages/Home'));
const Routine = lazy(() => import('../pages/Routine'));
const TimeDetails = lazy(() => import('../pages/TimeDetails'));
const Todo = lazy(() => import('../pages/Todo'));

export default function Routes() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path="/time/:id">
          <TimeDetails />
        </Route>

        <MainLayout>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/routine">
            <Routine />
          </Route>

          <Route exact path="/todo">
            <Todo />
          </Route>
        </MainLayout>
      </Switch>
    </Suspense>
  );
}
