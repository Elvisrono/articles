import React from 'react';
import { useNavigate } from 'react-router-dom';
import  cards  from './Card'

const Category = ({ selectedCategory }) => {

  const navigate = useNavigate()

  const filteredCards = selectedCategory
    ? cards.filter((card) => card.category === selectedCategory)
    : cards;

    

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">
        {selectedCategory ? `${selectedCategory}` : 'All Categories'}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img src={card.image} alt={card.title} 
            
            className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold cursor-pointer hover:text-blue-500"
                onClick={() => navigate(`/card/${card.id}`)}
                >{card.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{card.category}</p>
              <p className="text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
