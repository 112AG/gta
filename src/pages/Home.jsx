import React from 'react'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Achievement from '../components/Achievement'

function Home() {
  return (
    <div className='w-full'>
        <Hero />
        <Cards />
        <Achievement />
    </div>
  )
}

export default Home