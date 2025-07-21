import React from 'react';
import { Heart, Calendar, Camera, Star } from 'lucide-react';

function App() {
  // Replace these placeholder URLs with your actual photos
  const photos = [
    'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    'https://images.pexels.com/photos/1045541/pexels-photo-1045541.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    'https://images.pexels.com/photos/1024994/pexels-photo-1024994.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    'https://images.pexels.com/photos/1024995/pexels-photo-1024995.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    'https://images.pexels.com/photos/1024996/pexels-photo-1024996.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    'https://images.pexels.com/photos/1024997/pexels-photo-1024997.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 to-purple-300/20 backdrop-blur-sm"></div>
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Heart className="w-16 h-16 text-rose-500 fill-current animate-pulse" />
                <Star className="w-6 h-6 text-yellow-400 fill-current absolute -top-2 -right-2 animate-spin" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6">
              What Began in Tuition Became Us
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
              Celebrating another year of beautiful memories, endless laughter, and infinite love
            </p>
            
            <div className="flex items-center justify-center gap-2 text-rose-600 font-semibold text-lg">
              <Calendar className="w-5 h-5" />
              <span>Happy Anniversary, My Love</span>
              <Calendar className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div className="px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-8 h-8 text-pink-600" />
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
              Our Precious Moments
            </h2>
            <Camera className="w-8 h-8 text-pink-600" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Every picture tells a story of our journey together
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="aspect-square relative">
                <img
                  src={photo}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Footer Message */}
      <div className="bg-gradient-to-r from-rose-500 to-pink-600 px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Heart key={i} className="w-6 h-6 text-white fill-current animate-pulse" style={{animationDelay: `${i * 200}ms`}} />
              ))}
            </div>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Forever and Always
          </h3>
          <p className="text-lg text-rose-100 leading-relaxed">
            Here's to many more years of adventures, dreams, and endless love. 
            You make every day brighter and every moment more beautiful.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;