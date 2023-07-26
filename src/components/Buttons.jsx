import React from 'react'

const Buttons = ({next, page, previous}) => {
  return (
    <div className="flex text-white w-full items-center justify-center gap-10 py-2 lg:py-5">
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
  )
}

export default Buttons