import axios from 'axios'
import { useEffect } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { Link } from 'react-router-dom'
import { setMovies } from '../redux/actions'



const MovieList = () => {
    const movies = useSelector((state)=> state.allMovies.movies)
    const dispatch = useDispatch()
    const page = 1
    const access_key = "6f71e11ddfecc154f3f6f2f4b8f369b2"
    const genreURL =""


    const fetchedMovies = async () =>{

     try {
      const data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${access_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}`)
   
      dispatch(setMovies(data.data.results))
      
     } catch (error) {
      console.log(error)
     }
   
    }


    useEffect(()=>{
      fetchedMovies()
    },[])


  return (
     <div className="w-full lg:w-4/5  gap-5 lg:gap-2 mt-5 lg:justify-between items-center justify-center  mx-auto flex flex-wrap">
       { movies.map(details => {
        const {id,
               original_title,
               title,
               poster_path,
               release_date,
               vote_count,
               popularity        
              } = details
      return (
        <Link key={id} to={`/movie/${id}`}>
        <div key={id} className="flex flex-col lg:mb-20  items-center p-2 rounded-lg bg-black shadow-md border-t-[1px] border-gray-700 shadow-gray-700 ">
        
         <img className="lg:w-52 lg:h-60 w-40 h-48"
          src={poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : "unavailable"} 
          alt={original_title || title} 
          />
          <div className="flex flex-col text-white w-40 lg:w-52">
           <span className="text-sm font-semibold">{original_title || title}</span>
           <span className="text-xs ">{release_date}</span>
          </div>
       
        </div>
        </Link>
      )
       })

       }
     </div>
  )
}

export default MovieList