import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setMovieGenre } from '../redux/actions'




const MovieGenre = () => {
     const allGenres = useSelector((state)=> state.allGenres)
     const dispatch = useDispatch()
     const { genres } = allGenres

     const fetchMovieGenres = async () =>{
        const data = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

        dispatch(setMovieGenre(data.data))

     }
 useEffect(()=>{
    fetchMovieGenres()
 },[])

  return (
    <div className="flex flex-wrap gap-3 lg:gap-5 text-gray-100 lg:py-5 lg:w-4/5 justify-center items-center mx-auto ">
    { genres?.map((genre)=>(
        <span className="px-2 py-1 bg-[#ffffff06] rounded-2xl shadow-sm text-sm lg:text-base shadow-gray-600"
            key={genre.id}>
            {genre.name}
        </span>
    ))

    }
    </div>
  )
}

export default MovieGenre