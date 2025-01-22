import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CardList from './components/CardList';
import Category from './components/CardList';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content: Sidebar + CardList */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar setCategory={setSelectedCategory} />

        {/* Main Content */}
        <div className="flex-1 p-4">
          <Category selectedCategory={selectedCategory} />
          
        </div>
      </div>
    </div>
  );
};

export default App;
