import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { createType } from './../../http/deviceAPI';
import { observer } from 'mobx-react-lite';

const CreateType = observer(({show, onHide}) => {
  
  const [value, setValue] = useState('')

  const addType = () => {
    createType({name: value}).then(data => setValue(''));
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
          Добавить тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder='Введите название типа'/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-success' onClick={addType}>Добавить новый тип</Button>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateType;