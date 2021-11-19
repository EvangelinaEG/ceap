import React, { useContext, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { Resumen } from '../Resumen/Resumen'
import './Checkout.scss'
import Swal from 'sweetalert2'
import { UiContext } from '../../context/UiContext'
import { Loader } from '../Loader/Loader'
import { generarOrden } from '../../firebase/generarOrden'

export const Checkout = () => {

    const { loading } = useContext(UiContext)

    const { carrito, calcularTotal, vaciarCarrito } = useContext( CartContext )

    const [ form, setForm ] = useState({
        name: "",
        surname: "",
        email: "",
        telephone: "",
    })

    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(form.name.length < 3){
            Swal.fire({
                icon:'error',
                title:'Disculpe las molestias',
                text:`Su nombre es requerido. Debe ser completo `,         
            })
            return
        }
        if(form.surname.length < 3){
            Swal.fire({
                icon:'error',
                title:'Disculpe las molestias',
                text:`Su apellido es requerido.Debe ser completo `,         
            })
            return
        }
        if(form.email.length < 3){
            Swal.fire({
                icon:'error',
                title:'Disculpe las molestias',
                text:`Su email es requerido.`,         
            })
            return
        }

        if (typeof form.email !== "undefined") {
            let posicionArroba = form.email.lastIndexOf('@');
            let posicionPunto = form.email.lastIndexOf('.');
     
            if (!(posicionArroba < posicionPunto && posicionArroba > 0 && form.email.indexOf('@@') === -1 && posicionPunto > 2 && (form.email.length - posicionPunto) > 2)) {
                Swal.fire({
                    icon:'error',
                    title:'Disculpe las molestias',
                    text:`Ingrese un correo valido.`,         
                })
            }
        }

        if(form.telephone.length < 3){
            Swal.fire({
                icon:'error',
                title:'Disculpe las molestias',
                text:`Su telefono es requerido.`,         
            })
            return
        }
        try{
            generarOrden(form, carrito, calcularTotal())
            .then((res) => {
                Swal.fire({
                    icon:'success',
                    title:'Su compra fue registrada',
                    text:`Guarde el numero de orden: ${res.id}`,    
                    willClose: () => {
                        vaciarCarrito()
                    }
                })
            })
            .catch((res) => {
                Swal.fire({
                    icon:'error',
                    title:'Disculpe, no pudimos procesar su orden',
                    text:`Intentelo nuevamente ${res.map((el) => el.descripcion+'. El stock actual es:'+ el.stock).join(', ') }`,         
                })
            })
        }catch (err) {
            Swal.fire({
                icon:'error',
                title:'Error inesperado',
                text:`${err }`,         
            })
        }
    }
    return (
        <>
        {carrito.length === 0 && <Redirect to='./'></Redirect>}
        { loading && <Loader /> }
        <div className='container'>
            <h2>Resumen de compra</h2>
                <Resumen></Resumen>
                <div>
                    <h3>Total a pagar : $ { calcularTotal() } </h3>
                </div>
                <br />
                <Link to='/Cart' className='btn btn-primary boton'>
                    Volver al Carrito
                </Link>
            <hr />
            <h2>Complete sus datos para finalizar</h2>
            <div className='container my-5'>
                <form onSubmit={ handleSubmit } className='row'>
                    <input
                    className='my-2 form-control col-6' 
                    placeholder='Nombre'
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    />
                    { form.name.length === 0  && <small>* Este campo es obligarorio</small>} 
                   
                    <input
                    className='my-2 form-control col-6' 
                    placeholder='Apellido'
                    type="text"
                    name="surname"
                    value={form.surname}
                    onChange={handleChange}
                    />
                    { form.surname.length === 0  && <small>* Este campo es obligarorio</small>} 
                    
                    <input
                    className='my-2 form-control col-6' 
                    placeholder='Email'
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    />
                    { form.email.length === 0  && <small>* Este campo es obligarorio</small>} 
                    
                    <input
                    className='my-2 form-control col-6' 
                    placeholder='Telefono'
                    type="text"
                    name="telephone"
                    value={form.telephone}
                    onChange={handleChange}
                    />
                    { form.telephone.length === 0  && <small>* Este campo es obligarorio</small>} 

                    <button className='btn btn-primary boton col-6' type='submit' disabled={loading} >Finalizar Compra</button>
                </form>
            </div>
        </div>
        </>
    )
}
