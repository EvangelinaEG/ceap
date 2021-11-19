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
        btnAgregar: isInCart(id) ? "btn btn-danger m-2" : "btn btn-success m-5",
        btnTerminar: `btn btn-success ${!isInCart(id) && "desactivado"}`
    }

    return (

        <div className='container m-3 '>
            <div className='flex'>
                <div className='mx-3'>
                    <img src={ img } alt= { descripcion }  />
                </div>
                <div className='column'>
                    <small> id: { id } </small>
                    <h2> { descripcion } </h2>
                    
                    <hr />
                    <h2>Precio: $ { precio } </h2>
                    <h4>Stock: { stock } </h4>
                    <br />
                    
                    { isInCart(id) 
                        ? 
                            <Link to='/cart' className='btn btn-primary'>Ver en el carrito</Link>
                        :
                            <>
                            <p>Cantidad:</p>
                            <ItemCount cantidad={cantidad} modify={ handleCantidad } limite={stock} prodId={id}/>
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
                </div>
            </div>
            <hr />
            <button className='btn btn-primary' onClick={() => goBack()}> Volver</button>
        </div>
    )
}
