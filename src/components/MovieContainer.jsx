import React from 'react'
import { Link } from 'react-router-dom'

const MovieContainer = ({id, poster_path, original_title, title, year, month, day}) => {
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
}

export default MovieContainer