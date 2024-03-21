import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { MovieModel } from "@/models";

import { defaultColDef, columnDefs } from "./modules/config";

import "./MoviesGrid.css";

interface Props {
  rowData: MovieModel[];
}

const MoviesGrid = (props: Props) => {
  const { rowData } = props;

  return (
    <div className="ag-theme-alpine rqe__movies-grid">
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        overlayNoRowsTemplate="Nothing found"
      />
    </div>
  );
};

export default MoviesGrid;
