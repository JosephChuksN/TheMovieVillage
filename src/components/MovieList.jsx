import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { Link } from 'react-router-dom'
import { setMovies } from '../redux/actions'
import Header from './Header'





const MovieList = () => {
    const movies = useSelector((state)=> state.allMovies.movies)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const genreURL =""

    const previous = () => {
      if (page !== 1) {
        setPage(page - 1);
      } else {
        setPage(page);
      }
    };

    const next = () => {
      if (page < 10) {
        setPage(page + 1);
      }
    };


    const fetchedMovies = async () =>{

     try {
      const data = await axios.get(`${process.env.REACT_APP_API_URL}api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreURL}`)
   
      dispatch(setMovies(data.data.results))
      
     } catch (error) {
      console.log(error)
     }
   
    }


    useEffect(()=>{
      fetchedMovies()
    },[page])


  return (
    <>
    <Header />
    {Object.keys(movies).length === 0? (
      <div className="w-full flex items-center justify-center h-full lg:w-4/5 translate-y-10 lg:translate-y-32 mx-auto ">
         <p className="animate-bounce text-white text-xl">Loading...</p>
       
      </div>
    ): (
      <div className="w-full lg:w-4/5 translate-y-10 lg:translate-y-16 gap-5 lg:gap-2 lg:py-10 lg:justify-between items-center justify-center  mx-auto flex flex-wrap">
      <div className="flex text-white w-full items-center justify-center gap-10 lg:my-5">
       <button className={`bg-[#0047AB] ${page === 1? "bg-[#0047AB]/50 text-white/50 " : "hover:scale-105"} p-2 w-32 rounded-lg shadow-md shadow-[#0047AB] transition-all duration-300 ease-in-out `}
         onClick={previous}
         disabled={page === 1}
       >
         Previous
       </button>
       <button className={`bg-[#0047AB] ${page === 10? "bg-[#0047AB]/50 text-white/50 " : "hover:scale-105"} p-2 w-32 rounded-lg shadow-md shadow-[#0047AB] transition-all duration-300 ease-in-out`}
        onClick={next}
        disabled={page === 10}
       >
         Next
       </button>
      </div>
      { movies.map(details => {
       const {id,
              original_title,
              title,
              poster_path,
              release_date,       
             } = details
 const releaseDate = new Date(release_date)
 const year = releaseDate.getFullYear()
 const month = releaseDate.toLocaleString('default', { month: 'long' });
 const day   = releaseDate.getDate()
     return (
       <Link key={id} to={`/movie/${id}`}>
       <div key={id} className="transition-all duration-500  ease-in-out hover:scale-110 flex flex-col lg:mb-10  items-center p-2 rounded-lg bg-black shadow-md border-t-[1px] border-gray-700 shadow-gray-700 ">
       
        <img className="lg:w-52 lg:h-60 w-40 h-48"
         src={poster_path ? `https://image.tmdb.org/t/p/w154${poster_path}` : "unavailable"} 
         alt={original_title || title} 
         />
         <div className="flex flex-col text-white w-40 lg:w-52 mt-2">
          <p className="text-[13px] font-medium tracking-tight line-clamp-1">{original_title || title}</p>
          <span className="text-xs ">{`${month} ${day}, ${year}`}</span>
         </div>
      
       </div>
       </Link>
     )
      })

      }

      <div className="flex text-white w-full items-center justify-center gap-10 my-2">
       <button className={`bg-[#0047AB] ${page === 1? "bg-[#0047AB]/50 text-white/50 " : "hover:scale-105"} p-2 w-32 rounded-lg shadow-md shadow-[#0047AB] transition-all duration-300 ease-in-out `}
        onClick={previous}
        disabled={page === 1}
       >
         Previous
       </button>
       <button  className={`bg-[#0047AB] ${page === 10? "bg-[#0047AB]/50 text-white/50 " : "hover:scale-105"} p-2 w-32 rounded-lg shadow-md shadow-[#0047AB] transition-all duration-300 ease-in-out`}
        onClick={next}
        disabled={page === 10}
       >
         Next
       </button>
      </div>
    </div>
    )}
    </>
  )
}

export default MovieList