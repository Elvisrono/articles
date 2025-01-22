import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import  cards  from './Card'

const ReadPage = () => {
    const navigate = useNavigate()

    const { id } = useParams()
    const card = cards.find((c) => c.id === parseInt(id))
  return (
    <div className="bg-gray-100 min-h-screen p-8">
    {card ? (
      <div className="bg-white rounded-lg shadow-md p-6">
        <button
        onClick={() => navigate('/')}
        className='bg-blue-500 border rounded-lg mb-4 px-2 py-2 text-white hover:bg-blue-800 transition'>Back to Categories</button>
        <img
          src={card.image}
          alt={card.title}
          className="w-full  object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-bold text-blue-500 mb-2">{card.title}</h1>
        <p className="text-sm text-gray-600 mb-2">{card.category}</p>
        <p className="text-gray-700">{card.description}</p>
      </div>
    ) : (
      <p className="text-center text-lg text-gray-700">Card not found!</p>
    )}
  </div>
  )
}

export default ReadPage
