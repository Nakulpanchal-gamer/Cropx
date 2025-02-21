import React from 'react'
// import bgImage from "./assets/R.jpg"; l


export const Index = () => {
  return (
    <div>  
       {/* <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image 
      <img src="./th.jpeg" alt="Background" className="absolute w-full h-full object-cover" />

      {/* Dark Overlay 
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      Text Content 
      <div className="relative text-center text-black px-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold">
          Smarter Farming with CropX
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          AI-powered insights to maximize your yield and save resources.
        </p>
        <button className="mt-6 bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-lg text-lg">
          Get Started
        </button>
      </div>
    </section>
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        
       Left Side - Text 
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800">
            Smarter Farming with CropX
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            CropX provides real-time soil and crop insights, helping farmers
            optimize irrigation, fertilization, and overall crop health.
          </p>
          <ul className="mt-6 space-y-3 text-gray-700 text-decoration-none">
            <li className="flex items-center gap-2">
              ✅ AI-driven soil sensors
            </li>
            <li className="flex items-center gap-2">
              ✅ Real-time analytics dashboard
            </li>
            <li className="flex items-center gap-2">
              ✅ Water & resource optimization
            </li>
          </ul>
          <button className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg text-lg">
            Learn More
          </button>
        </div>

       Right Side - Image 
        <div className="flex justify-center">
          <img src="/th.jpeg" alt="CropX Technology" className="w-full max-w-md rounded-lg shadow-lg" />
        </div>

      </div>
    </section> */}
    {/* Hero Section */}
    <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/banner.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-black text-center flex flex-col items-center justify-center h-full">
          <h1 className="text-5xl font-bold">Smart Farming with CropX</h1>
          <p className="mt-4 text-lg">Optimize water, nutrients, and soil health with AI-powered insights.</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-black font-semibold rounded-lg hover:bg-blue-700">Get Started</button>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Why Choose CropX?</h2>
        <div className="mt-6 flex justify-center gap-8 flex-wrap">
          <div className="w-80 p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Precision Farming Made Easy</h3>
            <p className="mt-2 text-gray-600">Data-Driven Decisions: Access real-time data from soil to sky, helping you make informed decisions about irrigation, disease management, and nutrition.</p>
            <p className="mt-2 text-gray-600">Holistic Field Overview: Get a comprehensive view of your field conditions with easy-to-understand insights.</p>
          </div>
          <div className="w-80 p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Connectivity and Integration</h3>
            <p className="mt-2 text-gray-600">All-in-One Platform: Seamlessly connect your IoT devices, sensors, and farm machinery.</p>
            <p className="mt-2 text-gray-600">Unified Data: Aggregate data from multiple sources into one platform for better farm management.</p>
          </div>
          <div className="w-80 p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Boost Your Farm Productivity</h3>
            <p className="mt-2 text-gray-600">Increase Yields: Achieve higher crop yields with optimized resource use.</p>
            <p className="mt-2 text-gray-600">Minimize Environmental Impact: Reduce input usage and promote sustainable farming practices.</p>
          </div>
          <div className="w-80 p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Proven Results</h3>
            <p className="mt-2 text-gray-600">Success Stories: Read about our customers who have seen significant yield boosts and profitability increases.</p>
            <p className="mt-2 text-gray-600">Global Reach: CropX is used in multiple countries and supports various crop types.</p>
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section id="global-reach" className="py-16 text-center bg-white">
        <h2 className="text-3xl font-bold">Our Global Impact</h2>
        <div className="mt-6 flex justify-center gap-16">
          <div>
            <p className="text-4xl font-bold">50+</p>
            <p className="text-gray-600">Countries</p>
          </div>
          <div>
            <p className="text-4xl font-bold">10,000+</p>
            <p className="text-gray-600">Farms</p>
          </div>
          <div>
            <p className="text-4xl font-bold">1M+</p>
            <p className="text-gray-600">Acres Monitored</p>
          </div>
        </div>
      </section>

      {/* Customer Showcase */}
      <section id="customers" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Trusted by Farmers Worldwide</h2>
        <div className="mt-6 flex justify-center gap-8">
          <img src="./assets/th.jpeg" alt="Customer 1" className="w-32" />
          <img src="./assets/th.jpeg" alt="Customer 2" className="w-32" />
          <img src="./assets/th.jpeg" alt="Customer 3" className="w-32" />
        </div>
      </section>

      {/* News & Insights */}
      <section id="news" className="py-16 text-center">
        <h2 className="text-3xl font-bold">Latest News & Insights</h2>
        <div className="mt-6 flex justify-center gap-8 flex-wrap">
          <div className="w-80 p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">CropX Launches New AI Model</h3>
            <p className="mt-2 text-gray-600">Discover how AI is transforming agriculture.</p>
          </div>
          <div className="w-80 p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Sustainable Farming Techniques</h3>
            <p className="mt-2 text-gray-600">Learn the best practices for eco-friendly farming.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-6 max-w-3xl mx-auto text-left">
          <div className="mb-4 p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">How does CropX work?</h3>
            <p className="mt-2 text-gray-600">CropX collects data from sensors and provides AI-driven recommendations.</p>
          </div>
          <div className="mb-4 p-4 bg-white shadow-lg rounded-lg">
            <h3 className="text-xl font-semibold">Is it available worldwide?</h3>
            <p className="mt-2 text-gray-600">Yes! CropX operates in 50+ countries.</p>
          </div>
        </div>
      </section>
  </div>
  )
}
