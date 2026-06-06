import { TrackItem } from "../TaskItem/TrackItem.tsx"
import { type Tracks } from "../../../BLL/useTracks.ts"

type TrackListProps = {
  tracks: Tracks[]
}

export function TrackList({tracks}: TrackListProps) {
  return (
    <ul>
      {tracks.map((track) => (
        <TrackItem key={track.id} item={track} />
      ))}
    </ul>
  )
}