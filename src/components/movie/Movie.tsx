import { AiOutlineCalendar, AiFillInfoCircle } from "react-icons/ai";
import { Card, Image, Button } from 'antd';
import { useNavigate } from "react-router-dom";

import './Movie.css';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const navigate = useNavigate();

  const onMovieClick = () => {
    navigate(`/movies/${movie.imdbID}`);
  }

  return (
    <Card
      key={movie.imdbID}
      className="movie-card-container"
      size='small'
      hoverable
      cover={
        <Image 
          alt={`${movie.Title}'s poster`}
          className='clickable-component'
          src={movie.Poster}
          preview={false}
          onClick={onMovieClick}
        />
      }
    >
      <div className='date-logo'>
        <AiOutlineCalendar />
        <span className="year-info">{movie.Year}</span>
      </div>
      <h2 
        className='title clickable-component'
        onClick={onMovieClick}
      >
        {movie.Title}
      </h2>
      <Button
        className="info-button"
        type="dashed" 
        block
        onClick={onMovieClick}
      >
        <div className="info-logo">
          <AiFillInfoCircle /> 
          <span>See info</span>
        </div>
      </Button>
    </Card>
  )
};