import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Category from './components/CardList';
import ReadPage from './components/ReadPage'; // Assuming you have a ReadPage component for viewing individual cards
import Create from './components/Create';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Content: Sidebar + Category */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <Sidebar setCategory={setSelectedCategory} />

          {/* Main Content */}
          <div className="flex-1 p-4">
            <Routes>
              {/* Home Route */}
              <Route
                path="/"
                element={<Category selectedCategory={selectedCategory} />}
              />
              
              {/* ReadPage Route for individual card details */}
              <Route path="/card/:id" element={<ReadPage />} />
              <Route path='/create' element={<Create />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
