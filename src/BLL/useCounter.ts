import { useState } from "react"

export function useCounter (onReachFive:()=>void) {
    const [value, setValue] = useState<number>(1)
    const headerCounter = () => {
       setValue(prev => {
        const next = prev + 1
        if(next === 5) onReachFive()
        return next})
    }
    return {
        value,
        headerCounter
    }
}
