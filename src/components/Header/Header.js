import React, { useEffect } from 'react'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { trendingAsync } from '../../Store/movieSlice'

const Header = () => {
  const[text, setText]=useState('')
  const dispatch = useDispatch()
  const page = useSelector((state)=>state.movies.pages)

  useEffect(()=>{
    dispatch(trendingAsync({text,page}))
  },[dispatch,text,page])

  return (
    <div className='header'>
        <div className='header__logo'>
          <h1>Movie DB</h1>
        </div>
        <div>
            <input onChange={(e)=>setText(e.target.value)} value={text} placeholder='Search...' type='text'/>
            <button className='btn__clear' onClick={()=>setText('')}>clear</button>
        </div>
    </div>
  )
}

export default Header
