import { AiOutlineCalendar, AiOutlineClockCircle, AiFillHeart } from "react-icons/ai";
import { Card, Image, Button } from 'antd';
import { ConfigProvider } from 'antd';
import './MovieDetails.css';

import { useAppSelector, useAppDispatch } from '../../store/hooks';

interface MovieDetailsCardProps {
  movie: Movie;
}

export const MovieDetailsCard = ({ movie }: MovieDetailsCardProps) => {
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector(state => state.user.favorites.some(item => item.imdbID === movie.imdbID));

  const onClickFavorite = () => {
    const favoriteObject = {
      Title: movie.Title,
      imdbID: movie.imdbID,
      Poster: movie.Poster,
      Year: movie.Year,
    };

    if (isFavorite) {
      dispatch({ 
        type: 'user/removeFromFavorites',
        payload: {
          movie: favoriteObject
        }
      });
    } else {
      dispatch({ 
        type: 'user/addToFavorites',
        payload: {
          movie: favoriteObject
        }
      });
    }
  }

  const ratings = movie.Ratings ?movie.Ratings.map((rating, index) => (
    <div key={index} className="details-item">
      <span className="details-item-title">
        {rating.Source}: 
      </span>
      <span>{rating.Value}</span>
    </div>
    )
  ) : "";

  return (
    <Card key={movie.imdbID}>
      <div 
        className="movie-background"
        style={{ 
          backgroundImage: `
            linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1)),
            url(${movie.Poster})
          `
        }}
      ></div>
      <div className='movie-details'>
        <div className='movie-poster-container'>
          <Image 
            alt={`${movie.Title}'s poster`}
            src={movie.Poster}
            width={'100%'}
          />
        </div>
        <div className='movie-info-container'>
          <h1 className='movie-title font-weight-bold'>{movie.Title}</h1>

          {/* Movie sub-details */}
          <div className="sub-details-container">
            {movie.Rated !== 'N/A' ? (
              <span className='sub-details-item font-weight-bold'>
                {movie.Rated}
              </span>
            ): ""}
            {movie.imdbRating !== 'N/A' ? (
              <span className='sub-details-item imdb-color font-weight-bold'>
                IMDB: {movie.imdbRating}
              </span>
            ): ""}
            {movie.Year !== 'N/A' ? (
              <span className='sub-details-item row-align-items'>
                <AiOutlineCalendar />{movie.Year}
              </span>
            ): ""}
            {movie.Runtime !== 'N/A' ? (
               <span className='sub-details-item row-align-items'>
                <AiOutlineClockCircle />{movie.Runtime}
              </span>
            ): ""}
          </div>

          <ConfigProvider
            theme={{
              token: {
                colorText: isFavorite ? '#fff' : '#d03050',
                colorPrimary: isFavorite ? '#fff' : '#d03050',
                colorBgContainer: isFavorite ? '#d03050' : '#000',
                borderRadius: 100,
              },
            }}
          >
            <Button 
              style={{marginTop: '1em'}}
              onClick={onClickFavorite}
            >
              <div className="favorite-button">
                <AiFillHeart />
                <span>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</span>
              </div>
            </Button>
          </ConfigProvider>
          
          {/* Movie summary/plot */}
          <div className="details-item-container">
            <p className="details-item remove-p-margin">
              <span className='font-weight-bold'>Synopsis</span> 
              <br />
              {movie.Plot}
            </p>
          </div>
          
          {/* Movie details */}
          <div className="details-item-container">
            <div className="details-item">
              <span className="font-weight-bold details-item-title">
                Release Date: 
              </span>
              <span>{movie.Released}</span>
            </div>
            <div className="details-item">
              <span className="font-weight-bold details-item-title">
                Duration: 
              </span>
              <span>{movie.Runtime}</span>
            </div>
            <div className="details-item">
              <span className="font-weight-bold details-item-title">
                Genre: 
              </span>
              <span>{movie.Genre}</span>
            </div>
            <div className="details-item">
              <span className="font-weight-bold details-item-title">
                Director: 
              </span>
              <span>{movie.Director}</span>
            </div>
            <div className="details-item">
              <span className="font-weight-bold details-item-title">
                Writer: 
              </span>
              <span>{movie.Writer}</span>
            </div>
            <div className="details-item">
              <span className="font-weight-bold details-item-title">
                Casts: 
              </span>
              <span>{movie.Actors}</span>
            </div>
          </div>

          {/* Movie reviews */}
          <div className="details-item-container">
            <div 
              style={{flex: '0 0 100%'}}
              className='font-weight-bold details-item'
            >
              Reviews {movie.Awards !== 'N/A' ? `(${movie.Awards})` : ''}
            </div>
            <div className="details-item">
              <span className="details-item-title">
                Metascore: 
              </span>
              <span>{movie.Metascore}</span>
            </div>
            <div className="details-item">
              <span className="details-item-title">
                IMDB: 
              </span>
              <span>{movie.imdbRating} {movie.imdbVotes !== 'N/A' ? `(${movie.imdbVotes} votes)` : ''}</span>
            </div>
            {ratings}
          </div>
        </div>
      </div>
    </Card>
  );
};