import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Category = ({ selectedCategory }) => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]); // Renamed to 'articles' for clarity

  // Fetch articles from the backend
  // useEffect(() => {
  //   axios
  //     .get('http://127.0.0.1:8000/articles/')
  //     .then((response) => {
  //       setArticles(response.data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching articles:', error);
  //     });
  // }, []); // Empty dependency array ensures this runs only once on component mount

  useEffect(() => {
    fetch('http://127.0.0.1:8000/articles/')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setArticles(data)
    })
    .catch((error) => console.log('Error fetching articles:', error))
  }, []);



  // Filter articles based on the selected category
  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.category === selectedCategory)
    : articles;

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">
        {selectedCategory ? `${selectedCategory}` : 'All Categories'}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={article.image_url}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2
                className="text-xl font-bold cursor-pointer hover:text-blue-500"
                onClick={() => navigate(`/card/${article.id}`)}
              >
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">{article.category}</p>
              <p className="text-gray-700">{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
