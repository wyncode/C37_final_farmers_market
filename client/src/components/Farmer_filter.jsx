import React,{ useState, useEffect} from 'react'
import axios from 'axios'

const Farmer_Filter = () => {

    const [farmers, setFarmers] = useState([])

    useEffect(() => {

        const farmProduce = async () => {
        await axios({
            method: 'GET',
            url: `/stores`
        })

        .then (({data}) => {
            setFarmers(data)
        })
        .catch(e => console.log(e.message.toString()))
    }
    farmProduce();
    }, [])

    const farmerList = farmers.map( farmer => farmer.storeName)

    return (
        <div>
        <h1>Farmers</h1>
        <h2>{farmerList}</h2>
        </div>
    )
}

export default Farmer_Filter;