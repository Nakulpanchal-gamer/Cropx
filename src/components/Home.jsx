import React from 'react'

export const Home = () => {
  return (
    <div>
        <section className="relative w-full h-[80vh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "../images/R.jpeg" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>  
      </div>

      {/* Text Content */}
      <div className="relative text-center text-white px-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold">
          Smarter Farming with CropX
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          AI-powered insights to maximize your yield and save resources.
        </p>
        <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg">
          Get Started
        </button>
      </div>
    </section>
    </div>
  )
}
