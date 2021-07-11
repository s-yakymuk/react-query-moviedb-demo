import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

import { MovieModel } from "models";

import { defaultColDef } from "./modules/config";
import renderers from "./modules/renderers";

import "./MoviesGrid.css";

interface Props {
  rowData: MovieModel[];
}

const MoviesGrid = (props: Props) => {
  const { rowData } = props;

  return (
    <div className="ag-theme-alpine rqe__movies-grid">
      <AgGridReact
        frameworkComponents={renderers}
        rowData={rowData}
        defaultColDef={defaultColDef}
        suppressCellSelection
        overlayNoRowsTemplate="Nothing found"
      >
        <AgGridColumn
          field="id"
          headerName=""
          width={66}
          flex={0}
          cellRenderer="favoriteRenderer"
        />
        <AgGridColumn
          field="title"
          headerName="Title"
          cellRenderer="titleRenderer"
        />
        <AgGridColumn field="release_date" headerName="Release Date" />
        <AgGridColumn
          field="genre_ids"
          headerName="Genres"
          cellRenderer="genresRenderer"
        />
        <AgGridColumn field="popularity" headerName="Popularity" />
        <AgGridColumn
          field="vote_average"
          headerName="Rating"
          cellRenderer="ratingRenderer"
        />
      </AgGridReact>
    </div>
  );
};

export default MoviesGrid;
