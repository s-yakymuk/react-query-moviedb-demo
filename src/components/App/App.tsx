import React from "react";
import { Redirect, Route, Switch } from "react-router";

import Header from "components/Header";
import Loader from "components/Loader";

import About from "pages/About";
import MoviesList from "pages/MoviesList";
import MovieDetails from "pages/MovieDetails";

import useSessionId from "hooks/useSessionId";

import { ROUTES } from "consts";

import "./App.css";
import NotAuthenticated from "components/NotAuthenticated";

const App = () => {
  const { isLoading, isError, error, data } = useSessionId();
  const isAuthenticated = !!data && !isError;

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <NotAuthenticated error={error} />;
  }

  return (
    <div className="rqe__app">
      <Header />
      <main>
        <Switch>
          <Route path={ROUTES.movies} exact>
            <MoviesList />
          </Route>
          <Route path={ROUTES.movieDetails}>
            <MovieDetails />
          </Route>
          <Route path={ROUTES.about}>
            <About />
          </Route>
          <Redirect to={ROUTES.movies} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
