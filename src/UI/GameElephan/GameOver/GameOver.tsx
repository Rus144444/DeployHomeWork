type GameOverProps = {
    onClick: ()=> void
}

export function GameOver ({onClick}: GameOverProps)  {
    return (
        <div>
            <h2>У твоего слоника заболел живот и вместо того чтобы играть со своими друзьями он пошел к врачу. В следующий раз корми слона правильной пищей, чтобы слоник был здоров</h2>
            <button onClick={onClick}>Но не расстраивайся. Давай сыграем еще раз</button>
        </div>
    )
}