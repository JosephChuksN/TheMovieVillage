import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedMovie } from '../redux/actions'
import { removeSelectedMovie } from '../redux/actions'
import axios from 'axios'
import MovieDetails from '../components/MovieDetails'

const Movie = () => {
    
  const movie = useSelector((state)=> state.movieDetails)

  const {
    adult,
    original_title,
    title,
    status,
    release_date,
    poster_path,
    tagline,
    vote_average,
    runtime,
    overview,
    genres      
   } = movie
  const dispatch = useDispatch()
  const params = useParams()

  const releaseDate = new Date(release_date)
  const year = releaseDate.getFullYear()
  const month = releaseDate.toLocaleString('default', { month: 'long' });
  const day   = releaseDate.getDate()
  const rating = String(vote_average)
  const hours = runtime/60
  const minutes = runtime%60
  

const fetchMovieDetails = async () =>{
    try {
      const data = await axios.get(`${process.env.REACT_APP_API_URL_DETAILS}${params.movieId}?api_key=${process.env.REACT_APP_API_KEY}`)
      dispatch(setSelectedMovie(data.data))

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchMovieDetails()
    console.log(movie)

    return ()=>{
      dispatch(removeSelectedMovie())
    }
  },[params.movieId])


    
  return (
    <div className="lg:w-4/5 w-full lg:items-start items-center lg:py-10 lg:px-5 px-3 py-1 mx-auto h-[100vh] flex lg:flex-row flex-col lg:gap-16 ">
      <img className="lg:w-96 w-full lg:h-[85%] lg:rounded-xl lg:min-h-auto min-h-[55%] rounded "
      src={`https://image.tmdb.org/t/p/original${poster_path}`} 
      alt={movie.original_tittle} 
      />
      <div className="lg:w-4/5 lg:h-auto min-h-[45%] w-full flex flex-col gap-3 lg:gap-10">
        <div className="w-full flex flex-col  lg:gap-2">
          <span className="lg:text-3xl text-xl text-white font-bold">{original_title}</span>
          <span className="text-gray-400 flex  text-md py-1 font-medium lg:text-base items-center">
            {tagline || title}
          </span>
          <span className="flex flex-wrap gap-2">{genres?.map((genre)=>(
            <span className="text-white px-2.5  lg:px-2 py3 bg-[#0047AB] shadow-md text-sm lg:text-base font-medium shadow-[#0047AB] rounded-lg"
             key={genre.id}>
             {genre.name}
            </span>
        ))}</span>
        </div>
        <span className="text-gray-100 flex flex-col gap-2">
          <span className="lg:text-2xl font-medium text-lg ">Overview</span>
          <span className="lg:text-base text-sm">{overview}</span>
        </span>
        
       <MovieDetails 
        status={status}
        year={year}
        month={month}
        day={day}
        rating={rating}
        hours={hours}
        adult={adult}
        minutes={minutes}
       />
      </div>
    </div>
  )
}

export default Movie