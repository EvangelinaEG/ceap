import { stock } from '../data/data';

export const pedirProductos = () => {  
    return new Promise((resolve, reject) =>  {
        setTimeout(() => {
            resolve(stock)

        }, 2000)
    })
}