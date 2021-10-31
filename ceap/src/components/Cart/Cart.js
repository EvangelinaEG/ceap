import React, { useContext } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import './cart.scss'
import ItemCount from '../itemCount/ItemCount'


export const Cart = () => {

    const { carrito, vaciarCarrito, removeItem, calcularTotal, updateItem} = useContext( CartContext )
    const {goBack} = useHistory()

    const handleCantidad = (cant, prodId) => {
        updateItem(prodId,cant)
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
                                <Link to={`/detail/${prod.id}`}>
                                    <img src={prod.img} width='150' alt={prod.descripcion} />
                                </Link>
                                <div className='column'>
                                    <small>{prod.descripcion}</small>
                                    <ItemCount key={ i } cantidad={prod.cantidad} modify={handleCantidad } limite={prod.stock}  prodId={prod.id} />
                                    <p>Precio: {prod.precio * prod.cantidad} </p>
                                </div>
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


