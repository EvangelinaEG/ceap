import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UiContext } from '../../context/UiContext'
import { pedirProductos } from '../../helpers/pedirProductos'
import { ItemDetail } from './itemDetail'



export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
   const { loading, setLoading } = useContext( UiContext )

    const { itemId } = useParams();

    
    
    useEffect(() => {
        setLoading(true)

        pedirProductos()
        .then( res =>{
            setItem( res.find(prod => prod.id === Number(itemId)) )
            
        })
        .catch((err) =>  console.log(err))
        .finally(() => {
            setLoading(false)
        }) 
    }, [itemId, setLoading])
    
    return (
        <div>
            {
                loading ? <h2>Cargando ...</h2> :
                <ItemDetail { ...item } />
            }
        </div>
    )
}
