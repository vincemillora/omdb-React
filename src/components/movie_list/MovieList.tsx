import { MovieCard } from '../movie/Movie';
import { AiOutlineFrown, AiOutlineSearch } from "react-icons/ai";
import { Card, Skeleton } from 'antd';

import './MovieList.css';

interface MovieListProps {
  isLoading: boolean;
  movies: Array<Movie>;
  totalCount: number;
  searchTitle: string | null;
}

export const MovieList = ({ movies, isLoading, totalCount, searchTitle }: MovieListProps) => {
  let movieCardList;
  let componentDisplay;

  if (isLoading) {
    movieCardList = [...Array(10)].map((_, index) =>
      <div className='movie-item' key={index}>
        <Card
          style={{ height: '100%' }}
          size='small'
          loading={true}
        >
          <Skeleton paragraph active />
        </Card>
      </div>
    )
    componentDisplay = ( <div className='movie-grid'>{movieCardList}</div> )
  } else if (!isLoading && totalCount !== 0) {
    movieCardList = movies.map(( item )=>{
      return (
        <div className='movie-item' key={item.imdbID} >
          <MovieCard movie={item} />
        </div>
      )
    })
    componentDisplay = ( <div className='movie-grid'>{movieCardList}</div> )
  } else if (searchTitle === null) {
    componentDisplay = (
      <div className='no-movies'>
        <div><AiOutlineSearch size={45}/></div>
        <div>Search for a movie</div>
      </div>
    )
  } else {
    componentDisplay = (
      <div className='no-movies'>
        <div><AiOutlineFrown size={45}/></div>
        <div>No movies found</div>
      </div>
    )
  }

  return (
    <div className='movie-list-container'>
      {componentDisplay}
    </div>
  );
};