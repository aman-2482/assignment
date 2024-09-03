import React, { useState } from 'react';
import './App.css';

const tabs = [
  {
    name: 'About Me',
    content:
      'Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4-year-old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9–10 AM. This is a snippet of a biography or professional summary.',
  },
  {
    name: 'Experiences',
    content:
      'Here are some of my experiences in the field over the years: - Salesforce Rep for 3 years. - Worked with top clients in various sectors. - Specialized in CRM solutions and customer engagement strategies.',
  },
  {
    name: 'Recommended',
    content:
      'These are some recommendations from my colleagues and clients over the years: - Dave is a pleasure to work with, always going above and beyond for his clients. - His expertise in CRM is unmatched. - I highly recommend Dave for any challenging roles in sales.',
  },
];

function App() {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const [images, setImages] = useState([
    '/images/sample1.jpg',
    '/images/sample2.jpg',
    '/images/sample3.jpg',
  ]);

  const handleImageUpload = (event) => {
    const file = URL.createObjectURL(event.target.files[0]);
    setImages([...images, file]);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Container (Blank for Desktop, Hidden on Mobile) */}
      <div className="hidden lg:block lg:w-1/2 bg-gray-900 p-6">
        <div className="w-full h-full bg-gray-700 border-2 border-gray-300 rounded-lg"></div>
      </div>

      {/* Right Container (Full Screen on Mobile, Half Screen on Desktop) */}
      <div className="w-full lg:w-1/2 bg-gray-900 text-white p-6 flex flex-col space-y-6">
        {/* Tabs Section */}
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-4">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-20">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={`py-2 px-4 rounded-lg text-sm transition duration-300 ${
                  activeTab === tab.name
                    ? 'bg-black text-white'
                    : 'bg-gray-700 text-gray-400'
                }`}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 bg-gray-800 p-4 rounded-lg shadow-lg">
          <div className="text-gray-300 overflow-hidden">
            <div className="h-48 overflow-y-auto p-2">
              <p className="animate-fadeIn">{tabs.find((tab) => tab.name === activeTab).content}</p>
            </div>
          </div>
        </div>

        {/* Lower Section - Gallery */}
        <div className="flex-1 bg-gray-800 p-4 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <button className="text-xl font-semibold bg-black py-2 px-4 rounded-lg">
              Gallery
            </button>
            <label className="bg-black py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-600 transition duration-300">
              + Add Image
              <input type="file" className="hidden" onChange={handleImageUpload} />
            </label>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Gallery ${index}`}
                className="rounded-lg transform transition duration-300 hover:scale-105"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
