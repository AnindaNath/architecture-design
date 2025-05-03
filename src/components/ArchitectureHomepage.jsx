import { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import House1 from '../assets/pic1.jpg';
import House2 from '../assets/pic2.jpg';
import House3 from '../assets/pic3.jpg';
import House4 from '../assets/pic4.jpg';
import pg from '../assets/background.jpg';
export default function ArchitectureHomepage() {
  return (
    <div className="w-full font-sans">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white">
        <div className="flex items-center">
          <span className="text-orange-400 font-bold">📐</span>
          <span className="ml-2 font-semibold">Plan Mark</span>
        </div>
        
        <div className="flex space-x-8">
          <a href="#" className="text-orange-400 border-b-2 border-orange-400">Home</a>
          <a href="#" className="text-gray-700 hover:text-orange-400">About</a>
          <a href="#" className="text-gray-700 hover:text-orange-400">Service</a>
          <a href="#" className="text-gray-700 hover:text-orange-400">Project</a>
          <a href="#" className="text-gray-700 hover:text-orange-400">Blog</a>
        </div>
        
        <button className="px-4 py-2 border border-gray-300 rounded">Contact Us</button>
      </nav>
        
            
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white min-h-[700px]">
      {/* Background House Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <img 
          src={pg} 
          alt="Background architectural house" 
          className="w-full h-full object-cover object-center opacity-30"
        />
      </div>

        <div className="flex flex-col md:flex-row items-center relative z-10">
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 p-8 md:p-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Architecture Design</h1>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Dream Buildings</h2>
            <p className="mb-8 text-gray-300">
              There are many variations of passages of Lorem Ipsum available, but the 
              majority have suffered alteration in some form, by injected humour, or
              randomised words which
            </p>
            <div className="flex items-center space-x-4">
              <button className="px-6 py-3 bg-orange-400 text-white rounded hover:bg-orange-500">
                Explore Now
              </button>
              <button className="flex items-center space-x-2 px-4 py-3 hover:text-orange-400">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-gray-800">
                  <Play size={16} />
                </div>
                <span>Watch Video</span>
              </button>
            </div>
          </div>
          
          {/* Right Image Content */}
          <div className="w-full flex justify-center items-center p-8">
            <div className="relative w-full max-w-2xl">
              {/* Orange background as right-side frame */}
              <div className="absolute top-[-10px] right-[-10px] w-[calc(50%+40px)] h-[calc(100%+20px)] bg-orange-300"></div>

              {/* House Image */}
              <img
                src={House3}
                alt="Modern architectural house"
                className="relative z-10 w-full object-cover rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      
      {/* Navigation Arrows */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button className="flex items-center justify-center w-10 h-10 bg-orange-400 text-white">
          <ChevronLeft size={20} />
        </button>
        <button className="flex items-center justify-center w-10 h-10 bg-gray-200 text-gray-800">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
      
      {/* About Us Section */}
      <section className="py-16 px-8 md:px-16">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Images */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 p-4">
            <div className="col-span-2 relative">
              <div className="absolute top-0 left-0 w-16 h-4 bg-orange-400"></div>
              <img 
                src={House1}
                alt="Modern house design" 
                className="w-full object-cover rounded"
              />
            </div>
            <div className="relative">
              <div className="absolute top-0 right-0 w-16 h-4 bg-orange-400"></div>
              <img 
                src={House2}
                alt="Traditional house" 
                className="w-full object-cover rounded"
              />
            </div>
            <div className="relative">
              <div className="absolute bottom-0 left-0 w-16 h-4 bg-orange-400"></div>
              <img 
                src={House4}
                alt="House with car" 
                className="w-full object-cover rounded"
              />
            </div>
          </div>
          
          {/* Right Content */}
          <div className="w-full md:w-1/2 p-8">
            <p className="text-orange-400 font-medium">About Us</p>
            <h2 className="text-3xl font-bold mt-2 mb-6">We're Experienced in This Field</h2>
            <p className="text-gray-600 mb-8">
              There are many variations of passages of Lorem Ipsum available, 
              but the majority have suffered alteration in some form, by injected 
              humour, or randomised words which
            </p>
            
            <div className="flex flex-wrap justify-between mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-400">13+</p>
                <p className="text-gray-600 text-sm">Year of experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-400">267+</p>
                <p className="text-gray-600 text-sm">Project completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-400">40+</p>
                <p className="text-gray-600 text-sm">Best partners</p>
              </div>
            </div>
            
            <button className="px-6 py-3 bg-orange-400 text-white rounded hover:bg-orange-500">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}