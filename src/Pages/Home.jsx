import React from 'react'
import FeaturedMovie from '../components/FeaturedMovie'
import TrendingMovie from '../components/TrendingMovie'
import TopratedMovies from '../components/TopratedMovies'

const Home = () => {
    
  return (
    <div className="w-full flex items-center flex-col gap-5 h-full pb-3   my-auto lg:w-4/5 translate-y-20 mx-auto ">
     <FeaturedMovie />
     <TrendingMovie />
     <TopratedMovies />
    </div>
  )
}

export default Home