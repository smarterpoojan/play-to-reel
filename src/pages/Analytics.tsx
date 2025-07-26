import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Heart, 
  Share2, 
  Clock,
  Target,
  Zap,
  Trophy,
  Users
} from "lucide-react";

export const Analytics = () => {
  const overviewStats = [
    { label: "Total Views", value: "24.8K", change: "+12%", icon: Eye, color: "text-primary" },
    { label: "Total Likes", value: "1.2K", change: "+8%", icon: Heart, color: "text-destructive" },
    { label: "Shares", value: "342", change: "+15%", icon: Share2, color: "text-accent" },
    { label: "Watch Time", value: "18.5h", change: "+22%", icon: Clock, color: "text-success" },
  ];

  const topHighlights = [
    { title: "Epic Sean Pentakill", views: 4200, likes: 89, duration: "0:45", engagement: 92 },
    { title: "Lord Steal Victory", views: 3800, likes: 156, duration: "0:38", engagement: 88 },
    { title: "Team Wipe Comeback", views: 3200, likes: 245, duration: "1:05", engagement: 95 },
    { title: "Solo Queue Domination", views: 2900, likes: 134, duration: "0:41", engagement: 85 },
    { title: "Sean Triple Kill", views: 2400, likes: 98, duration: "0:52", engagement: 78 },
  ];

  const contentTypes = [
    { type: "Kill Highlights", count: 24, percentage: 45, color: "bg-destructive" },
    { type: "Team Fights", count: 18, percentage: 34, color: "bg-primary" },
    { type: "Epic Moments", count: 11, percentage: 21, color: "bg-accent" },
  ];

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
              Analytics Dashboard
            </h1>
            <p className="text-xl text-muted-foreground">
              Track your highlight performance and audience engagement
            </p>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {overviewStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="bg-gradient-dark border-border/50 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`w-5 h-5 ${stat.color}`} />
                      <Badge variant="secondary" className={stat.change.startsWith('+') ? 'bg-success/10 text-success border-success/20' : 'bg-destructive/10 text-destructive border-destructive/20'}>
                        {stat.change}
                      </Badge>
                    </div>
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Top Performing Highlights */}
            <Card className="bg-gradient-dark border-border/50 lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Trophy className="w-5 h-5 text-accent" />
                  <span>Top Performing Highlights</span>
                </CardTitle>
                <CardDescription>Your most engaging content this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {topHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-muted/20 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{highlight.title}</h4>
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{formatNumber(highlight.views)}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Heart className="w-3 h-3" />
                          <span>{highlight.likes}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{highlight.duration}</span>
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{highlight.engagement}%</div>
                      <div className="text-xs text-muted-foreground">engagement</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Content Distribution */}
            <Card className="bg-gradient-dark border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  <span>Content Types</span>
                </CardTitle>
                <CardDescription>Distribution of your highlights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contentTypes.map((content, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{content.type}</span>
                      <span className="text-muted-foreground">{content.count} clips</span>
                    </div>
                    <Progress value={content.percentage} className="h-2" />
                    <div className="text-xs text-muted-foreground">{content.percentage}% of total content</div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Performance Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gradient-dark border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <span>Performance Insights</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Best Performing Time</p>
                      <p className="text-xs text-muted-foreground">7-9 PM gets 40% more engagement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Optimal Duration</p>
                      <p className="text-xs text-muted-foreground">45-60 second clips perform best</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium">Top Keywords</p>
                      <p className="text-xs text-muted-foreground">"Sean", "Kill", "Epic" drive 60% more views</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-dark border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Audience Stats</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-muted/20 rounded-lg">
                    <div className="text-lg font-bold">68%</div>
                    <div className="text-xs text-muted-foreground">Returning Viewers</div>
                  </div>
                  <div className="text-center p-3 bg-muted/20 rounded-lg">
                    <div className="text-lg font-bold">2.4m</div>
                    <div className="text-xs text-muted-foreground">Avg. Watch Time</div>
                  </div>
                  <div className="text-center p-3 bg-muted/20 rounded-lg">
                    <div className="text-lg font-bold">85%</div>
                    <div className="text-xs text-muted-foreground">Mobile Views</div>
                  </div>
                  <div className="text-center p-3 bg-muted/20 rounded-lg">
                    <div className="text-lg font-bold">42%</div>
                    <div className="text-xs text-muted-foreground">Share Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;