import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Play, 
  Pause, 
  Eye, 
  Download, 
  Zap, 
  Clock, 
  Target,
  CheckCircle2,
  AlertCircle
} from "lucide-react";

interface ProcessingJob {
  id: string;
  filename: string;
  status: 'processing' | 'completed' | 'error';
  progress: number;
  stage: string;
  highlights: number;
  duration: string;
  thumbnail?: string;
}

export const Processing = () => {
  const [jobs, setJobs] = useState<ProcessingJob[]>([
    {
      id: '1',
      filename: 'ML_Epic_Game_2024.mp4',
      status: 'processing',
      progress: 67,
      stage: 'Detecting kill events',
      highlights: 3,
      duration: '15:32'
    },
    {
      id: '2',
      filename: 'Mobile_Legends_Ranked.mp4',
      status: 'completed',
      progress: 100,
      stage: 'Complete',
      highlights: 5,
      duration: '18:45'
    },
    {
      id: '3',
      filename: 'ML_Highlights_Match.mp4',
      status: 'processing',
      progress: 23,
      stage: 'Analyzing audio patterns',
      highlights: 1,
      duration: '12:15'
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setJobs(prev => prev.map(job => {
        if (job.status === 'processing' && job.progress < 100) {
          const newProgress = Math.min(job.progress + Math.random() * 5, 100);
          const stages = [
            'Analyzing video frames',
            'Detecting kill events',
            'Processing audio cues',
            'Ranking highlights',
            'Generating clips',
            'Formatting for social media'
          ];
          
          let newStage = job.stage;
          if (newProgress > 80) newStage = 'Formatting for social media';
          else if (newProgress > 60) newStage = 'Generating clips';
          else if (newProgress > 40) newStage = 'Ranking highlights';
          else if (newProgress > 20) newStage = 'Processing audio cues';
          
          return {
            ...job,
            progress: newProgress,
            stage: newProgress >= 100 ? 'Complete' : newStage,
            status: newProgress >= 100 ? 'completed' : 'processing'
          };
        }
        return job;
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'processing':
        return <Zap className="w-4 h-4 text-primary animate-pulse" />;
      case 'completed':
        return <CheckCircle2 className="w-4 h-4 text-success" />;
      case 'error':
        return <AlertCircle className="w-4 h-4 text-destructive" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'processing':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'completed':
        return 'bg-success/10 text-success border-success/20';
      case 'error':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      default:
        return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Processing Queue
            </h1>
            <p className="text-xl text-muted-foreground">
              AI is analyzing your gameplay for epic moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <Card key={job.id} className="bg-gradient-dark border-border/50 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg truncate flex-1 mr-2">
                      {job.filename}
                    </CardTitle>
                    {getStatusIcon(job.status)}
                  </div>
                  <CardDescription className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{job.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Target className="w-3 h-3" />
                      <span>{job.highlights} highlights</span>
                    </span>
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{job.stage}</span>
                      <span className="font-medium">{Math.round(job.progress)}%</span>
                    </div>
                    <Progress value={job.progress} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className={getStatusColor(job.status)}>
                      {job.status === 'processing' ? 'Processing' : 
                       job.status === 'completed' ? 'Ready' : 'Error'}
                    </Badge>
                    
                    <div className="flex items-center space-x-2">
                      {job.status === 'completed' && (
                        <>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="gaming" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                      {job.status === 'processing' && (
                        <Button variant="ghost" size="sm">
                          <Pause className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>

                  {job.status === 'completed' && (
                    <div className="pt-2 border-t border-border/50">
                      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                        <div>Format: 1080x1920</div>
                        <div>Duration: 30-60s</div>
                        <div>Quality: High</div>
                        <div>Ready for: Social</div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {jobs.length === 0 && (
            <Card className="bg-gradient-dark border-border/50 text-center py-12">
              <CardContent>
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-muted/20 rounded-full flex items-center justify-center">
                    <Zap className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">No videos processing</h3>
                    <p className="text-muted-foreground">Upload some gameplay videos to get started!</p>
                  </div>
                  <Button variant="gaming" asChild>
                    <a href="/upload">Upload Videos</a>
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

export default Processing;