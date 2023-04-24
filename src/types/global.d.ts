// Movie ratings interface
interface Ratings {
  Source: string;
  Value: string;
}
// Movies interface
interface Movie {
  Title: string;
  Rated?: string;
  Year: string;
  Released?: string;
  Runtime?: string;
  Genre?: string;
  Director?: string;
  Writer?: string;
  Actors?: string;
  Plot?: string;
  Awards?: string;
  Poster: string;
  Ratings?: Array<Ratings>;
  Metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID: string;
}