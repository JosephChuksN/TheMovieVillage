import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { setMovieGenre } from '../redux/actions'






const MovieGenre = ({ selectedGenre, addGenre}) => {
     const allGenres = useSelector((state)=> state.allGenres.genre)
     const dispatch = useDispatch()
     
     const { gen } = selectedGenre

     const fetchMovieGenres = async () =>{
        const data = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

        dispatch(setMovieGenre(data.data.genres))

     }


 useEffect(()=>{
    if(allGenres?.length < 1){
      fetchMovieGenres()
    }
 },[])

  return (
    <div className="flex flex-wrap gap-1.5 translate-y-10 lg:translate-y-24  px-0.5 lg:gap-5 text-gray-100 lg:py-5 lg:w-4/5 justify-center items-center mx-auto ">
       {gen && gen.map((selected)=>(
        <span className="px-2 py-1 bg-[#0047AB] mx-0.5 my-0.5 lg:m-0 rounded-2xl shadow-sm text-sm lg:text-base shadow-[#0047AB]"
         
        >
         {selected.name}
        </span>
       ))}
    {allGenres && allGenres.map((genre)=>(
        <span className="px-2 py-1 bg-[#ffffff06] mx-0.5 my-0.5 lg:m-0 rounded-2xl shadow-sm text-sm lg:text-base shadow-gray-600"
            key={genre.id}
            onClick={()=>addGenre(allGenres, genre)}
            >
            {genre.name}
        </span>
    ))

    }
    </div>
  )
}

export default MovieGenre