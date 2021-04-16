import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { createBrand } from '../../http/deviceAPI';
import { observer } from 'mobx-react-lite';

const CreateBrand = observer(({show, onHide}) => {

  const [value, setValue] = useState('')

  const addBrand = () => {
    createBrand({name: value}).then(data => setValue(''));
    onHide();
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control 
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder='Введите название бренда'/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={addBrand}>Добавить новый тип</Button>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateBrand;