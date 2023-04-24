import type { Meta, StoryObj } from '@storybook/react';

import { MovieDetailsCard } from './MovieDetails';

const meta: Meta<typeof MovieDetailsCard> = {
  title: 'MovieUI/MovieDetailsCard',
  component: MovieDetailsCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MovieDetailsCard>;

export const SampleMovie: Story = {
  args: {
    movie: {
      Title: "Captain Marvel",
      Year: "2019",
      Rated: "PG-13",
      Released: "08 Mar 2019",
      Runtime: "123 min",
      Genre: "Action, Adventure, Sci-Fi",
      Director: "Anna Boden, Ryan Fleck",
      Writer: "Anna Boden, Ryan Fleck, Geneva Robertson-Dworet",
      Actors: "Brie Larson, Samuel L. Jackson, Ben Mendelsohn",
      Plot: "Carol Danvers becomes one of the universe's most powerful heroes when Earth is caught in the middle of a galactic war between two alien races.",
      Awards: "9 wins & 56 nominations",
      Poster: "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg",
      Ratings: [
        {
          Source: "Internet Movie Database",
          Value: "6.8/10"
        },
        {
          Source: "Rotten Tomatoes",
          Value: "79%"
        },
        {
          Source: "Metacritic",
          Value: "64/100"
        }
      ],
      Metascore: "64",
      imdbRating: "6.8",
      imdbVotes: "573,246",
      imdbID: "tt4154664"
    }
  },
};