import React from 'react'
import './Treiler.css'
import { useSelector } from 'react-redux'
import { img_original } from '../../api/api'

const Treiler = () => {
  const treiler = useSelector((state)=>state.movies.search)

return (
    <div className='treiler__container'>
      <div className='treiler__wrapper'
        style={{backgroundImage: `url('${img_original}${treiler.backdrop_path}')`}}>
          <h1 className='treiler__title'>{treiler.title}</h1>
            <p className='treiler__overview'>{treiler.overview}</p>
              <span className='treiler__date'>{treiler.release_date}</span>
      </div>
    </div>
  )
}

export default Treiler

