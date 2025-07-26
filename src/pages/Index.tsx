import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Target, 
  Clock, 
  Sparkles, 
  Upload, 
  Download,
  BarChart3,
  PlayCircle,
  Shield,
  Crown
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const stats = [
    { label: "Videos Processed", value: "1,284", icon: PlayCircle, color: "text-primary" },
    { label: "Highlights Created", value: "5,672", icon: Target, color: "text-accent" },
    { label: "Processing Time Saved", value: "847h", icon: Clock, color: "text-success" },
    { label: "Happy Gamers", value: "234", icon: Crown, color: "text-warning" },
  ];

  const features = [
    {
      icon: Target,
      title: "Smart Kill Detection",
      description: "AI automatically identifies epic moments when you eliminate key enemies",
      color: "text-destructive"
    },
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Get your highlights in minutes with our optimized processing pipeline",
      color: "text-primary"
    },
    {
      icon: Sparkles,
      title: "Social Media Ready",
      description: "Perfectly formatted for YouTube Shorts and Instagram Reels",
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "100% Free & Open Source",
      description: "No subscriptions, no hidden costs. Community-driven development",
      color: "text-success"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center space-x-2 mb-6">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              AI-Powered
            </Badge>
            <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
              Open Source
            </Badge>
            <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
              100% Free
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Turn Epic Gameplay
            <br />
            Into Viral Highlights
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AI-powered tool that automatically converts your Mobile Legends gameplay 
            into engaging YouTube Shorts and Instagram Reels. Focus on kills, epic moments, 
            and everything that makes you legendary.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gaming" size="lg" asChild className="text-lg px-8 py-3">
              <Link to="/upload">
                <Upload className="mr-2 w-5 h-5" />
                Start Creating Highlights
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              <PlayCircle className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="bg-gradient-dark border-border/50 text-center animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <Icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              Why Choose ML Highlights?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built by gamers, for gamers. Our AI understands what makes Mobile Legends moments epic.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-gradient-dark border-border/50 hover:shadow-accent/20 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 150}ms` }}>
                  <CardHeader className="text-center pb-2">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-accent flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-primary border-primary/20 max-w-4xl mx-auto text-center">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold mb-4 text-primary-foreground">
              Ready to Create Epic Highlights?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands of Mobile Legends players who are already creating viral content 
              with our AI-powered highlight extraction tool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild className="text-lg px-8 py-3">
                <Link to="/upload">
                  <Upload className="mr-2 w-5 h-5" />
                  Upload Your First Video
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                <BarChart3 className="mr-2 w-5 h-5" />
                View Sample Highlights
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Index;
