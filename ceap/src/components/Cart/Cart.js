import React, { useContext } from 'react'
import { Link, Redirect} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { BsFillTrashFill } from 'react-icons/bs'
import './cart.scss'
import ItemCount from '../itemCount/ItemCount'

export const Cart = () => {

    const { carrito, vaciarCarrito, removeItem, calcularTotal, updateItem} = useContext( CartContext )

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
                            <div className='container my-5 flex row' key={i}>
                                <div className='col-lg-3 col-xs-12'>
                                    <Link to={`/detail/${prod.id}`}>
                                        <img src={prod.img} width='150' alt={prod.descripcion} />
                                    </Link>
                                </div>
                                <div className='column col-lg-3 col-xs-12'>
                                    <small>{prod.descripcion}</small>
                                    <ItemCount key={ i } cantidad={prod.cantidad} modify={handleCantidad } limite={prod.stock}  prodId={prod.id} />
                                    <p>Precio: {prod.precio * prod.cantidad} </p>
                                </div>
                                <div className='col-lg-3 col-xs-12 '>
                                    <button className="btn btn-danger delete" onClick={() => removeItem(prod.id)}>
                                        <BsFillTrashFill/>
                                    </button>
                                </div>
                                <hr />
                            </div>   
                        )

                        )
                    }
                    <h2>Total a pagar : $ { calcularTotal() } </h2>
                    <hr />
                    <button className='btn btn-danger' onClick={vaciarCarrito} >
                        Vaciar Carrito
                    </button>
                    <Link to='./' className='btn btn-primary'>Seguir comprando</Link> 
                    <Link to='/checkout' className='btn btn-success mx-3'>
                        Finalizar compra
                    </Link>
                </>
            }
        </div>
    )
}


