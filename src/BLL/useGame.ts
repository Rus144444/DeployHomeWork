import { useState } from "react"

type GameMode = "Counter" | "Elephant"

export function useGame () {
    const [gameMode, setValue] = useState<GameMode>("Counter")
    const [weight, setWeight] = useState(100)

    const heandleChangesToElephant = ():void => {
        setValue("Elephant")
    }

    const heandleChangesToCounter = ():void => {
        setValue("Counter")
        setWeight(100)
    }

     const handleFeedHealthyFood = ():void => {
        setWeight(prev => prev + 20)
    }

    const handleFeedJunkFood = ():void => {
        setWeight(prev => prev - 20)
    }

    const heandleResetGame = ():void => {
          setValue("Counter")
          setWeight(100)
    }

    return {
        gameMode,
        weight,
        heandleChangesToElephant,
        heandleChangesToCounter,
        handleFeedHealthyFood,
        handleFeedJunkFood,
        heandleResetGame
    }
}