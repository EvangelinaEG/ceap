import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../itemCount/ItemCount'
import './itemDetail.scss'

export const ItemDetail = ({id, descripcion, precio, img, categoria, stock}) => {

    const {goBack} = useHistory()

    const [cantidad, setCantidad] = useState(0)

    const { addToCart } = useContext(CartContext)

    const handleAgregar = () => {
        const newItem = {
            id,
            descripcion,
            precio,
            categoria,
            stock,
            cantidad
            }
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
            <ItemCount cantidad={ cantidad } modify={ setCantidad } limite = {stock} />
            <br />
            <button className='btn btn-primary my-2' onClick={() => handleAgregar()}>Agregar</button> 
            <button className='btn btn-primary' >Comprar</button>
            <hr />
            <button className='btn btn-primary' onClick={() => goBack()}> Volver</button>
        </div>
    )
}
