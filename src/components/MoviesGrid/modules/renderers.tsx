import React from "react";
import { Link } from "react-router-dom";
import { ICellRendererParams } from "@ag-grid-community/core";

import FavoriteButton from "components/FavoriteButton";

import useMovieGenres from "hooks/useMovieGenres";

import { MovieModel } from "models";

import { ROUTES } from "consts";

interface Props extends ICellRendererParams {
  data: MovieModel;
}

export const TitleRenderer = ({ data }: Props) => {
  return (
    <div className="rqe__movie-title">
      <img
        alt=""
        width="45"
        height="25"
        src={`https://image.tmdb.org/t/p/w45${data.backdrop_path}`}
      />
      <Link to={ROUTES.movieDetails.replace(":id", data.id.toString())}>
        {data.title}
      </Link>
    </div>
  );
};

export const RatingRenderer = ({ data }: Props) => {
  return data.vote_count ? (
    <div>
      ⭐ {data.vote_average}/10 ({data.vote_count})
    </div>
  ) : (
    "Unknown"
  );
};

export const GenresRenderer = ({ data }: Props) => {
  const { data: genresData } = useMovieGenres();

  return genresData
    ? data.genre_ids
        .map((id) => genresData.itemsById[id]?.name)
        .filter(Boolean)
        .join(", ")
    : "";
};

export const FavoriteRenderer = ({ data }: Props) => {
  return <FavoriteButton id={data.id} />;
};

const renderers = {
  titleRenderer: TitleRenderer,
  ratingRenderer: RatingRenderer,
  genresRenderer: GenresRenderer,
  favoriteRenderer: FavoriteRenderer,
};

export default renderers;
