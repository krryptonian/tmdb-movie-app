import React from 'react'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home - The Movie Database</title>
      </Helmet>
      <div className='h-screen flex items-center justify-center bg-gray-100'>
        <span className='uppercase leading-none font-medium text-gray-900 text-lg'>🎬 The Movie Database</span>
      </div>
    </React.Fragment>
  )
}

export default Home
