import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Row, Container, Col, Card} from 'react-bootstrap'
import FarmerFilter from '../components/FarmerFilter'

const Produce = () => {

    const [produceList, setProduceList] = useState([])
    const [displayedList, setDisplayedList] = useState([])
    const [chosenStore, setChosenStore] = useState("")
    const [selectedFarmer, setSelectedFarmer] = useState({})
    const [farmers, setFarmers] = useState([])

    const noImg = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"

    useEffect(() => {

        const popProduce = async () => {
        await axios({
            method: 'GET',
            url: `/products`
        })
        .then (({data}) => {
            setProduceList(data)
            setDisplayedList(data)
        })
        .catch(e => console.log(e.message.toString()))
    }
    popProduce();
    }, [])

    useEffect(()=>{
        if(chosenStore === "") return setSelectedFarmer({storeName: "All Stores"})
        const currentFarmer = farmers.filter(farmer => (
            farmer._id === chosenStore
        ))
        setSelectedFarmer(currentFarmer[0])
    }, [chosenStore, farmers])
    return (
        <Container>
        <Row>
            <Col lg='3'>
                <FarmerFilter 
                    produceList={produceList} 
                    setDisplayedList={setDisplayedList} 
                    chosenStore={chosenStore} 
                    setChosenStore={setChosenStore} 
                    farmers={farmers}
                    setFarmers={setFarmers}
                />
            </Col>
            <Col lg='9'>
                <Row>
                {
                    selectedFarmer &&
                    <h1>{selectedFarmer.storeName}</h1>
                }
                {displayedList && displayedList.map(item => (   
                    <Col key={item._id} lg='4'>
                        <Card  style={{width:200, height:300, margin:5, overflow: "hidden"}}>
                            <Card.Img
                                variant="top"
                                src={noImg}
                                alt={item.description}
                                width={200}
                            />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>${item.price}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    )
                    )}
                </Row>
            </Col>
        </Row>
        </Container>
    )
}

export default Produce;