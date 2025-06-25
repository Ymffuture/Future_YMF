import React from 'react'
import { Link } from 'react-router-dom'

const Home =()=> {
 
  return (
    <>
       <section className="bg-background text-primary py-20 px-6 md:px-20 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Empower Your Support System with <br />
          <span className="text-accent">HelpDesk Pro</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          AI-enhanced ticketing system that elevates your customer service — powered by Gemini AI.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[royalblue] hover:bg-blue-700 text-[#fff] px-6 py-3 rounded-xl transition duration-300 flex items-center gap-2">
            <Link to='/dashboard'>
            Get Started 
            </Link>
          
          </button>
          <button className="border bg-secondary hover:bg-green-600 text-[#333] px-6 py-3 rounded-xl transition duration-300 hover:text-amber-50">
            Learn More
          </button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Home
