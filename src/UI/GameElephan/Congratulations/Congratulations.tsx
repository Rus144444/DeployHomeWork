type CongratulationsProps = {
    onClickReset: () => void
}

export function Congratulations ({onClickReset}: CongratulationsProps ) {
    return (
            <div>
                <h2>🎉 Поздравляю! Твой слон наелся здоровой пищи и с улыбкой побежал играть с другими слонами🎉</h2>
                <button onClick={onClickReset}>Давай сыграем еще раз и покормим другого слона</button>
            </div>
    )
}