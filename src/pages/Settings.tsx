import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Settings as SettingsIcon, 
  Zap, 
  Target, 
  Video, 
  Volume2,
  Download,
  Share2,
  Bell,
  Shield,
  Palette
} from "lucide-react";

export const Settings = () => {
  const [killSensitivity, setKillSensitivity] = useState([75]);
  const [minClipDuration, setMinClipDuration] = useState([30]);
  const [maxClipDuration, setMaxClipDuration] = useState([60]);
  const [audioSensitivity, setAudioSensitivity] = useState([80]);

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Settings
            </h1>
            <p className="text-xl text-muted-foreground">
              Configure your highlight extraction preferences
            </p>
          </div>

          <Tabs defaultValue="detection" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-card border border-border">
              <TabsTrigger value="detection" className="flex items-center space-x-2">
                <Target className="w-4 h-4" />
                <span className="hidden sm:inline">Detection</span>
              </TabsTrigger>
              <TabsTrigger value="export" className="flex items-center space-x-2">
                <Video className="w-4 h-4" />
                <span className="hidden sm:inline">Export</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center space-x-2">
                <Bell className="w-4 h-4" />
                <span className="hidden sm:inline">Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="general" className="flex items-center space-x-2">
                <SettingsIcon className="w-4 h-4" />
                <span className="hidden sm:inline">General</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="detection" className="space-y-6">
              <Card className="bg-gradient-dark border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-accent" />
                    <span>Kill Detection Settings</span>
                  </CardTitle>
                  <CardDescription>
                    Configure how the AI detects epic moments in your gameplay
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="kill-sensitivity">Kill Detection Sensitivity</Label>
                    <div className="space-y-2">
                      <Slider
                        id="kill-sensitivity"
                        value={killSensitivity}
                        onValueChange={setKillSensitivity}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Conservative</span>
                        <span>{killSensitivity[0]}%</span>
                        <span>Aggressive</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Higher values detect more potential kills but may include false positives
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="audio-sensitivity">Audio Cue Sensitivity</Label>
                    <div className="space-y-2">
                      <Slider
                        id="audio-sensitivity"
                        value={audioSensitivity}
                        onValueChange={setAudioSensitivity}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Low</span>
                        <span>{audioSensitivity[0]}%</span>
                        <span>High</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="target-enemy">Target Enemy Name</Label>
                      <Input id="target-enemy" placeholder="e.g., Sean" defaultValue="Sean" />
                      <p className="text-xs text-muted-foreground">
                        AI will prioritize kills involving this player
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="detection-mode">Detection Mode</Label>
                      <Select defaultValue="balanced">
                        <SelectTrigger>
                          <SelectValue placeholder="Select mode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="conservative">Conservative</SelectItem>
                          <SelectItem value="balanced">Balanced</SelectItem>
                          <SelectItem value="aggressive">Aggressive</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="export" className="space-y-6">
              <Card className="bg-gradient-dark border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Video className="w-5 h-5 text-primary" />
                    <span>Export Settings</span>
                  </CardTitle>
                  <CardDescription>
                    Configure output format and quality settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label>Clip Duration Range</Label>
                      <div className="space-y-3">
                        <div>
                          <Label htmlFor="min-duration" className="text-sm">Minimum (seconds)</Label>
                          <Slider
                            id="min-duration"
                            value={minClipDuration}
                            onValueChange={setMinClipDuration}
                            min={15}
                            max={45}
                            step={5}
                            className="w-full mt-2"
                          />
                          <div className="text-center text-sm text-muted-foreground mt-1">
                            {minClipDuration[0]}s
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="max-duration" className="text-sm">Maximum (seconds)</Label>
                          <Slider
                            id="max-duration"
                            value={maxClipDuration}
                            onValueChange={setMaxClipDuration}
                            min={45}
                            max={120}
                            step={5}
                            className="w-full mt-2"
                          />
                          <div className="text-center text-sm text-muted-foreground mt-1">
                            {maxClipDuration[0]}s
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="output-quality">Output Quality</Label>
                        <Select defaultValue="1080p">
                          <SelectTrigger>
                            <SelectValue placeholder="Select quality" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="720p">720p (HD)</SelectItem>
                            <SelectItem value="1080p">1080p (Full HD)</SelectItem>
                            <SelectItem value="1440p">1440p (2K)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="output-format">Output Format</Label>
                        <Select defaultValue="mp4">
                          <SelectTrigger>
                            <SelectValue placeholder="Select format" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mp4">MP4 (Recommended)</SelectItem>
                            <SelectItem value="webm">WebM</SelectItem>
                            <SelectItem value="mov">MOV</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="aspect-ratio">Aspect Ratio</Label>
                        <Select defaultValue="9:16">
                          <SelectTrigger>
                            <SelectValue placeholder="Select ratio" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="16:9">16:9 (Landscape)</SelectItem>
                            <SelectItem value="9:16">9:16 (Vertical)</SelectItem>
                            <SelectItem value="1:1">1:1 (Square)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                      <div>
                        <Label htmlFor="auto-watermark" className="text-sm font-medium">Add Watermark</Label>
                        <p className="text-xs text-muted-foreground">Include your channel branding</p>
                      </div>
                      <Switch id="auto-watermark" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                      <div>
                        <Label htmlFor="auto-captions" className="text-sm font-medium">Auto Captions</Label>
                        <p className="text-xs text-muted-foreground">Generate automatic subtitles</p>
                      </div>
                      <Switch id="auto-captions" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card className="bg-gradient-dark border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Bell className="w-5 h-5 text-accent" />
                    <span>Notification Preferences</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { id: "processing-complete", label: "Processing Complete", description: "When your highlights are ready" },
                    { id: "new-highlights", label: "New Highlights Detected", description: "When AI finds epic moments" },
                    { id: "system-updates", label: "System Updates", description: "New features and improvements" },
                    { id: "performance-reports", label: "Performance Reports", description: "Weekly analytics summaries" },
                  ].map((notification) => (
                    <div key={notification.id} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                      <div>
                        <Label htmlFor={notification.id} className="text-sm font-medium">
                          {notification.label}
                        </Label>
                        <p className="text-xs text-muted-foreground">{notification.description}</p>
                      </div>
                      <Switch id={notification.id} defaultChecked />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="general" className="space-y-6">
              <Card className="bg-gradient-dark border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <SettingsIcon className="w-5 h-5 text-primary" />
                    <span>General Settings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="storage-location">Storage Location</Label>
                      <Input id="storage-location" defaultValue="/Downloads/ML-Highlights" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="max-concurrent">Max Concurrent Processing</Label>
                      <Select defaultValue="2">
                        <SelectTrigger>
                          <SelectValue placeholder="Select number" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 video</SelectItem>
                          <SelectItem value="2">2 videos</SelectItem>
                          <SelectItem value="3">3 videos</SelectItem>
                          <SelectItem value="4">4 videos</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { id: "auto-delete", label: "Auto-delete Source Files", description: "Remove original videos after processing" },
                      { id: "hardware-acceleration", label: "Hardware Acceleration", description: "Use GPU for faster processing" },
                      { id: "cloud-backup", label: "Cloud Backup", description: "Backup highlights to cloud storage" },
                      { id: "analytics-tracking", label: "Analytics Tracking", description: "Track performance metrics" },
                    ].map((setting) => (
                      <div key={setting.id} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                        <div>
                          <Label htmlFor={setting.id} className="text-sm font-medium">
                            {setting.label}
                          </Label>
                          <p className="text-xs text-muted-foreground">{setting.description}</p>
                        </div>
                        <Switch id={setting.id} />
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-medium">Reset All Settings</h4>
                        <p className="text-xs text-muted-foreground">
                          Restore default configuration
                        </p>
                      </div>
                      <Button variant="destructive" size="sm">
                        Reset
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card className="bg-gradient-primary border-primary/20 text-center">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Shield className="w-5 h-5 text-primary-foreground" />
                <h3 className="text-lg font-semibold text-primary-foreground">
                  Settings Saved Automatically
                </h3>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                All your preferences are saved automatically and applied to future processing jobs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;