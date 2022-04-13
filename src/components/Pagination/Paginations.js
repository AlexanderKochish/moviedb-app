import  React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { setPages } from '../../Store/movieSlice';

export default function Paginations() {

    const totalCount = useSelector((state)=>state.movies.totalPages)
    const dispatch = useDispatch()

  return (
    
      <Stack>
       <Pagination
          onChange={(e)=>dispatch(setPages(e.target.textContent))} 
          count={totalCount} 
          sx={{margin:'20px auto'}}
          color="secondary" 
          hideNextButton 
          hidePrevButton />
    </Stack> 
   );
}