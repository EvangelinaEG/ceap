import React, { createContext, useState } from 'react'


export const UiContext = createContext()

export const UiProvider = ( { children } ) => {
    
    const [ loading, setLoading ] = useState(false)

    return (
        <UiContext.Provider value={{
            loading,
            setLoading
        }} >
            { children }
        </UiContext.Provider>
    )
}
 