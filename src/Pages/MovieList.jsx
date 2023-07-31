import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { setMovies } from '../redux/actions'
import MovieContainer from '../components/MovieContainer'
import Buttons from '../components/Buttons'
import MovieGenre from '../components/MovieGenre'
import { setSelectedMovieGenre } from '../redux/actions'
import { clearSelectedGenres } from '../redux/actions'
import { setMovieGenre } from '../redux/actions'
import useGenre from '../hook/useGenre'





const MovieList = () => {

    //states
    const movies = useSelector((state)=> state.allMovies.movies)
    const selectedGenre = useSelector((state)=> state.selectedGenres.gen)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const genreURL = useGenre(selectedGenre)
    

   //adds a selected genre to filter movies
    const addGenre =  (genr, gen)=>{
      dispatch(setSelectedMovieGenre(gen))
      const result = genr.filter(genre=>( genre.id !== gen.id))
      dispatch(setMovieGenre(result))
      
    }
   //clears selected genres
   const clearGenre = ()=>{
      dispatch(clearSelectedGenres())
   }
    //go to previous page
    const previous = () => {
      if (page !== 1) {
        setPage(page - 1);
      } else {
        setPage(page);
      }
    };
     //next page
    const next = () => {
      if (page < 10) {
        setPage(page + 1);
      }
    };

   //fetch movies
    const fetchedMovies = async () =>{

     try {
      const data = await axios.get(`${process.env.REACT_APP_API_URL}api_key=${process.env.REACT_APP_API_KEY}${process.env.REACT_APP_API_URL_DESCRIPTION}${page}&with_genres=${genreURL}`)
   
      dispatch(setMovies(data.data.results))
      
     } catch (error) {
      console.log(error)
     }
   
    }


    useEffect(()=>{
      fetchedMovies()
    },[page, genreURL])


  return (
    <>
    
    <MovieGenre
        selectedGenre={selectedGenre}
        addGenre={addGenre}
        clearGenre={clearGenre}
      />
    {Object.keys(movies).length === 0? (
      <div className="w-full flex items-center justify-center h-[70vh] my-auto lg:w-4/5 translate-y-10 lg:translate-y-32 mx-auto ">
         <p className="animate-bounce text-white text-xl">Loading...</p>
       
      </div>
    ): (
      <div className="w-full lg:w-4/5 translate-y-20 lg:translate-y-28 gap-5 lg:gap-2 lg:py-10 lg:justify-between items-center justify-center  mx-auto flex flex-wrap">
      <Buttons 
       page={page}
       next={next}
       previous={previous}
       movies={movies}
      />
      { movies.map(details => {
       const {id, original_title, title,  poster_path, release_date} = details
       const releaseDate = new Date(release_date)
       const year = releaseDate.getFullYear()
       const month = releaseDate.toLocaleString('default', { month: 'long' });
        const day   = releaseDate.getDate()
     return (
       <MovieContainer 
       id={id}
       original_title={original_title}
       title={title}
       poster_path={poster_path}
       year={year}
       month={month}
       day={day}
       />
     )
      })

      }
       <Buttons 
       page={page}
       next={next}
       previous={previous}
       movies={movies}
       /> 
      
    </div>
    )}
     <span 
       className={`${selectedGenre < 1? "opacity-[0]" : "opacity-100" } lg:text-base font-medium text-sm px-3 py-1 cursor-pointer
        bg-red-600 shadow-md shadow-red-400 transition-all duration-500 ease-in-out hover:scale-105
         hover:shadow-red-600 text-white rounded-xl absolute top-24 lg:top-24 right-2 lg:right-40`}
       onClick={()=> clearGenre()}
       >
        Clear Genre
       </span>
    </>
  )
}

export default MovieList