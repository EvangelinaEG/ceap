import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../components/Loader/Loader';
import { UiContext } from '../context/UiContext';
import { getFirestore } from '../firebase/config';
import { ItemList } from './ItemList';
export const ItemListContainer = (props) =>{

const [items, setItems] = useState([]) 
const {loading, setLoading } = useContext( UiContext )


const { categoryId } = useParams()

useEffect(() => {
    setLoading(true)

    const db = getFirestore()
    const productos = categoryId 
                            ? db.collection('productos').where('categoria', '==', categoryId)
                            : db.collection('productos')

        productos.get()
            
    
        .then((response) => {
            const newItems = response.docs.map((doc) => {
                return {id: doc.id, ...doc.data()}
            })
            setItems(newItems)
        })
        .catch( err => console.log(err))
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