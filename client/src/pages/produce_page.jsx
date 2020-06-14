import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Row, Container, Col, Card} from 'react-bootstrap'
import Farmer_Filter from '../components/Farmer_filter'

const Produce = () => {

    const [produceList, setProduceList] = useState([])
    const [search, setSearch] = useState('')

    const noImg = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"

    useEffect(() => {

        const popProduce = async () => {
        await axios({
            method: 'GET',
            url: `/products`
        })
        .then (({data}) => {
            setProduceList(data)
        })
        .catch(e => console.log(e.message.toString()))
    }
    popProduce();
    }, [search])
    return (
        <Container>
        <Row>
            <Col lg='3'>
                <Farmer_Filter />
            </Col>
            <Col lg='9'>
                <Row>
                    {produceList && produceList.map(item => (
                        <Col lg='4'>
                            <Card key={item.id} style={{width:200, height:300, margin:5, overflow: "hidden"}}>
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