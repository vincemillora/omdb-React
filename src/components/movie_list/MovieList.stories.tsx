import type { Meta, StoryObj } from '@storybook/react';

import { MovieList } from './MovieList';

const meta: Meta<typeof MovieList> = {
  title: 'MovieUI/MovieList',
  component: MovieList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof MovieList>;

export const WithMovies: Story = {
  args: {
    isLoading: false,
    totalCount: 10,
    searchTitle: "marvel",
    movies: [
      {
        Title: "Captain Marvel",
        Year: "2019",
        imdbID: "tt4154664",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
      },
      {
        Title: "Marvel One-Shot: Agent Carter",
        Year: "2013",
        imdbID: "tt3067038",
        Poster: "https://m.media-amazon.com/images/M/MV5BZDIwZTM4M2QtMWFhYy00N2VmLWFlMjItMzI3NjBjYTc0OTMxXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
      },
      {
        Title: "Marvel One-Shot: All Hail the King",
        Year: "2014",
        imdbID: "tt3438640",
        Poster: "https://m.media-amazon.com/images/M/MV5BZGFkMTZkMDQtNzM4Yy00YWEwLTkzOWEtZTMyNDRlNmJhYWJhXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
      },
      {
        Title: "Marvel One-Shot: Item 47",
        Year: "2012",
        imdbID: "tt2247732",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjNlMzAxNmQtOGEwZi00NTEyLWI0NWYtMTlhNmE2YTA3ZDVhXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
      },
      {
        Title: "Marvel One-Shot: A Funny Thing Happened on the Way to Thor's Hammer",
        Year: "2011",
        imdbID: "tt2011109",
        Poster: "https://m.media-amazon.com/images/M/MV5BYmVlYTg3N2QtMWM2OS00YWQyLWI2M2MtMDc0ZjBkZjk1MTY3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
      },
      {
        Title: "Marvel One-Shot: The Consultant",
        Year: "2011",
        imdbID: "tt2011118",
        Poster: "https://m.media-amazon.com/images/M/MV5BNGE4YjU5MDAtYzYzMC00M2RlLTk0NDgtNDU1MjgyMGI0MjI3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
      },
      {
        Title: "Marvel Studios: Assembling a Universe",
        Year: "2014",
        imdbID: "tt3591568",
        Poster: "https://m.media-amazon.com/images/M/MV5BZjNiN2NhYzQtYmI1NC00NGRmLWE2MWYtNjAxNjMzZmYxNDJhXkEyXkFqcGdeQXVyODQ4MjU1MDk@._V1_SX300.jpg"
      },
      {
        Title: "Pokémon the Movie: Volcanion and the Mechanical Marvel",
        Year: "2016",
        imdbID: "tt5889204",
        Poster: "https://m.media-amazon.com/images/M/MV5BZTUwZDEzZGEtYTJlYi00OTRkLWJmMzItODU0ZWViMTUyYjUzXkEyXkFqcGdeQXVyNzEyMDQ1MDA@._V1_SX300.jpg"
      },
      {
        Title: "Adventures of Captain Marvel",
        Year: "1941",
        imdbID: "tt0033317",
        Poster: "https://m.media-amazon.com/images/M/MV5BNjg0NTk3NjUyNF5BMl5BanBnXkFtZTgwNDQ5MjM1MjE@._V1_SX300.jpg"
      },
      {
        Title: "Marvel Rising: Secret Warriors",
        Year: "2018",
        imdbID: "tt7728344",
        Poster: "https://m.media-amazon.com/images/M/MV5BZGU5YTVlZTktNzgzMS00MGVlLTgyMGMtNWYwNTkwNGY1MzllXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
      }
    ]
  },
};

export const EmptyList: Story = {
  args: {
    isLoading: false,
    totalCount: 0,
    searchTitle: "marvel",
    movies: []
  },
};

export const InitialEmptyList: Story = {
  args: {
    isLoading: false,
    totalCount: 0,
    searchTitle: null,
    movies: []
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    totalCount: 0,
    searchTitle: "marvel",
    movies: []
  },
};