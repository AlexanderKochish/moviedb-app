import React from 'react'
import { img_300, poster_holder } from '../../../api/api'
import './MovieCard.css'
import { useDispatch } from 'react-redux'
import { movieSearch } from '../../../Store/movieSlice'

const MovieCard = (props) => {
  const dispatch = useDispatch()

  const handleClick = ()=>{
    dispatch(movieSearch(props.trending))
    window.scroll(0, 0)
  }
  
return (
  <div className='movie__card' onClick={handleClick}>
    <img className='movie__card__image' src={props.poster_path? `${img_300}${props.poster_path}`:poster_holder} alt={props.name}/> 
      <div>
        <h3>{!props.title? props.name:props.original_title}</h3>
          <span className='media__type'>{props.media_type==='tv'? 'TV Serial':'Movie'}</span>
          <span>{props.release_date}</span>
      </div>
  </div>
  )
}

export default MovieCard