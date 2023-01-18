import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className='bg-blue-500 text-white flex px-4 py-2 justify-between items-center transition-all'>
      <span className='text-xl  '>{props.title}</span>
          <div className='links flex space-x-5'>
              <Link to='/' className='hover:text-gray-300' >Home</Link>
              <Link to='/business' className='hover:text-gray-300' >Business</Link>
              <Link to='/entertainment' className='hover:text-gray-300' >Entertainment</Link>
              <Link to='/general' className='hover:text-gray-300' >General</Link>
              <Link to='/health' className='hover:text-gray-300' >Health</Link>
              <Link to='/science' className='hover:text-gray-300' >Science</Link>
              <Link to='/sports' className='hover:text-gray-300' >Sports</Link>
              <Link to='/technology' className='hover:text-gray-300' >Technology</Link>
      </div>
      <div className='mx-3 flex space-x-2'>
      <input type="text" placeholder='Search' className='rounded indent-3' />
      <button className='bg-black px-4 py-1 rounded hover:bg-gray-700'>Search</button>
      </div>
    </div>
  )
}

// it takes sure that sending proptype should br in the expected dataType
Navbar.propTypes = {
  title: PropTypes.string
}


// if props not passed the value will be the below assigned one
Navbar.defaultProps = {
  title: 'Set title Here'
}