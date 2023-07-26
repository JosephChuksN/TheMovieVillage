import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch  } from 'react-redux'
import { setMovies } from '../redux/actions'
import Header from '../components/Header'
import MovieContainer from '../components/MovieContainer'
import Buttons from '../components/Buttons'
import MovieGenre from '../components/MovieGenre'





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
      const data = await axios.get(`${process.env.REACT_APP_API_URL}api_key=${process.env.REACT_APP_API_KEY}${process.env.REACT_APP_API_URL_DESCRIPTION}${page}&with_genres=${genreURL}`)
   
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
      <div className="w-full flex items-center justify-center h-full my-auto lg:w-4/5 translate-y-10 lg:translate-y-32 mx-auto ">
         <p className="animate-bounce text-white text-xl">Loading...</p>
       
      </div>
    ): (
      <div className="w-full lg:w-4/5 translate-y-10 lg:translate-y-16 gap-5 lg:gap-2 lg:py-10 lg:justify-between items-center justify-center  mx-auto flex flex-wrap">
      <MovieGenre />
      <Buttons 
       page={page}
       next={next}
       previous={previous}
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
       /> 
    </div>
    )}
    </>
  )
}

export default MovieList