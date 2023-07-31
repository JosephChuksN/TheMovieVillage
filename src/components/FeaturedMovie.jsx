import React, {useEffect} from 'react'
import { myMovie } from '../MovieIds'
import { setFeaturedMovie } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const FeaturedMovie = () => {

    const featuredMovie = useSelector((state)=> state.featuredMovie)
    const movieId = myMovie.id
    const dispatch = useDispatch()

    const {
      adult,
      original_title,
      title,
      release_date,
      runtime,
      overview,
      backdrop_path,    
     } = featuredMovie

     const releaseDate = new Date(release_date)
     const year = releaseDate.getFullYear()
     const month = releaseDate.toLocaleString('default', { month: 'long' });
     const day   = releaseDate.getDate()
     const hours = runtime/60
     const minutes = runtime%60
    
useEffect(()=>{

    const fetchMovieDetails = async () =>{
     try {
          const data = await axios.get(`${process.env.REACT_APP_API_URL_DETAILS}${movieId}?api_key=${process.env.REACT_APP_API_KEY}`)
           dispatch(setFeaturedMovie(data.data))
         
         } catch (error) {
               console.log(error)
          }
       }
     fetchMovieDetails()
    //          return ()=>{
    //            dispatch(removeSelectedMovie())
    //          }
},[])



  return (
    <>
       {Object.keys(featuredMovie).length === 0 ?(
        <div className="w-full flex items-center justify-center h-[70vh] my-auto lg:w-4/5 translate-y-10 lg:translate-y-32 mx-auto ">
         <p className="animate-bounce text-white text-xl">Loading...</p>
       
      </div>
       ):
       (<div className="flex flex-col lg:flex-row w-full items-center  relative px-2 lg:px-0">
        <img className="w-full h-[30vh] lg:h-[80vh] max-w-full  rounded-lg "
        src={`https://image.tmdb.org/t/p/original${backdrop_path}`} alt={original_title} />
     <div className=" lg:absolute bottom-2 py-2 lg:px-3 w-full lg:w-4/5 flex flex-col gap-1 lg:gap-3 bg-black/30">
      <div className="flex flex-col lg:gap-20 gap-1 text-white">
        <span className="font-extrabold text-md lg:text-5xl lg:w-3/5  ">{original_title || title}</span>
        <span className="lg:font-semibold font-thin  lg:w-3/5 text-sm lg:text-lg">{overview}</span>
      </div>
    <div className="flex items-center gap-5 flex-wrap py-1 lg:w-3/5">
      <span className="flex gap-2 items-center  ">
        <span className="text-white lg:text-lg text-sm">Released:</span>
        <span className="text-gray-200  lg:text-lg text-sm">{`${month} ${day}, ${year}`}</span>
      </span>
      <span className="flex gap-2 items-center">
        <span className="text-white  lg:text-lg text-sm">Runtime:</span>
        <span className="text-gray-200  lg:text-lg text-sm">{`${Math.trunc(hours)}hr ${minutes}min`}</span>
      </span>
      </div>
     </div>
     <span className="absolute top-3 text-md right-1 lg:right-3 pr-5 pl-1 bg-black/40 text-white font-semibold lg:text-xl border-l-4 border-white">
      {`${!adult? "13+" : "18+" }`}
     </span>
     </div>
       )} 
    </>
  )
}

export default FeaturedMovie