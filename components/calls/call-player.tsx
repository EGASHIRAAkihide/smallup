"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { FastForward, Pause, Play, Rewind, Volume2 } from "lucide-react"

interface CallPlayerProps {
  id: string
}

export function CallPlayer({ id }: CallPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(80)

  // Mock data - in a real app, this would come from an API
  const callDuration = 1455 // 24:15 in seconds

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (value: number[]) => {
    setCurrentTime(value[0])
  }

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0])
  }

  const handleRewind = () => {
    setCurrentTime(Math.max(0, currentTime - 10))
  }

  const handleFastForward = () => {
    setCurrentTime(Math.min(callDuration, currentTime + 10))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Call Recording</CardTitle>
        <CardDescription>Acme Corp - Tanaka Hiroshi - Mar 15, 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div className="aspect-video rounded-md bg-muted flex items-center justify-center">
            <div className="text-center">
              <p className="text-lg font-medium">Audio Waveform Visualization</p>
              <p className="text-sm text-muted-foreground">(Audio visualization would appear here)</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">{formatTime(currentTime)}</span>
              <span className="text-sm">{formatTime(callDuration)}</span>
            </div>
            <Slider value={[currentTime]} max={callDuration} step={1} onValueChange={handleSeek} className="w-full" />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={handleRewind}>
                <Rewind className="h-4 w-4" />
              </Button>
              <Button variant="default" size="icon" className="h-12 w-12 rounded-full" onClick={handlePlayPause}>
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
              </Button>
              <Button variant="outline" size="icon" onClick={handleFastForward}>
                <FastForward className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Volume2 className="h-4 w-4 text-muted-foreground" />
              <Slider value={[volume]} max={100} step={1} onValueChange={handleVolumeChange} className="w-24" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

