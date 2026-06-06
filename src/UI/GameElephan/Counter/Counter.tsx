import { useCounter } from "../../../BLL/useCounter"
type CounterProps = {
    onClick: ()=>void
}
export function Counter({onClick}: CounterProps){
    const {value, headerCounter} = useCounter(onClick)
    return(
        <div>
            <h2>Нажми на кнопку 4 раза, чтобы увидеть слона</h2>
             <button onClick={headerCounter}> Button counter {value}</button>
        </div>
    )
}