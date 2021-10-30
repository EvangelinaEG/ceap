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
                        carrito.map( (prod) => (
                            <>
                            <div className='container my-5 flex' >
                                <img src={prod.img} width='100' alt={prod.descripcion} />
                                <small>{prod.descripcion}</small>
                                <p>Cantidad: {prod.cantidad}</p>
                                    <ItemCount cantidad={prod.cantidad} modify={handleCantidad } limite={prod.stock}  />
                                <p>Precio: {prod.precio * prod.cantidad} </p>
                                {/* <button className='btn btn-danger' onClick={ () => removeItem(prod.id)} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                </button> */}
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


