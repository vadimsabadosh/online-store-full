import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import star from '../assets/star.svg';
import { fetchOneDevice } from '../http/deviceAPI';
const DevicePage = () => {

  const {id} = useParams()
  const [device, setDevice] = useState({info: []});

  useEffect(()=>{
    fetchOneDevice(id).then(data => setDevice(data))
  }, [])
  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image src={process.env.REACT_APP_API_URL + device.img} width={300}  height={300}  alt={device.name}/>
        </Col>
        <Col md={4} >
          <Row className='d-flex flex-column align-items-center'>
            <h2>{device.name}</h2>
            <div 
              className='d-flex justify-content-center align-items-center'
              style={{background: `url(${star}) no-repeat center / cover`, width: 240, height: 240 } }
              >{device.rating}</div>
          </Row>
        </Col>
        <Col md={4}>
          <Card className='p-3 d-flex flex-column align-items-center justify-content-around'
          style={{width: 300, height: 300}}>
            <h2>От {device.price} грн</h2>
            <Button variant='outline-dark'>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className=' d-flex flex-column m-3'>
        {device.info.map((info, i) => {
          return <Row  style={{background: i % 2 === 0 ? 'grey' : 'transparent', padding: 10}} key={info.id}>{info.title}: {info.description}</Row>
        })}
      </Row>
    </Container>
  );
};

export default DevicePage;