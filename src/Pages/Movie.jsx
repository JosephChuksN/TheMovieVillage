import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedMovie } from '../redux/actions'
import { removeSelectedMovie } from '../redux/actions'
import axios from 'axios'
import MovieDetails from '../components/MovieDetails'
import arrowLeft from '../assets/arrowleft.svg'


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
    genres,
    spoken_languages     
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
  

  useEffect(()=>{

    const fetchMovieDetails = async () =>{
    try {
      const data = await axios.get(`${process.env.REACT_APP_API_URL_DETAILS}${params.movieId}?api_key=${process.env.REACT_APP_API_KEY}`)
      dispatch(setSelectedMovie(data.data))

    } catch (error) {
      console.log(error)
    }
  }
    fetchMovieDetails()
    return ()=>{
      dispatch(removeSelectedMovie())
    }
  },[])


    
  return (
    <>
    {movie? (
      <div className="lg:w-4/5 w-full lg:items-start items-center  lg:py-10 lg:px-5 px-3 translate-y-20 py-1 mx-auto h-[100vh] flex lg:flex-row flex-col lg:gap-16 ">
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
        spoken_languages={spoken_languages}
       />
      </div>
    </div>
    ) : (
      <div className="w-full flex items-center justify-center h-[70vh] my-auto lg:w-4/5 translate-y-10 lg:translate-y-32 mx-auto ">
      <p className="animate-bounce text-white text-xl">Loading...</p>
    
   </div>
    )}
    </>
  )
}

export default Movie