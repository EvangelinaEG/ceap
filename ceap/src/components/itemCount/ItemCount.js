import React from 'react'
import './itemCount.scss'

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
        <div className='group my-1'>
            <button className = 'btn btn-primary' disabled={cantidad === 0 } onClick={ () => handleRestar() }>
                -
            </button>   
            <div>
                { cantidad }
            </div>
            <button className = 'btn btn-primary' disabled={cantidad === limite } onClick={ () => handleSumar() }>
                +
            </button>
       
        </div>
        </>
    
}

export default ItemCount
