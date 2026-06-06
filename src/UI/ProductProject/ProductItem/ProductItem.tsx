import { useProductItem, type Props} from "../../../BLL/useProductItem"
import css from "./ProductItem.module.css"

export function ProductItem ({product}: Props){
    const {inCart, handleClick} = useProductItem({product})
    return (
        <li className={css.item}>
            <div>
                <div>name: {product.name}</div>
                <div>id: {product.id}</div>
                <div>price: {product.price}</div>
                <div>product:  {product.category}</div>
                <button className={ inCart ? css.backgroundYellow  : "" } 
                onClick={handleClick}> {inCart ? "убрать из корзины" : "добавить в корзину"}
                </button>
            </div>
        </li>
    )
}