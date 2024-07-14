import { Pagination } from "antd";

import Loader from "@/components/Loader";
import MoviesGrid from "@/components/MoviesGrid";
import SearchInput from "@/components/SearchInput";

import useFavoriteMovies from "@/hooks/useFavoriteMovies";
import useMoviesList from "@/hooks/useMoviesList";
import useMoviesListParams from "@/hooks/useMoviesListParams";

import { PAGE_SIZE } from "@/consts";

import "./MoviesList.css";

const MoviesList = () => {
  const { params, updateParams } = useMoviesListParams();
  const { data, isLoading, isFetching } = useMoviesList(params);

  useFavoriteMovies(); // just prefetch it, no use for data here

  return (
    <div className="rqe__movies-list">
      <div className="rqe__movies-list-header">
        <h1>Movies</h1>
        {!isLoading && isFetching && (
          <Loader
            fontSize={20}
            text="Fetching..."
            className="rqe__movies-list-fetching-loader"
          />
        )}
      </div>
      <div className="rqe__movies-list-controls">
        <SearchInput
          initialValue={params.query}
          onChange={(query) => {
            updateParams({ query, page: 1 });
          }}
        />
        {!!data?.total_results && data.total_results > PAGE_SIZE && (
          <Pagination
            pageSize={PAGE_SIZE}
            showSizeChanger={false}
            current={params.page}
            total={data?.total_results}
            onChange={(page) => updateParams({ page })}
          />
        )}
      </div>
      {isLoading && <Loader text="Loading..." />}
      {!!data && <MoviesGrid rowData={data.results} />}
    </div>
  );
};

export default MoviesList;
