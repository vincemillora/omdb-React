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
    movies: [
      {
        Title: 'Movie 1',
        Year: '1991',
        Poster: 'https://picsum.photos/200/300',
        imdbID: "1",
      },
      {
        Title: 'Movie 2',
        Year: '1992',
        Poster: 'https://picsum.photos/200/300',
        imdbID: "2",
      },
      {
        Title: 'Movie Movie Movie Movie Movie Movie 3',
        Year: '1993',
        Poster: 'https://picsum.photos/200/300',
        imdbID: "3",
      },
      {
        Title: 'Movie 4',
        Year: '1994',
        Poster: 'https://picsum.photos/200/300',
        imdbID: "4",
      },
      {
        Title: 'Movie 5',
        Year: '1995',
        Poster: 'https://picsum.photos/200/300',
        imdbID: "5",
      },
      {
        Title: 'Movie 6',
        Year: '1996',
        Poster: 'https://picsum.photos/200/300',
        imdbID: "6",
      },
      {
        Title: 'Movie 7',
        Year: '1997',
        Poster: 'https://picsum.photos/200/300',
        imdbID: "7",
      },
      {
        Title: 'Movie 8',
        Year: '1998',
        Poster: 'https://picsum.photos/200/300',
        imdbID: "8",
      },
      {
        Title: 'Movie 9',
        Year: '1999',
        Poster: 'https://picsum.photos/200/300',
        imdbID: "9",
      },
    ]
  },
};

export const EmptyList: Story = {
  args: {
    isLoading: false,
    movies: []
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
    movies: []
  },
};