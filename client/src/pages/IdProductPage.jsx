import React, { useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import './IdProduce.css'
import Navbar from "../components/Header/Navbar"

const IdProduct = () => {

    const history = useHistory();


    const { produceList } = useContext(AppContext)
    const { id } = useParams()

    const product = produceList.find(product => product._id === id)

    const prodImg = "https://lh3.googleusercontent.com/proxy/4xG1VBI-pfmgdNqrBIqY6qCH08gHn6Ckdr0hmLQConZXfzCs_gH8DzrmOWP7WdFdFLqpF2OUkyrPSXJcboZBdJITISCfi1RzTUXx"


    return (
        <div>
            <Navbar />
            <button onClick={() => history.push(`/produce`)}>
                Produce</button> {product && product.name}
            <div id="layoutProduct">
            <div id="productImage"><img src={prodImg} alt=""/></div>
            <div id="productInfo">
            <h1>{product && product.name}</h1>
            <h3>${product && product.price}</h3>
            <h3>{product && product.description}</h3>
            <h3>Contributing Farm &gt;&gt;&gt; Links {product && product.farmerStore}</h3>
            </div>
            </div>
        </div>
    )
}

export default IdProduct;