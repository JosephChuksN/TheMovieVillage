import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTrendingMovies } from '../redux/actions'
import axios from 'axios'

const TrendingMovie = () => {

    const trendingMovies = useSelector((state) => state.trendingMovies.trending)
    const dispatch = useDispatch()


useEffect(()=>{

        const fetchMovieDetails = async () =>{
        try {
          const data = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
          dispatch(setTrendingMovies(data.data.results))
    
        } catch (error) {
          console.log(error)
        }
      }
        fetchMovieDetails()
       
      },[])
      

  return (

    <div className="w-full h-full flex flex-col gap-2">
        <p className="text-white lg:text-xl font-semibold px-3 lg:px-0">Trending Movies</p>
      <div className="w-full h-full gap-5 flex overflow-x-auto scrollbar-hide px-2 lg:px-0">
      {trendingMovies?.map(trend => {
        const { poster_path, id } = trend
        return (
            <div className="w-40 h-48  shrink-0 " key={id}>
            <img className="h-full w-full rounded-lg" 
            src={`https://image.tmdb.org/t/p/original${poster_path}`} 
            alt={trend.original_title} />
        </div>
        )
        })}
      </div>
    </div>
  )
}

export default TrendingMovie