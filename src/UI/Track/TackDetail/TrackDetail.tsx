import { type Tracks } from "../../../BLL/useTracks"

type TrackDetailProps = {
  track: Tracks | undefined
}
export function TrackDetail({track}: TrackDetailProps) {
  if (!track) {
    return <div>No track</div>
  }
 
  return (
    <div>
      <h3>{track.title}</h3> 
      <p>id: {track.id}</p>
    </div>
  )
}