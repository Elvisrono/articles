import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  // <div className="bg-transparent border shadow-lg flex items-center justify-around flex-wrap p-3 md:border-slate-100 md:border-b-2 md:border-t-0 md:border-r-0">
  //   <div className="flex justify-between items-center container mx-auto">
  //     {/* Logo */}
  //     <h1 className="text-xl text-blue-400 font-bold">MyLogo</h1>

  //     {/* Navigation */}
  //     <ul className="flex gap-4 text-xl">
  //       <li><a href="#" className="hover:text-gray-400">Home</a></li>
  //       <li><a href="#" className="hover:text-gray-400">About</a></li>
  //       <li><a href="#" className="hover:text-gray-400">Contact</a></li>
  //     </ul>

  //     {/* SignUp/Login */}
  //     <div className='text-xl'>
  //       <a href="#" className="hover:text-gray-400 p-2">SignUp</a>
  //       <a href="#" className="hover:text-gray-400 p-2">Login</a>
  //     </div>
  //   </div>
  // </div>
    <div className='bg-transparent border shadow-lg p-3 justify-around'>
      <div className='flex justify-between items-center container mx-auto text-xl '>
        <h1 className='text-xl font-semibold text-blue-400'>MyLogo</h1>
        <ul className='flex gap-4 text-blue-300 '>
          <li><Link to="">Home</Link></li>
          <li><Link to="">About</Link></li>
          <li><Link to="">Contact</Link></li>
          <li><Link to='create' >Create</Link></li>
        </ul>
        <div  className='p-2'>
          <a  className='p-2' href="">Login</a>
          <a className='p-2' href="">SignUp</a>
        </div>
      </div>
    </div>
);

export default Navbar;
