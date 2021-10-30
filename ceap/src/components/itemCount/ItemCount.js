import React from 'react'

function ItemCount({ cantidad, modify, limite, prodId }) {

    const handleRestar = () => {
        if (cantidad > 0)  {
            modify(cantidad - 1, prodId)
        }
    }

    const handleSumar = () => {
        if (cantidad < limite) {
            modify(cantidad + 1, prodId)
        }
    }

    return <>
        <div className='input-group justify-content-center' >
        <button className = 'btn btn-primary' disabled={cantidad === 0 } onClick={ () => handleSumar() }>
            -
        </button>   
        <div className='mx-3'>
            { cantidad }
        </div>
        <button className = 'btn btn-primary' disabled={cantidad === limite } onClick={ () => handleRestar() }>
            +
        </button>
       
        </div>
        </>
    
}

export default ItemCount
