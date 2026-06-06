import css from "./Elephant.module.css"
type ElephantProps = {
    handleFeedHealthyFood:()=> void;
    handleFeedJunkFood:()=> void;
    weight: number
}

export function Elephant({handleFeedHealthyFood, handleFeedJunkFood, weight}: ElephantProps){
    return(
        <div>
            <h2 className={css.title}>Покорми слона</h2>
            <br />
            <br />
            <div className={css.elephant} style={{"--elephant-weight": `${weight}px`} as React.CSSProperties}>🐘</div>
            <br />
            <br />
            <br />
            <button onClick={handleFeedHealthyFood}>Кормить слона полезной едой 🥬🍉🍌</button>
            <br />
            <button onClick={handleFeedJunkFood}>Кормить слона вредной едой 🍔🍬🍕</button>
        </div>
    )
}
