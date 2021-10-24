
import { createContext, useEffect, useState } from 'react'



const init = JSON.parse(localStorage.getItem('carrito')) || []


export const CartContext = createContext()

export const CartProvider = ( { children } ) => {
    const [ carrito, setCarrito] = useState(init)

 
    const addToCart = (item) => {
      setCarrito( [...carrito, item] )
    }
    
    const removeItem = (itemId) => {
      const newcart = carrito.filter((prod) => prod.id !== itemId)
      setCarrito(newcart)
    }
    
    const calcularCantidad = () => {
      return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }

    const calcularTotal = () => {
        return carrito.reduce( (acc, prod) => acc + (prod.cantidad * prod.precio), 0 )
    }

    const isInCart = (itemId) => {
        return carrito.some( (prod) => prod.id === itemId )
    }
    const vaciarCarrito = () => {
      setCarrito([])
    }
    
    useEffect(() => {
      localStorage.setItem('carrito', JSON.stringify(carrito))  
     
    }, [carrito])
    return (
        <CartContext.Provider value={{
            carrito,
            addToCart,
            removeItem,
            calcularCantidad,
            vaciarCarrito,
            isInCart,
            calcularTotal
          }} >
            { children }
        </CartContext.Provider>
    )
}