import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../itemCount/ItemCount'
import './itemDetail.scss'

export const ItemDetail = ({id, descripcion, precio, img, categoria, stock}) => {

    const {goBack} = useHistory()

    const [cantidad, setCantidad] = useState(0)

    const { addToCart, isInCart } = useContext( CartContext )

 

    const handleAgregar = () => {
        const newItem = {
            id,
            img,
            descripcion,
            precio,
            categoria,
            stock,
            cantidad
            }
            if(cantidad > 0)
           addToCart(newItem)
    }

    return (

        <div className='container m-3'>
            
            <small> id: { id } </small>
            <h2> { descripcion } </h2>
            <hr />
            <img src={ img } alt= { descripcion }  />
            <hr />
            <h2>Precio: $ { precio } </h2>
            <h4>Stock: { stock } </h4>
            <br />
            
            { isInCart(id) 
                ? 
                    <Link to='/cart' className='btn btn-primary'>Terminar mi compra</Link>
                :
                    <>
                        <ItemCount cantidad={ cantidad } modify={ setCantidad } limite = {stock} />
                        <br />
                        <button className='btn btn-primary my-2' onClick={() => handleAgregar()}>Agregar al carrito</button> 
                        <Link to={`/cart`}>
                            <button className='btn btn-primary' >Mostrar Carrito</button>
                        </Link>
                    </>
            }
            <hr />
            <button className='btn btn-primary' onClick={() => goBack()}> Volver</button>
        </div>
    )
}
