import React, { useContext } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import './cart.scss'
import ItemCount from '../itemCount/ItemCount'


export const Cart = () => {

    const { carrito, vaciarCarrito, removeItem, calcularTotal, addToCart } = useContext( CartContext )
    const {goBack} = useHistory()

    const handleCantidad = (cant, prodId) => {
        const productToUpdate = carrito.find( (cartElement) => cartElement.id === prodId);
        console.log(productToUpdate);
        productToUpdate.cantidad = cant;
        removeItem(prodId);
        addToCart(productToUpdate);
    }

    return (
        <div className='container my-5'>
            { 
                carrito.length === 0 
                ? 
                <>
                    <Redirect  to='/' />
                </>
                :
                <>
                    <h2>Resumen de Compra</h2>
                    <hr/>
                    {
                        carrito.map( (prod, i) => (
                            <>
                            <div className='container my-5 flex' >
                                <img src={prod.img} width='100' alt={prod.descripcion} />
                                <small>{prod.descripcion}</small>
                                <p>Cantidad: {prod.cantidad}</p>
                                    <ItemCount key={ i } cantidad={prod.cantidad} modify={handleCantidad } limite={prod.stock}  prodId={prod.id} />
                                <p>Precio: {prod.precio * prod.cantidad} </p>
                                <button className="btn btn-danger" onClick={() => removeItem(prod.id)}>
                                    <BsFillTrashFill/>
                                </button>
                            </div>
                            <hr />
                            </>
                        )

                        )
                    }
                    <h2>Total a pagar : $ { calcularTotal() } </h2>
                    <hr />
                    <button className='btn btn-danger' onClick={vaciarCarrito} >
                        Vaciar Carrito
                    </button>
                    <button className='btn btn-primary' onClick={() => goBack()}> Seguir comprando</button>
                </>
            }
        </div>
    )
}


