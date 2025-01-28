import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const existingArticle = location.state?.article || null; // Get article if available

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image_url: '',
    description: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (existingArticle) {
      setFormData({
        title: existingArticle.title,
        category: existingArticle.category,
        image_url: existingArticle.image_url,
        description: existingArticle.description,
      });
    }
  }, [existingArticle]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (existingArticle) {
      // Update existing article (PUT request)
      axios
        .put(`http://127.0.0.1:8000/articles/${existingArticle.id}/`, formData)
        .then(() => {
          alert('Article updated successfully!');
          navigate('/'); // Redirect to home page after update
        })
        .catch(() => {
          setError('Failed to update article. Please try again.');
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      // Create new article (POST request)
      axios
        .post('http://127.0.0.1:8000/articles/', formData)
        .then(() => {
          alert('Article created successfully!');
          navigate('/'); // Redirect to home page after creation
        })
        .catch(() => {
          setError('Failed to create article. Please try again.');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="mt-3 mb-10 flex justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-9 w-1/2 drop-shadow-lg rounded-xl max-w-md">
        <h1 className="text-xl text-blue-500 font-semibold mb-4">
          {existingArticle ? 'Update Article' : 'Create Article'}
        </h1>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        <div className="mb-4">
          <label className="font-medium block text-sm text-gray-500">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="font-medium block text-sm text-gray-500">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            required
          >
            <option value="">Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Fashion">Fashion</option>
            <option value="Sports">Sports</option>
            <option value="Travel">Travel</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium block text-gray-500">Image URL</label>
          <input
            type="text"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            className="border rounded-lg w-full px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="text-sm font-medium block text-gray-500">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={`bg-blue-700 text-white border rounded-lg px-5 py-2 ml-28 w-40 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? (existingArticle ? 'Updating...' : 'Creating...') : existingArticle ? 'Update' : 'Create'}
        </button>
      </form>
    </div>
  );
};

export default Create;
