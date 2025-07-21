import React from 'react';
import { Heart, Calendar, Camera, Star, X, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

function App() {
  const [selectedPhoto, setSelectedPhoto] = React.useState<number | null>(null);
  const [showCaption, setShowCaption] = React.useState<number | null>(null);

  // Using your local photos from the public folder
  const photos = [
    {
      src: '/1.jpeg',
      caption: 'Our First Adventure Together',
      loveNote: 'This was the moment I knew you were special. Your smile lit up the entire room and my heart. 💕'
    },
    {
      src: '/2.jpeg',
      caption: 'Perfect Day, Perfect You',
      loveNote: 'Every moment with you feels like a fairytale. You make ordinary days extraordinary just by being there. ✨'
    },
    {
      src: '/3.jpeg',
      caption: 'Laughter and Love',
      loveNote: 'Your laugh is my favorite sound in the world. It fills my heart with so much joy and warmth. 🌟'
    },
    {
      src: '/4.jpeg',
      caption: 'Beautiful Memories',
      loveNote: 'In this moment, I realized how lucky I am to have you by my side. You are my everything. 💖'
    },
    {
      src: '/5.jpeg',
      caption: 'Together Forever',
      loveNote: 'With you, I have found my home, my peace, and my greatest love. Thank you for being you. 🏠'
    },
    {
      src: '/6.jpeg',
      caption: 'Our Love Story Continues',
      loveNote: 'Every day with you is a new chapter in our beautiful love story. Here\'s to many more pages together. 📖'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedPhoto(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto(selectedPhoto === 0 ? photos.length - 1 : selectedPhoto - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextPhoto();
    if (e.key === 'ArrowLeft') prevPhoto();
  };

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
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openLightbox(index)}
              onMouseEnter={() => setShowCaption(index)}
              onMouseLeave={() => setShowCaption(null)}
            >
              <div className="aspect-square relative">
                <img
                  src={photo.src}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Love Note Icon */}
                <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                
                {/* Heart Icon */}
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Heart className="w-6 h-6 fill-current" />
                </div>
                
                {/* Photo Caption */}
                <div className={`absolute bottom-4 left-4 right-4 text-white transition-all duration-300 ${
                  showCaption === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <p className="text-sm font-medium bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-rose-300 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          
          {/* Navigation Buttons */}
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-rose-300 transition-colors z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-rose-300 transition-colors z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          
          {/* Main Content */}
          <div 
            className="max-w-4xl max-h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative mb-6">
              <img
                src={photos[selectedPhoto].src}
                alt={photos[selectedPhoto].caption}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
            
            {/* Caption and Love Note */}
            <div className="text-center text-white max-w-2xl">
              <h3 className="text-2xl font-bold mb-4 text-rose-200">
                {photos[selectedPhoto].caption}
              </h3>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-3">
                  <Heart className="w-6 h-6 text-rose-400 fill-current mr-2" />
                  <span className="text-rose-200 font-medium">Love Note</span>
                  <Heart className="w-6 h-6 text-rose-400 fill-current ml-2" />
                </div>
                <p className="text-lg leading-relaxed italic">
                  {photos[selectedPhoto].loveNote}
                </p>
              </div>
              
              <div className="mt-4 text-sm text-gray-300">
                Photo {selectedPhoto + 1} of {photos.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Beautiful Quote Section */}
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-3xl shadow-xl border border-pink-200/50"></div>
            <div className="relative px-8 py-12 sm:px-12 sm:py-16 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full mb-4">
                  <Heart className="w-8 h-8 text-rose-500 fill-current" />
                </div>
              </div>
              
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed mb-8 italic">
                "In all the world, there is no heart for me like yours. 
                In all the world, there is no love for you like mine."
              </blockquote>
              
              <div className="flex items-center justify-center gap-3 text-gray-600">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
                <span className="text-sm font-medium tracking-wider uppercase">Maya Angelou</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-rose-300 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-pink-300 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>
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