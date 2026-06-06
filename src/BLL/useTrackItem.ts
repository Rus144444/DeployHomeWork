import { useState } from "react"
export function useTrackItem () {
    const [likes, setLikes] = useState(0) 
    const handleLikes = ():void => {
        setLikes(prev => prev + 1)
    }
    return {
        likes,
        handleLikes
    }
}