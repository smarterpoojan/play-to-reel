import { VideoUploader } from "@/components/VideoUploader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Zap, Target, Sparkles } from "lucide-react";

export const Upload = () => {
  const features = [
    {
      icon: Target,
      title: "Smart Kill Detection",
      description: "AI automatically identifies when you eliminate key enemies like 'Sean'"
    },
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Get your highlights in minutes, not hours"
    },
    {
      icon: Clock,
      title: "Perfect Timing",
      description: "30-60 second clips optimized for YouTube Shorts and Instagram Reels"
    },
    {
      icon: Sparkles,
      title: "Social Ready",
      description: "Vertical format, perfect resolution, ready to upload"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Upload Your Gameplay
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Transform your Mobile Legends gameplay into viral-ready highlights
            </p>
            <div className="flex justify-center space-x-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                AI-Powered
              </Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                100% Free
              </Badge>
              <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                Open Source
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="lg:col-span-2">
              <VideoUploader />
            </div>
            
            <div className="space-y-4">
              <Card className="bg-gradient-dark border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 text-accent" />
                    <span>Features</span>
                  </CardTitle>
                  <CardDescription>
                    What makes our tool special
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                          <Icon className="w-4 h-4 text-accent-foreground" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{feature.title}</h4>
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              <Card className="bg-gradient-dark border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">Processing Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <h4 className="font-medium mb-1">Best Results:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• 10-20 minute gameplay videos</li>
                      <li>• Clear audio for kill detection</li>
                      <li>• 1080p or higher resolution</li>
                      <li>• Multiple kills for more highlights</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;