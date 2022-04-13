import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Api_Key_URL, Base_URL } from "../api/api";

export const trendingAsync = createAsyncThunk(
    'movies/trendingAsync',
    async function({text,page},{dispatch}){
        const type = text? 'search':'discover'
        const data = await axios.get(`${Base_URL}${type}/movie?api_key=${Api_Key_URL}&query=${text}&page=${page}`)

        dispatch(movieTotalPages(data.data.total_pages))
        dispatch(movieTrend(data.data.results))
    }
)

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        trending:[],
        search:[],
        status: null,
        error: null,
        totalPages: 0,
        pages: null,
    },
    reducers:{
       movieTrend(state,action){
           state.trending = action.payload
       },
       movieSearch(state,action){
           state.search = action.payload
       },
       movieTotalPages(state,action){
           state.totalPages = action.payload
       },
       setPages(state,action){
           state.pages = action.payload
       }
    },
    extraReducers:{
        [trendingAsync.pending]:(state)=>{
            state.status = 'loading';
            state.error = null
        },
        [trendingAsync.fulfilled]:(state,action)=>{
            state.status = 'resolved'
            state.movies = action.payload
        },
    }
})

export const {movieTrend,setPages,movieSearch,movieTotalPages} = movieSlice.actions

export default movieSlice.reducer