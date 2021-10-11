import React from 'react'
import { useHistory } from 'react-router-dom'
import './itemDetail.scss'

export const ItemDetail = ({id, descripcion, precio, img, categoria}) => {

    const {goBack} = useHistory()



    return (
        <div className='container m-3'>
            <small> id: {id} </small>
            <h2> {descripcion} </h2>
            <hr />
            <img src={img} alt= {descripcion} />
            <hr />
            <h2>Precio: $ {precio} </h2>
            <button className='btn btn-primary' >Comprar</button>
            <button className='btn btn-primary' onClick={() => goBack()}> Volver</button>
        </div>
    )
}
