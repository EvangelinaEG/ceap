import React, { useEffect, useState } from 'react';
import { pedirProductos } from '../helpers/pedirProductos';
import { ItemList } from './ItemList';

export const ItemListContainer = (props) =>{

const [items, setItems] = useState([]) 
const [loading, setLoading] = useState(false)


useEffect(() => {
    setLoading(true)

    pedirProductos()
    .then( (res) => {
        setItems(res)
    } )
    .catch((err) =>  console.log(err))
    .finally(() => {
        setLoading(false)
    }) 
}, [] )

    return (
    <section className = 'container my-5'>
        {
            loading ? <h2>Cargando...</h2> : <ItemList productos = {items} />
        }
    </section>
    )
}