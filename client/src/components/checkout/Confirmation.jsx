import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import NavbarTwo from '../header/NavbarTwo'
import Footer from '../footer/Footer'
import { AppContext } from '../../context/AppContext'
import './cart.css'


const Confirmation = () => {

    const { user } = useContext(AppContext);
    const { id } = useParams();
    const arrayId = id.split('')
    const orderId = arrayId.splice(0 , 8)

    return (
        <div className="confirmContainer">
            <NavbarTwo />
        <div>
            <h1>Order Confirmed!</h1>
            <h3>Deliciousness on its way. Order #{orderId}</h3>
            <h3>An email has been sent to you at {user && user.email}</h3>
        </div>
            <Footer />
        </div>
    )
}

export default Confirmation;