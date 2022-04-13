import React from 'react'
import './Movie.css'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard/MovieCard'
import Paginations from '../Pagination/Paginations'


const Movie = () => {
  const trending = useSelector((state)=>state.movies.trending)
  
return (
    <div className='movie__container'>
      <div className='movie__cards__wrapper'>
          {trending.length > 0? 
          trending && trending.map((mov) => <MovieCard trending={mov} key={mov.id} {...mov} />)
          : <h2>Movie Not Found</h2>}
      </div>
      <div>
        <Paginations/>
      </div>
    </div>
  )
}

export default Movie