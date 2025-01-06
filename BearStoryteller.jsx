import React, { useState, useEffect } from 'react';
import { Moon, Sun, Star, CloudRain, Heart, Music, Cookie } from 'lucide-react';

const BearStoryteller = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showSceneItems, setShowSceneItems] = useState([]);

  const story = [
    {
      text: "Hi there! I'm Barry the Bear, and today I'm going to tell you about my most magical forest adventure!",
      items: ['greeting'],
      background: 'forest-day'
    },
    {
      text: "It all started one beautiful morning when I was having my favorite breakfast - honey pancakes with blueberries!",
      items: ['pancakes', 'honey'],
      background: 'home-morning'
    },
    {
      text: "Suddenly, I heard the most beautiful singing coming from deep in the forest. It sounded like a thousand tiny bells!",
      items: ['music-notes'],
      background: 'forest-path'
    },
    {
      text: "I followed the magical sound through the tall trees. The birds seemed to be dancing to the melody!",
      items: ['birds', 'music-notes'],
      background: 'forest-dense'
    },
    {
      text: "As I walked deeper into the forest, I found a sparkling stream where rainbow-colored fish were jumping!",
      items: ['fish', 'sparkles'],
      background: 'stream'
    },
    {
      text: "But what really caught my eye was a tiny door at the base of an old oak tree, glowing with a soft blue light.",
      items: ['door', 'glow'],
      background: 'magical-tree'
    },
    {
      text: "When I knocked on the door (very gently, because bear paws can be quite strong), guess who answered?",
      items: ['knock', 'question'],
      background: 'door-close'
    },
    {
      text: "A family of musical mice! They were playing tiny instruments and needed help preparing for the forest's annual concert!",
      items: ['mice', 'instruments'],
      background: 'cozy-home'
    },
    {
      text: "They asked if I could help carry their instruments to the grand meadow. Of course, I said yes!",
      items: ['helper', 'meadow'],
      background: 'path-to-meadow'
    },
    {
      text: "Along the way, we met other forest friends: dancing rabbits, singing birds, and even a poetry-writing fox!",
      items: ['forest-friends', 'notes'],
      background: 'forest-gathering'
    },
    {
      text: "As the sun began to set, fireflies came out to be our spotlights, and the concert was absolutely magical!",
      items: ['fireflies', 'concert'],
      background: 'evening-show'
    },
    {
      text: "I played the big bass drum (very carefully!), and everyone danced until the stars came out.",
      items: ['drum', 'stars'],
      background: 'night-party'
    },
    {
      text: "The mice thanked me with a special gift - a tiny golden honey dipper that magically never runs out of honey!",
      items: ['gift', 'honey-magic'],
      background: 'gift-giving'
    },
    {
      text: "Now, every full moon, I join my musical mice friends for a magical forest concert. Sometimes, if you listen carefully at night...",
      items: ['moon', 'music-final'],
      background: 'moonlight-forest'
    },
    {
      text: "You might just hear our wonderful forest orchestra! The End! Would you like to hear another story?",
      items: ['heart', 'restart'],
      background: 'forest-end'
    }
  ];

  const backgrounds = {
    'forest-day': 'bg-gradient-to-b from-blue-200 to-green-200',
    'home-morning': 'bg-gradient-to-b from-yellow-100 to-orange-100',
    'forest-path': 'bg-gradient-to-b from-green-200 to-green-300',
    'forest-dense': 'bg-gradient-to-b from-green-300 to-green-400',
    'stream': 'bg-gradient-to-b from-blue-200 to-blue-300',
    'magical-tree': 'bg-gradient-to-b from-purple-200 to-blue-200',
    'door-close': 'bg-gradient-to-b from-amber-100 to-amber-200',
    'cozy-home': 'bg-gradient-to-b from-yellow-100 to-red-100',
    'path-to-meadow': 'bg-gradient-to-b from-green-100 to-yellow-100',
    'forest-gathering': 'bg-gradient-to-b from-green-200 to-blue-100',
    'evening-show': 'bg-gradient-to-b from-orange-200 to-purple-200',
    'night-party': 'bg-gradient-to-b from-blue-900 to-purple-900',
    'gift-giving': 'bg-gradient-to-b from-yellow-200 to-red-200',
    'moonlight-forest': 'bg-gradient-to-b from-blue-800 to-purple-800',
    'forest-end': 'bg-gradient-to-b from-purple-300 to-pink-200'
  };

  const renderSceneItem = (item) => {
    const iconProps = {
      size: 32,
      className: `transition-all duration-500 animate-bounce ${showAnimation ? 'opacity-100' : 'opacity-0'}`
    };

    switch(item) {
      case 'greeting': return <Heart {...iconProps} className="text-red-400" />;
      case 'pancakes': return <Cookie {...iconProps} className="text-amber-400" />;
      case 'honey': return <Sun {...iconProps} className="text-yellow-400" />;
      case 'music-notes': return <Music {...iconProps} className="text-purple-400" />;
      case 'birds': return <Star {...iconProps} className="text-red-400" />;
      case 'magic': return <Star {...iconProps} className="text-yellow-300 animate-spin" />;
      case 'night': return <Moon {...iconProps} className="text-gray-200" />;
      case 'rain': return <CloudRain {...iconProps} className="text-blue-400" />;
      case 'love': return <Heart {...iconProps} className="text-red-400" />;
      default: return null;
    }
  };

  const handleNext = () => {
    if (currentPage < story.length - 1) {
      setShowAnimation(false);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setShowAnimation(true);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setShowAnimation(false);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setShowAnimation(true);
      }, 300);
    }
  };

  const handleRestart = () => {
    setShowAnimation(false);
    setTimeout(() => {
      setCurrentPage(0);
      setShowAnimation(true);
    }, 300);
  };

  useEffect(() => {
    setShowAnimation(true);
    return () => setShowAnimation(false);
  }, []);

  return (
    <div className={`min-h-screen p-8 transition-all duration-700 ${backgrounds[story[currentPage].background]}`}>
      <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur rounded-lg shadow-xl p-8">
        {/* Bear Character */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Bear Body */}
            <div className={`w-48 h-48 bg-amber-700 rounded-full relative transition-transform duration-300 ${showAnimation ? 'scale-100' : 'scale-95'}`}>
              {/* Bear Face */}
              <div className="absolute top-6 left-6 w-36 h-36 bg-amber-600 rounded-full">
                {/* Eyes */}
                <div className="absolute top-12 left-6 w-6 h-6 bg-black rounded-full"></div>
                <div className="absolute top-12 right-6 w-6 h-6 bg-black rounded-full"></div>
                {/* Nose */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-8 h-6 bg-black rounded-full"></div>
              </div>
              {/* Ears */}
              <div className="absolute -top-4 left-4 w-12 h-12 bg-amber-700 rounded-full"></div>
              <div className="absolute -top-4 right-4 w-12 h-12 bg-amber-700 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Scene Items */}
        <div className="flex justify-center gap-4 mb-6">
          {story[currentPage].items.map((item, index) => (
            <div key={index} className="transition-all duration-500">
              {renderSceneItem(item)}
            </div>
          ))}
        </div>

        {/* Story Text */}
        <div className="min-h-32 text-center text-xl mb-8 font-medium p-4 bg-white/50 rounded-lg">
          {story[currentPage].text}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className="px-6 py-2 bg-amber-600 text-white rounded-full disabled:opacity-50 hover:bg-amber-700 transition-colors"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === story.length - 1}
            className="px-6 py-2 bg-amber-600 text-white rounded-full disabled:opacity-50 hover:bg-amber-700 transition-colors"
          >
            Next
          </button>
          {currentPage === story.length - 1 && (
            <button
              onClick={handleRestart}
              className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
            >
              Read Again!
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BearStoryteller;