import React from 'react'
import loading from '../../loading-yellow.gif';

export const Loader = () => {
    return (
        <div className='loader'>
            <img src={loading} alt='loading' />
        </div>
    )
}
