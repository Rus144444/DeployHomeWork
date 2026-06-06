import  {type Products } from "../../../BLL/useProducts"
import {ProductItem} from "../ProductItem/ProductItem"
import css from "./ProductList.module.css"

type Props = {
    items: Products[]
}

export function ProductList({ items }: Props) {
    return (
        <ul className={css.list}>
            {items.map((item) => (
                <ProductItem
                    key={item.id}
                    product={item}
                />
            ))}
        </ul>
    )
}