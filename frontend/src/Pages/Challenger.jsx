import React from 'react'
import Navbar from '../utils/Navbar'
import Footer from '../utils/Footer'

const Challenger = () => {
  return (
    <div className="h-[100vh] w-full flex gap-5 flex-col items-center bg-black"
    style={{backgroundImage:"url('./bg.svg')",
      backgroundSize:"cover"
    }}>
      <div className="h-full w-full bg-opacity-20 backdrop-blur-sm flex flex-col items-center gap-8">
        <Navbar />
        <div style={{
          height:"100vh"
        }}></div>
        <Footer />
      </div>
    </div>
  )
}

export default Challenger