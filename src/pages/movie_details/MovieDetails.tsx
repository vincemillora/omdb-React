import { useEffect, useState } from 'react';
import { AiOutlineHome, AiOutlineFrown, AiOutlineExclamationCircle } from "react-icons/ai";
import { Button, Card, Skeleton } from 'antd';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import './MovieDetails.css';
import { MovieDetailsCard } from '../../components/movie_details/MovieDetails';



export const MovieDetails = () => {
  let { movieId } = useParams();
  const navigate = useNavigate();

  // page states
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const onClickBack = () => {
    navigate('/');
  };

  useEffect(() => {
    axios.get(`http://www.omdbapi.com/?apikey=95dafefd&type=movie&i=${movieId}`)
      .then((res) => {
        if(res.status === 200) {
          if (res.data.Title !== undefined) {
            setMovie(res.data)
          }
        } else {
          setIsError(true);
        }
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }, []);

  let movieDetailsComponent;
  if (isLoading) {
    movieDetailsComponent = (
      <Card
        style={{ height: '100%' }}
        loading={true}
      >
        <Skeleton paragraph active />
      </Card>
    )
  } else if (!isLoading && movie) {
    movieDetailsComponent = ( <MovieDetailsCard movie={movie} /> )
  } else if (isError) {
    movieDetailsComponent = (
      <div className='no-movies'>
        <div><AiOutlineExclamationCircle size={45}/></div>
        <div>An error occured.</div>
        <div className='no-movie-caption'>
          Please refresh the browser or go back <a onClick={onClickBack}>home</a> if the error persists.
        </div>
      </div>
    )
  } else {
    movieDetailsComponent = (
      <div className='no-movies'>
        <div><AiOutlineFrown size={45}/></div>
        <div>No movie found</div>
      </div>
    )
  }

  return (
    <div>
      <div className="movie-details-home-button">
        <Button
          type="text"
          size="large"
          onClick={onClickBack}
        >
          <div className="button-text">
            <AiOutlineHome size={20} />
            <span>To Home</span>
          </div>
        </Button>
      </div>
      <div className='movie-details-container'>
        {movieDetailsComponent}
      </div>
    </div>
  )
}