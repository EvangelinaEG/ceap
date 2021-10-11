import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pedirProductos } from '../helpers/pedirProductos';
import { ItemList } from './ItemList';

export const ItemListContainer = (props) =>{

const [items, setItems] = useState([]) 
const [loading, setLoading] = useState(false)

const { categoryId } = useParams()

useEffect(() => {
    setLoading(true)

    pedirProductos()
    .then( (res) => {
        if(categoryId){
            setItems ( res.filter(prod => prod.categoria === categoryId) )
        }else{
            setItems(res)    
        }
        
    } )
    .catch((err) =>  console.log(err))
    .finally(() => {
        setLoading(false)
    }) 
}, [ categoryId ] )

    return (
    <section className = 'container my-5'>
        {
            loading ? <h2>Cargando...</h2> : <ItemList productos = {items} />
        }
    </section>
    )
}