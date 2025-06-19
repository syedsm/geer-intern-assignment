'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Pause, Volume2, Maximize, Gem, Sparkles } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Crafting Excellence',
    description: 'Watch our master craftsmen create stunning jewelry pieces',
    thumbnail: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '2:45',
    category: 'Behind the Scenes'
  },
  {
    id: 2,
    title: 'Diamond Selection Process',
    description: 'Learn how we select the finest diamonds for our collections',
    thumbnail: 'https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '3:20',
    category: 'Educational'
  },
  {
    id: 3,
    title: 'Bridal Collection Showcase',
    description: 'Discover our romantic bridal jewelry collection',
    thumbnail: 'https://images.pexels.com/photos/1454172/pexels-photo-1454172.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '4:15',
    category: 'Collection'
  },
  {
    id: 4,
    title: 'Celebrity Red Carpet Moments',
    description: 'See our jewelry on the red carpet',
    thumbnail: 'https://images.pexels.com/photos/1454173/pexels-photo-1454173.jpeg?auto=compress&cs=tinysrgb&w=600',
    duration: '1:55',
    category: 'Celebrity'
  }
];

export function JewelryVideoSection() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-purple-100 text-purple-800 mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            Video Gallery
          </Badge>
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience Our Jewelry Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Immerse yourself in the world of luxury jewelry through our exclusive video content
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden bg-black">
              <div className="relative aspect-video">
                <img
                  src={selectedVideo.thumbnail}
                  alt={selectedVideo.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Button
                    size="lg"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border-white/30 w-20 h-20 rounded-full"
                  >
                    {isPlaying ? (
                      <Pause className="h-8 w-8" />
                    ) : (
                      <Play className="h-8 w-8 ml-1" />
                    )}
                  </Button>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-black/50 text-white">
                      {selectedVideo.duration}
                    </Badge>
                    <Badge variant="secondary" className="bg-purple-500/80 text-white">
                      {selectedVideo.category}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                      <Volume2 className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                      <Maximize className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 bg-gray-900 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
                <p className="text-gray-300">{selectedVideo.description}</p>
              </CardContent>
            </Card>
          </div>

          {/* Video Playlist */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Gem className="h-5 w-5 mr-2 text-purple-400" />
              Video Collection
            </h3>
            
            {videos.map((video) => (
              <Card
                key={video.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedVideo.id === video.id
                    ? 'ring-2 ring-purple-500 bg-purple-50'
                    : 'hover:bg-gray-50'
                }`}
                onClick={() => setSelectedVideo(video)}
              >
                <CardContent className="p-4">
                  <div className="flex space-x-3">
                    <div className="relative flex-shrink-0">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-20 h-14 object-cover rounded"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded">
                        <Play className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm line-clamp-2 mb-1">
                        {video.title}
                      </h4>
                      <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                        {video.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {video.category}
                        </Badge>
                        <span className="text-xs text-gray-500">{video.duration}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white px-8 py-4">
            <Play className="h-5 w-5 mr-2" />
            Watch All Videos
          </Button>
        </div>
      </div>
    </section>
  );
}