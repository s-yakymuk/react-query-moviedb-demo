import { GenreModel } from "./genre";
import { MovieModel } from "./movie";

export interface ProductionCompanyModel {
  name: string;
  id: number;
  logo_path?: string;
  origin_country: string;
}

export interface ProductionCountryModel {
  name: string;
  iso_3166_1: string;
}

export interface MovieDetailsModel extends Omit<MovieModel, "genre_ids"> {
  genres: GenreModel[];
  poster_path: string;
  production_companies: ProductionCompanyModel[];
  production_countries: ProductionCountryModel[];
  status: string;
  budget: number;
  revenue: number;
}
