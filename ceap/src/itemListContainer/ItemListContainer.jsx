import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';
import { UiContext } from '../context/UiContext';
import { pedirProductos } from '../helpers/pedirProductos';
import { ItemList } from './ItemList';
export const ItemListContainer = (props) =>{

const [items, setItems] = useState([]) 
const {loading, setLoading } = useContext( UiContext )


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
}, [ categoryId, setLoading ] )

    return (
    <section className = 'container my-5'>
        
            { loading && <Loader />}
            { !loading && <ItemList productos = {items} /> }
        
    </section>
    )
}