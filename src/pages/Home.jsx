import React from 'react'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Achievement from '../components/Achievement'
import BuildTrade from '../components/BuildTrade'
import Promise from '../components/Promise'
import Paths from '../components/Paths'
import Program from '../components/Program'

function Home() {
  return (
    <div className='w-full flex items-center justify-center flex-col '>
        <Hero />
        <Cards />
        <Achievement />
        <BuildTrade />
        <Promise />
        <Paths />
        <Program />
    </div>
  )
}

export default Home