import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../itemCount/ItemCount'
import './itemDetail.scss'

export const ItemDetail = ({id, descripcion, precio, img, categoria, stock}) => {

    const {goBack} = useHistory()

    const [cantidad, setCantidad] = useState(0)

    const { addToCart, isInCart } = useContext( CartContext )

    const handleCantidad = ( cant ) => {
        setCantidad( cant );
    }


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

    const styles = {
        btnAgregar: isInCart(id) ? "btn btn-danger m-2" : "btn btn-success m-2",
        btnTerminar: `btn btn-success ${!isInCart(id) && "desactivado"}`
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
                    <Link to='/cart' className='btn btn-primary'>Ver en el carrito</Link>
                :
                    <>
                       <ItemCount cantidad={cantidad} modify={ handleCantidad } limite={stock} />
                        <br />
                        <button
                            disabled={cantidad === 0}
                            className={styles.btnAgregar}
                            onClick={handleAgregar}
                            >
                            Agregar
                        </button>
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
