import { type Tracks } from "../../../BLL/useTracks"
import {useTrackItem} from "../../../BLL/useTrackItem"

type TrackItemProps = {
  item: Tracks
}
export function TrackItem({item}: TrackItemProps) {
  const {likes, handleLikes} = useTrackItem()
  return (
    <li>
      {item.title} - <span onClick={handleLikes}>likes: {likes}</span>
    </li>
  )
}