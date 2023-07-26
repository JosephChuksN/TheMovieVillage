import React from 'react'

const MovieDetails = ({
    id,
    status,
    month,
    day,
    year,
    adult,
    hours,
    rating,
    minutes
}) => {
  return (
    <div  className="text-white flex-wrap flex items-center gap-2 lg:gap-5 pb-3 border-b-[1px] text-sm lg:text-base border-gray-600">
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
  )
}

export default MovieDetails