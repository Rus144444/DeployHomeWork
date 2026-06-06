import { useState } from "react" 

export type Products = {
    id: number
    name: string
    price: number
    category: string
}

 
export function useProduct (){
const [products ] = useState<Products[]>([
    { id: 1, name: "Хлеб", price: 30, category: "Выпечка" },
    { id: 2, name: "Молоко", price: 60, category: "Молочные" },
    { id: 3, name: "Яблоки", price: 120, category: "Фрукты" },
  ])

  return {
    products,
  }
}
