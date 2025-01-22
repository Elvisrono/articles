import React from 'react'
import { useNavigate } from 'react-router-dom'


const Create = () => {
    const navigate = useNavigate
  return (
    <div className=' mt-3 mb-10 flex justify-center  '>
      <form action="" className='bg-white p-9 w-1/2 drop-shadow-lg rounded-xl max-w-md  '>
        <h1 className='text-xl text-blue-500 font-semibold'>Create</h1>
        <div className='mb-4'>
            <label className='font-medium block text-sm text-gray-500'>Title</label>
            <input type='text' className='w-full border rounded-lg px-3 py-2' required />
        </div>
        <div className='mb-4'>
            <label className='font-medium block text-sm text-gray-500'>Category</label>
            {/* <input type='text' className='w-full border rounded-lg px-3 py-2'  required/> */}
            <select name="" className='w-full border rounded-lg px-3 py-2'>
                <option value="">Technology</option>
                <option value="">Fashion</option>
                <option value="">Sports</option>
                <option value="">Travel</option>
            </select>
        </div>
        <div className='mb-4'>
            <label className='text-sm font-medium block text-gray-500'>ImageUrl</label>
            <input type="text" className='border rounded-lg w-full px-3 py-2' required />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-500">
            Description
          </label>
          <textarea
            name="description"
            className="w-full px-4 py-2 border rounded-lg"
            rows="4"
            required
          ></textarea>
          </div>
          <button className='bg-blue-700 border rounded-lg px-5 py-2 ml-28 w-40'>Create</button>
      </form>
    </div>
  )
}

export default Create
