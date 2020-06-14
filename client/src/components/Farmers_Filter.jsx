import React,{ useState, useEffect} from 'react'
import axios from 'axios'

const Farmers_Filter = () => {

    const [farmers, setFarmers] = useState('')

    useEffect(() => {
        const farmProduce = async () => {
        await axios({
            method: 'GET',
            url: `/products`
        })
        //.then (({data}) => console.log(data))
        .then (({data}) => {
            console.log(data.farmerStore.storeName)
        })
        .catch(e => console.log(e.message.toString()))
    }
    farmProduce();
    }, [farmers])


    return (
        <h1>Farmers</h1>
    )
}

export default Farmers_Filter;