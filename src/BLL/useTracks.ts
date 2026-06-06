import { useState } from "react"

export type Tracks = {
  id: number,
  title: string  
}

export function useTracks () {
    const [selectedTrackId, setSelectedTrackId] = useState(1)
    const [tracks] = useState<Tracks []> ([
    { id: 1, title: "Bruno Mars - Uptown Funk" },
    { id: 2, title: "Eminem - Lose Yourself" },
    { id: 3, title: "Rihanna - Diamonds" },
  ])

    function clickSetSelectedTrackId (): void {
         setSelectedTrackId(prev => prev + 1)
    }

    function selectedTrack (tracks: Tracks[], selectedTrackId: number): Tracks | undefined{
        return tracks.find((track) => track.id === selectedTrackId)
    }

  return {
    tracks,
    selectedTrackId,
    selectedTrack,
    clickSetSelectedTrackId
  }
}
