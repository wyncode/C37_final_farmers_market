import React,{ useState, useEffect} from 'react'
import axios from 'axios'

const FarmerFilter = ({produceList, setDisplayedList, chosenStore, setChosenStore, farmers, setFarmers}) => {

    
    const [searchTerm, setSearchTerm] = useState("")
    

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
    }, [setFarmers])

    useEffect(()=>{
        if (chosenStore === "") return setDisplayedList(produceList)
        const filteredList = produceList.filter(product => {
            return(
                product.farmerStore === chosenStore
            )
        })
        setDisplayedList(filteredList)
    }, [chosenStore, produceList, setDisplayedList])

    useEffect(()=>{        
        if (chosenStore){
            const filteredList = produceList.filter(product => {
                return(
                    product.farmerStore === chosenStore 
                    &&
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
            })    
            setDisplayedList(filteredList)
        } else {
            const filteredList = produceList.filter(product => {
                return(
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
            })    
            setDisplayedList(filteredList)
        }
    },[searchTerm, chosenStore, produceList, setDisplayedList])

    return (
        <div>
        <h1>Farmers</h1>
        <p onClick={() => {
                        setChosenStore("") 
                        setSearchTerm("")
                    }}>All Stores</p>
        {
            farmers && farmers.map(farmer => {
                return(
                    <p key={farmer._id} onClick={() => {
                        setChosenStore(farmer._id) 
                        setSearchTerm("")
                    }}>
                        {farmer.storeName}
                    </p>    
                )
            })
        }
        <input type="text" value = {searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
    )
}

export default FarmerFilter