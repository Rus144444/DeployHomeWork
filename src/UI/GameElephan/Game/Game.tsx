import { Counter } from "../Counter/Counter"
import { Elephant } from "../Elephant/Elephant"
import { Congratulations } from "../Congratulations/Congratulations"
import { GameOver } from "../GameOver/GameOver"
import { useGame } from "../../../BLL/useGame"

export function Game() {
  const {
    gameMode,
    weight,
    heandleChangesToElephant,
    heandleResetGame,
    heandleChangesToCounter,
    handleFeedHealthyFood,
    handleFeedJunkFood,
  } = useGame()

  const WIN_WEIGHT = 200
  const LOSE_WEIGHT = 20

  const isWinner = weight >= WIN_WEIGHT
  const isGameOver = weight <= LOSE_WEIGHT

  const isPlaying =
    gameMode === "Elephant" &&
    !isWinner &&
    !isGameOver

  return (
    <div>
      <h1>Game boy</h1>

      {gameMode === "Counter" && (
        <Counter onClick={heandleChangesToElephant} />
      )}

      {isPlaying && (
        <Elephant
          weight={weight}
          handleFeedHealthyFood={handleFeedHealthyFood}
          handleFeedJunkFood={handleFeedJunkFood}
        />
      )}

      {isWinner && (
        <Congratulations onClickReset={heandleResetGame} />
      )}

      {isGameOver && (
        <GameOver onClick={heandleChangesToCounter} />
      )}
    </div>
  )
}