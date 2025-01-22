import React from 'react';

const Category = ({ selectedCategory }) => {
  // Sample data for cards
  const cards = [
    {
      id: 1,
      category: 'Fashion',
      title: 'Top Movies of 2025',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Discover the top-grossing movies of the year.',
    },
    {
      id: 2,
      category: 'Sports',
      title: 'Champions League Highlights',
      image: 'https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Catch up on the latest Champions League matches.',
    },
    {
      id: 3,
      category: 'Technology',
      title: 'Tech Trends for 2025',
      image: 'https://images.pexels.com/photos/3944460/pexels-photo-3944460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Explore the latest advancements in technology.',
    },
    {
      id: 4,
      category: 'Travel',
      title: 'Upcoming Blockbusters',
      image: 'https://images.pexels.com/photos/2927607/pexels-photo-2927607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'A sneak peek into the most anticipated movies.',
    },
  ];


  

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
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{card.title}</h2>
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
