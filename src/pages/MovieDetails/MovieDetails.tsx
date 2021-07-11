import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

import Loader from "components/Loader";
import FavoriteButton from "components/FavoriteButton";

import useMovieDetails from "hooks/useMovieDetails";

import { ROUTES } from "consts";

import "./MovieDetails.css";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  maximumFractionDigits: 0,
});

const MovieDetails = () => {
  const params = useParams<{ id: string }>();
  const movieId = Number(params.id);
  const { data, isLoading, isFetching } = useMovieDetails(movieId);

  return (
    <main className="rqe__movie-details">
      <Link to={ROUTES.movies}>
        <ArrowLeftOutlined /> Back to movies
      </Link>
      {isLoading && <Loader text="Loading..." />}
      {!!data && (
        <>
          <div className="rqe__movie-details-header">
            <FavoriteButton id={data.id} />
            <h1>{data.title}</h1>
            {!isLoading && isFetching && (
              <Loader
                fontSize={20}
                text="Fetching..."
                className="rqe__movie-details-fetching-loader"
              />
            )}
          </div>
          <div className="rqe__movie-details-content">
            <img
              width="300"
              alt={`${data.title} poster`}
              src={`https://image.tmdb.org/t/p/w300${data.poster_path}`}
            />
            <section>
              <dl>
                <dt>Rating</dt>
                <dd>
                  {data.vote_count ? (
                    <div>
                      ⭐ {data.vote_average}/10 ({data.vote_count})
                    </div>
                  ) : (
                    "Unknown"
                  )}
                </dd>
                <dt>Genres</dt>
                <dd>{data.genres.map((g) => g.name).join(", ")}</dd>
                <dt>Release Date</dt>
                <dd>{data.release_date}</dd>
                <dt>Status</dt>
                <dd>{data.status}</dd>
                <dt>Production Companies</dt>
                <dd>
                  {data.production_companies.map((g) => g.name).join(", ")}
                </dd>
                <dt>Production Countries</dt>
                <dd>
                  {data.production_countries.map((g) => g.name).join(", ")}
                </dd>
                <dt>Overview</dt>
                <dd>{data.overview}</dd>
                {!!data.budget && (
                  <>
                    <dt>Budget</dt>
                    <dd>{currencyFormatter.format(data.budget)}</dd>
                  </>
                )}
                {!!data.revenue && (
                  <>
                    <dt>Revenue</dt>
                    <dd>{currencyFormatter.format(data.revenue)}</dd>
                  </>
                )}
              </dl>
            </section>
          </div>
        </>
      )}
    </main>
  );
};

export default MovieDetails;
