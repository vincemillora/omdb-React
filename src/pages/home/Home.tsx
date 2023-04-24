import { useEffect, useState } from 'react';
import { Input, ConfigProvider, Pagination, Button, message } from 'antd';
import type { PaginationProps } from 'antd';
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import './Home.css';
import { MovieList } from '../../components/movie_list/MovieList';

import { useAppSelector, useAppDispatch } from '../../store/hooks';

const { Search } = Input;

export const Home = () => {
  const dispatch = useAppDispatch()
  const [messageApi, contextHolder] = message.useMessage();
  const [searchParams, setSearchParams] = useSearchParams();

  // page states
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const title = useAppSelector(state => state.movies.title);
  const currentPage = useAppSelector(state => state.movies.currentPage);
  const moviesFromState = useAppSelector(state => state.movies.movies.find(paginatedMovies => paginatedMovies.pageNumber === currentPage));
  const moviesTotalCount = useAppSelector(state => state.movies.totalCount);
  const favorites = useAppSelector(state => state.user.favorites);
  const searchHistory = useAppSelector(state => state.user.searchedTitles);
  
  const onSubmit = (movieTitle: string) => {
    if (movieTitle && movieTitle !== title) {
      dispatch({ type: 'movies/resetMoviesState' });
      onTitleChange(movieTitle);
    } else if (!movieTitle) {
      messageApi.open({
        type: 'error',
        duration: 5,
        content: 'Please input movie title to search.',
      });
    }
  };

  const onPageChange = (page: number) => {
    dispatch({ 
      type: 'movies/setCurrentPage',
      payload: {
        pageNumber: page,
      }
    })
  };

  const onTitleChange = (title: string | null) => {
    dispatch({ 
      type: 'movies/setTitle',
      payload: {
        title: title,
      }
    })
    dispatch({ 
      type: 'user/addToSearchedTitles',
      payload: {
        searchedTitle: title,
      }
    })
  };

  // mounted hook to check for page number in url
  useEffect(() => {
    if (searchParams.get('page')) {
      onPageChange(parseInt(searchParams.get('page') as string))
    }
    if (searchParams.get('title')) {
      onTitleChange(searchParams.get('title'));
    }
  }, []);

  // hook to fetch when title or page number changes
  useEffect(() => {
    if (!title) { return; }
    setSearchParams({ 
      title: title,
      page: currentPage.toString()
    });
    if (!moviesFromState || moviesFromState.items.length === 0) {
      setIsLoading(true);
      axios.get(`http://www.omdbapi.com/?s=${title}&apikey=95dafefd&type=movie&page=${currentPage}`)
        .then((res) => {
          if(res.status === 200) {
            dispatch({ 
              type: 'movies/addMovies',
              payload: {
                totalCount: res.data.totalResults,
                pageNumber: currentPage,
                items: res.data.Search
              }
            })
          } else {
            messageApi.open({
              type: 'error',
              duration: 5,
              content: 'An error occured. Please refresh the browser and try again.',
            });
          }
        })
        .catch(() => {
          messageApi.open({
            type: 'error',
            duration: 5,
            content: 'An error occured. Please refresh the browser and try again.',
          });
        })
        .finally(() => {
          setIsLoading(false);
        })
      }
  }, [title, currentPage]);

  const itemRender: PaginationProps['itemRender'] = (page, type, originalElement) => {
    if (type === 'page') {
      return (
        <span style={{color: currentPage === page ? 'black' : 'white'}}>
          {page}
        </span>
      );
    }
    return originalElement;
  };

  const paginationComponent = moviesTotalCount > 1 ? (
    <div className='pagination'>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 100,
            colorPrimary: '#d03050',
            colorBgContainer: '#d03050',
          },
        }}
      >
        <Pagination 
          onChange={onPageChange}
          current={currentPage}
          pageSize={10}
          total={moviesTotalCount}
          showSizeChanger={false}
          showTitle={false}
          itemRender={itemRender} 
        />
      </ConfigProvider>
    </div>
  ) : "";

  const searchHistoryButtons = searchHistory.map((item, index) =>
    <Button
      key={index}
      className='button'
      onClick={() => onSubmit(item)}
    >
      <span>{item}</span>
    </Button>
  )

  return (
    <div className='home'>
      {contextHolder}
      <div className='form-input'>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#d03050',
            },
          }}
        >
          <Search
            placeholder="Enter movie title here."
            loading={isLoading}
            size="large"
            onSearch={onSubmit}
            onPressEnter={(e) => onSubmit(e.currentTarget.value)}
            color='#d03050'
            enterButton
          />
          {
            searchHistoryButtons.length > 0 ? (
              <div className='search-history-container'>
                <span>Search History: </span>
                {searchHistoryButtons}
              </div>
            ) : ""
          }
        </ConfigProvider>
      </div>
        
      <div className='movie-section'>
        <h2 className='section-title'>Search Results</h2>
        {paginationComponent}
        <MovieList 
          isLoading={isLoading}
          movies={moviesFromState ? moviesFromState.items : []}
          totalCount={moviesTotalCount}
        />
        {paginationComponent}
      </div>
      {
        favorites.length > 0 ? (
          <div className='movie-section'>
            <h2 className='section-title'>Favorites</h2>
            <MovieList 
              isLoading={false}
              movies={favorites}
              totalCount={favorites.length}
            />
          </div>
        ) : ""
      }
    </div>
  );
};