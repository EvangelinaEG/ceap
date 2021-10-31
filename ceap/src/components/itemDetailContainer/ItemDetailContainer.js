import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UiContext } from '../../context/UiContext'
import { getFirestore } from '../../firebase/config'
import { Loader } from '../Loader/Loader'
import { ItemDetail } from './itemDetail'


export const ItemDetailContainer = () => {

    const [ item, setItem ] = useState(null);
    const { loading, setLoading } = useContext( UiContext )
    const { itemId } = useParams();
    
    useEffect(() => {
        setLoading(true)

       const db = getFirestore()
       const productos = db.collection('productos')
       const item = productos.doc(itemId)

       item.get()
            .then((doc) => {
                setItem({
                    id: doc.id,
                    ...doc.data()
                })
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId, setLoading])
    
    return (
        <section className='container my-5'>
            { loading && <Loader />}
            { !loading && <ItemDetail { ...item } /> }
        </section>
    )
}
