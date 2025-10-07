import React from 'react'

const Card = ({title, desc}) => {
  return (
  <div className="backdrop-blur-md bg-white/30 border border-white/40 shadow-xl rounded-2xl p-6 max-w-sm text-center text-gray-800 hover:scale-105 hover:bg-white/40 transition-all duration-300">
          <h2 className="font-semibold text-white text-xl mb-3">{title}</h2>
          <p className="text-sm leading-relaxed">
           {desc}
          </p>
        </div>
  )
}

export default Card
