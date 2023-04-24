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
      Title: 'The Shawshank Redemption',
      Year: '1994',
      Poster: 'https://picsum.photos/200/300',
      imdbID: "1",
    }
  },
};