import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './Resumen.scss'

export const Resumen = () => {
    const { carrito } = useContext( CartContext )
     
    return (
        <div>
            
                    <div className='container my-5 column' >
                        <div className='title '>
                            <b className='col-lg-2 col-xs-2'>Descripcion</b>
                            <b className='col-lg-2 col-xs-2'>Cantidad</b>
                            <b className='col-lg-2 col-xs-2'>Precio</b>
                        </div>
                        {   
                            carrito.map( ( prod, i ) => (
                                <div className='item flex' key={i} >
                                    <small>{prod.descripcion}</small>
                                    <p>{prod.cantidad} </p>
                                    <p>${prod.precio * prod.cantidad} </p>
                                </div>
                                )
                            )
                        }
                    </div>
                    
            
        </div>
    )
}
