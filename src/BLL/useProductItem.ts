import { useState } from "react"

export type Product = {
    id: number
    name: string
    price: number
    category: string
}
export type Props = {
    product: Product
}

export function useProductItem({ product }: Props) {
    const [inCart, setInCart] = useState<boolean>(false)

    const handleClick = ():void => {
        if (inCart) {
            alert(`Товар ${product.name} удалён из корзины`)
            setInCart(false)
        } else {
            alert(`Товар ${product.name} добавлен в корзину`)
            setInCart(true)
        }
    }

    return {
        inCart,
        handleClick
    }
}