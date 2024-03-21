import { ColDef } from "ag-grid-community";

import {
  FavoriteRenderer,
  GenresRenderer,
  RatingRenderer,
  TitleRenderer,
} from "./renderers";

import { MovieModel } from "@/models";

export const defaultColDef: ColDef = {
  flex: 1,
  sortable: false,
  resizable: false,
  floatingFilter: false,
};

export const columnDefs: ColDef<MovieModel>[] = [
  {
    field: "id",
    headerName: "",
    width: 68,
    flex: 0,
    cellRenderer: FavoriteRenderer,
  },
  {
    field: "title",
    headerName: "Title",
    cellRenderer: TitleRenderer,
  },
  {
    field: "release_date",
    headerName: "Release Date",
  },
  {
    field: "genre_ids",
    headerName: "Genres",
    cellRenderer: GenresRenderer,
  },
  {
    field: "popularity",
    headerName: "Popularity",
  },
  {
    field: "vote_average",
    headerName: "Rating",
    cellRenderer: RatingRenderer,
  },
];
