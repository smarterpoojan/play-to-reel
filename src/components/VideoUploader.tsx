import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileVideo, X, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

interface VideoFile {
  file: File;
  id: string;
  status: 'pending' | 'uploading' | 'uploaded' | 'error';
  progress: number;
}

export const VideoUploader = () => {
  const [videos, setVideos] = useState<VideoFile[]>([]);
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newVideos = acceptedFiles.map(file => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
      status: 'pending' as const,
      progress: 0,
    }));

    setVideos(prev => [...prev, ...newVideos]);

    // Simulate upload progress
    newVideos.forEach(video => {
      setVideos(prev => 
        prev.map(v => 
          v.id === video.id ? { ...v, status: 'uploading' } : v
        )
      );

      const interval = setInterval(() => {
        setVideos(prev => 
          prev.map(v => {
            if (v.id === video.id) {
              const newProgress = Math.min(v.progress + Math.random() * 15, 100);
              if (newProgress >= 100) {
                clearInterval(interval);
                toast({
                  title: "Upload Complete",
                  description: `${video.file.name} uploaded successfully`,
                });
                return { ...v, progress: 100, status: 'uploaded' };
              }
              return { ...v, progress: newProgress };
            }
            return v;
          })
        );
      }, 500);
    });
  }, [toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.avi', '.mov', '.mkv', '.webm']
    },
    multiple: true
  });

  const removeVideo = (id: string) => {
    setVideos(prev => prev.filter(v => v.id !== id));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-6">
      <Card className="border-dashed border-2 border-muted-foreground/25 hover:border-primary/50 transition-colors">
        <CardContent className="p-8">
          <div
            {...getRootProps()}
            className={`cursor-pointer text-center transition-all duration-200 ${
              isDragActive ? 'scale-105' : ''
            }`}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center space-y-4">
              <div className={`w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center ${
                isDragActive ? 'animate-pulse-glow' : ''
              }`}>
                <Upload className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  {isDragActive ? 'Drop your videos here' : 'Upload Mobile Legends gameplay videos'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  Drag and drop your gameplay videos or click to browse
                </p>
                <Button variant="gaming" size="lg">
                  Select Videos
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">
                Supports MP4, AVI, MOV, MKV, WebM files
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {videos.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Upload Queue</h3>
            <div className="space-y-4">
              {videos.map((video) => (
                <div key={video.id} className="flex items-center space-x-4 p-4 bg-muted/30 rounded-lg">
                  <div className="flex-shrink-0">
                    <FileVideo className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{video.file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatFileSize(video.file.size)}
                    </p>
                    {video.status === 'uploading' && (
                      <Progress value={video.progress} className="mt-2 h-1" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    {video.status === 'pending' && (
                      <div className="w-3 h-3 bg-warning rounded-full" />
                    )}
                    {video.status === 'uploading' && (
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    )}
                    {video.status === 'uploaded' && (
                      <div className="w-3 h-3 bg-success rounded-full" />
                    )}
                    {video.status === 'error' && (
                      <AlertCircle className="w-4 h-4 text-destructive" />
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeVideo(video.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};