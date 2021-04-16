import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
  const { device } = useContext(Context)
  return (
    <Row className='d-flex'>
      {device.brands.map(brand => {
        return <Card 
        key={brand.id} 
        border={brand.id === device.selectedBrand.id ? 'danger' : 'grey'}
        className='p-2 mr-2 ml-2 mb-2' 
        style={{cursor: 'pointer'}}
        onClick={() => device.setSelectedBrand(brand)}>
          {brand.name}
        </Card>
      })}
    </Row>
  );
});

export default BrandBar;