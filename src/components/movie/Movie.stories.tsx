import type { Meta, StoryObj } from '@storybook/react';

import { MovieCard } from './Movie';

const meta: Meta<typeof MovieCard> = {
  title: 'MovieUI/MovieCard',
  component: MovieCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MovieCard>;

export const SampleMovie: Story = {
  args: {
    movie: {
      Title: 'Captain Marvel',
      Year: '2019',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg',
      imdbID: "tt4154664",
    }
  },
};