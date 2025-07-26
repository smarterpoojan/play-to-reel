import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Download, 
  Play, 
  Share2, 
  Search, 
  Filter,
  Clock,
  Eye,
  Heart,
  MoreVertical,
  Calendar
} from "lucide-react";

interface Highlight {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  createdAt: string;
  views: number;
  likes: number;
  tags: string[];
  type: 'kill' | 'teamfight' | 'epic';
  quality: 'HD' | '4K';
}

export const Library = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const highlights: Highlight[] = [
    {
      id: '1',
      title: 'Epic Sean Elimination',
      thumbnail: '/api/placeholder/300/169',
      duration: '0:45',
      createdAt: '2024-01-20',
      views: 1250,
      likes: 89,
      tags: ['kill', 'sean', 'epic'],
      type: 'kill',
      quality: 'HD'
    },
    {
      id: '2',
      title: 'Pentakill Highlight',
      thumbnail: '/api/placeholder/300/169',
      duration: '1:12',
      createdAt: '2024-01-19',
      views: 2840,
      likes: 156,
      tags: ['pentakill', 'teamfight'],
      type: 'teamfight',
      quality: '4K'
    },
    {
      id: '3',
      title: 'Lord Steal Victory',
      thumbnail: '/api/placeholder/300/169',
      duration: '0:38',
      createdAt: '2024-01-18',
      views: 890,
      likes: 67,
      tags: ['lord', 'steal', 'victory'],
      type: 'epic',
      quality: 'HD'
    },
    {
      id: '4',
      title: 'Sean Triple Kill',
      thumbnail: '/api/placeholder/300/169',
      duration: '0:52',
      createdAt: '2024-01-17',
      views: 1560,
      likes: 98,
      tags: ['triple', 'sean', 'kill'],
      type: 'kill',
      quality: 'HD'
    },
    {
      id: '5',
      title: 'Team Wipe Comeback',
      thumbnail: '/api/placeholder/300/169',
      duration: '1:05',
      createdAt: '2024-01-16',
      views: 3200,
      likes: 245,
      tags: ['comeback', 'teamwipe'],
      type: 'teamfight',
      quality: '4K'
    },
    {
      id: '6',
      title: 'Solo Queue Domination',
      thumbnail: '/api/placeholder/300/169',
      duration: '0:41',
      createdAt: '2024-01-15',
      views: 1890,
      likes: 134,
      tags: ['solo', 'domination'],
      type: 'epic',
      quality: 'HD'
    }
  ];

  const filteredHighlights = highlights.filter(highlight => {
    const matchesSearch = highlight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         highlight.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = selectedFilter === 'all' || highlight.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'kill':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'teamfight':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'epic':
        return 'bg-accent/10 text-accent border-accent/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Highlight Library
            </h1>
            <p className="text-xl text-muted-foreground">
              Your epic Mobile Legends moments, ready to share
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search highlights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Button
                variant={selectedFilter === 'all' ? 'gaming' : 'ghost'}
                size="sm"
                onClick={() => setSelectedFilter('all')}
              >
                All
              </Button>
              <Button
                variant={selectedFilter === 'kill' ? 'gaming' : 'ghost'}
                size="sm"
                onClick={() => setSelectedFilter('kill')}
              >
                Kills
              </Button>
              <Button
                variant={selectedFilter === 'teamfight' ? 'gaming' : 'ghost'}
                size="sm"
                onClick={() => setSelectedFilter('teamfight')}
              >
                Team Fights
              </Button>
              <Button
                variant={selectedFilter === 'epic' ? 'gaming' : 'ghost'}
                size="sm"
                onClick={() => setSelectedFilter('epic')}
              >
                Epic Moments
              </Button>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredHighlights.map((highlight, index) => (
              <Card key={highlight.id} className="bg-gradient-dark border-border/50 overflow-hidden group hover:shadow-primary/20 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="relative">
                  <div className="aspect-video bg-muted/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-2 right-2 space-y-1">
                      <Badge variant="secondary" className="text-xs">
                        {highlight.quality}
                      </Badge>
                      <Badge variant="secondary" className={`text-xs ${getTypeColor(highlight.type)}`}>
                        {highlight.type}
                      </Badge>
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <Badge variant="secondary" className="text-xs bg-black/60 text-white border-none">
                        {highlight.duration}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Button variant="gaming" size="icon" className="rounded-full">
                        <Play className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2 text-sm">
                    {highlight.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-3 h-3" />
                      <span>{highlight.createdAt}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{formatNumber(highlight.views)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{formatNumber(highlight.likes)}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <MoreVertical className="w-3 h-3" />
                    </Button>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="gaming" size="sm" className="flex-1">
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredHighlights.length === 0 && (
            <Card className="bg-gradient-dark border-border/50 text-center py-12">
              <CardContent>
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center">
                    <Search className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">No highlights found</h3>
                    <p className="text-muted-foreground">
                      {searchTerm ? `No results for "${searchTerm}"` : 'No highlights in your library yet'}
                    </p>
                  </div>
                  <Button variant="gaming" asChild>
                    <a href="/upload">Create Highlights</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Library;