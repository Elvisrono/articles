import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ReadPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the article ID from the URL
  const [article, setArticle] = useState(null); // State to hold the article details
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(''); // State to handle errors

  useEffect(() => {
    // Fetch the specific article using the ID
    axios
      .get(`http://127.0.0.1:8000/articles/${id}/`)
      .then((response) => {
        setArticle(response.data); // Set the article data
      })
      .catch((err) => {
        setError('Failed to load the article. Please try again later.');
        console.error('Error fetching article:', err);
      })
      .finally(() => {
        setLoading(false); // Stop loading spinner
      });
  }, [id]); // Dependency array includes `id` to re-fetch if the ID changes

  const handleUpdate = () => {
    navigate('/create', { state: { article }})
  }
  const handleDelete = () => {
    if (window.confirm('Are yiu sure you want to delete this article')) {
      axios
        .delete(`http://127.0.0.1:8000/articles/${id}/`)
        .then(() => {
          alert('Article deleted successfully')
          navigate('/')
        })
        .catch((err) =>{
          console.error('Error deleting article')
          alert('Failed to delete the article')
        })
    }
  }

  if (loading) {
    return (
      <div className="bg-gray-100 min-h-screen p-8 flex justify-center items-center">
        <p className="text-gray-700 text-lg">Loading article...</p>
      </div>
    );
  }

  // if (!article) {
  //   return <div className="text-3xl text-blue-600 text-center">article check 1, 2 .....</div>
  // }
  if (error) {
    return (
      <div className="bg-gray-100 min-h-screen p-8 flex justify-center items-center">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {article ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <button
            onClick={() => navigate('/')}
            className="bg-blue-500 border rounded-lg mb-4 px-4 py-2 text-white hover:bg-blue-800 transition"
          >
            Back to Categories
          </button>
          <img
            src={article.image_url}
            alt={article.title}
            className="w-full object-cover rounded-lg mb-4"
          />
          <h1 className="text-3xl font-bold text-blue-500 mb-2">{article.title}</h1>
          <p className="text-sm text-gray-600 mb-2">{article.category}</p>
          <p className="text-gray-700">{article.description}</p>
          <div className='flex gap-4 mt-6'>
            <button 
              onClick={handleUpdate}
              className='bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition'>Update</button>
            <button className=' bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition'
            onClick={handleDelete}
            >Delete</button>
          </div>
        </div>
      ) : (
        <p className="text-center text-lg text-gray-700">Article not found!</p>
      )}
     
    </div>
  );
};

export default ReadPage;
