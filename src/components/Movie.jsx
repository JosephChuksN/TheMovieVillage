import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedMovie } from '../redux/actions'
import { removeSelectedMovie } from '../redux/actions'
import axios from 'axios'

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
    vote_count,
    popularity ,
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
      const data = await axios.get(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=6f71e11ddfecc154f3f6f2f4b8f369b2`)
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
    <div className="w-4/5 py-20 px-5 mx-auto h-[100vh flex gap-16 ">
      <img className="w-96 h-[65%] rounded-xl"
      src={`https://image.tmdb.org/t/p/original${poster_path}`} 
      alt={movie.original_tittle} 
      />
      <div className="w-4/5 flex lg:flex-col gap-10">
        <div className="w-full flex flex-col gap-2">
          <span className="text-3xl text-white font-semibold">{original_title}</span>
          <span className="text-gray-400 flex items-center gap-5">
            {tagline || title}
          </span>
          <span className="flex gap-2">{genres?.map((genre)=>(
            <span className="text-white px-2 py3 bg-[#0047AB] shadow-md shadow-[#0047AB] rounded-lg"
            key={genre.id}>
              {genre.name}
            </span>
          ))}</span>
        </div>
        <span className="text-gray-100 flex flex-col gap-2">
          <span className="text-2xl font-medium ">Overview</span>
          <span>{overview}</span>
        </span>
        
        <div className="text-white flex items-center gap-5 pb-3 border-b-[1px] border-gray-600">
          <span className="flex gap-2 items-center">
            <span>Status:</span>
            <span className="text-gray-400">{status}</span>
          </span>
          <span className="flex gap-2 items-center">
            <span>Released:</span>
            <span className="text-gray-400">{`${month} ${day}, ${year}`}</span>
          </span>
          <span className="px-1 py-0.5 text-gray-100 font-bold text-md border border-gray-100 rounded">{`${!adult? "13+" : "18+" }`}</span>
          <span className="flex gap-2 items-center">
            <span>Runtime:</span>
            <span className="text-gray-400">{`${Math.trunc(hours)}hr ${minutes}min`}</span>
          </span>
          <span className="px-1.5 py-0.5 text-black font-bold text-md  bg-gray-100 rounded">{rating?.slice(0,3)}</span>
         
        </div>
      </div>
    </div>
  )
}

export default Movie