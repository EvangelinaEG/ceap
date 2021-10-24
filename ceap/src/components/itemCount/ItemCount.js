import React from 'react'

function ItemCount({ cantidad, modify, limite }) {

    const handleRestar = () => {
        if( cantidad < limite )
        modify(cantidad + 1)
    }

    const handleSumar = () => {
        if( cantidad > 0 )
        modify(cantidad - 1)
    }

    return <>
        <div className='input-group justify-content-center' >
        <button className = 'btn btn-primary' onClick={ () => handleSumar() }>
            -
        </button>   
        <div className='mx-3'>
            { cantidad }
        </div>
        <button className = 'btn btn-primary' onClick={ () => handleRestar() }>
            +
        </button>
       
        </div>
        </>
    
}

export default ItemCount
