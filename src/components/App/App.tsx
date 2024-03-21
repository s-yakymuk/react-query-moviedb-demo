import { Navigate, Route, Routes } from "react-router";

import Header from "@/components/Header";
import Loader from "@/components/Loader";

import About from "@/pages/About";
import MoviesList from "@/pages/MoviesList";
import MovieDetails from "@/pages/MovieDetails";
import NotAuthenticated from "@/components/NotAuthenticated";

import useSessionId from "@/hooks/useSessionId";

import { ROUTES } from "@/consts";

import "./App.css";

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
        <Routes>
          <Route path={ROUTES.movies} element={<MoviesList />} />
          <Route path={ROUTES.movieDetails} element={<MovieDetails />} />
          <Route path={ROUTES.about} element={<About />} />
          <Route path="*" element={<Navigate to={ROUTES.movies} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
