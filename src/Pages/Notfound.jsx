import React from 'react'
import Notfoundimg from '../assets/notfound.png' // Make sure this path is correct

const Notfound = () => {
  return (
    // We make the container take up at least the full screen height (min-h-screen)
    // Then we use flexbox to center the content both vertically (items-center) and horizontally (justify-center)
    <div className='min-h-screen mt-[70px] flex items-center justify-center bg-white px-4'>
      <div>
        <img 
            src={Notfoundimg} 
            alt='Page Not Found!' 
            // We add responsive width to the image so it looks good on all screen sizes
            className='w-full max-w-md mx-auto'
        />
        {/* You can optionally add a title and a button below */}
        <div className='text-center mt-8'>
            <h1 className='text-2xl md:text-4xl font-bold text-gray-800'>Page Not Found</h1>
            <p className='text-gray-500 mt-2 mb-6'>Sorry, we couldn't find the page you're looking for.</p>
            <a 
                href="/" 
                className='inline-block px-6 py-3 text-white font-semibold rounded-lg bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] hover:opacity-90 transition-opacity'
            >
                Go Back Home
            </a>
        </div>
      </div>
    </div>
  )
}

export default Notfound