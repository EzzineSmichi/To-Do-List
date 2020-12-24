import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';

const ModalEdit = (props) => {
    const {
      buttonLabel,
      className,
      todo, 
      edit
    } = props;
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);

    const [val, setVal] = useState(todo.name)

    const handleEdit = () => {
        edit(todo.id, val)
        toggle()
    }
  
    return (
      <div>
        <Button color="primary" onClick={toggle} style={{margin:'1rem'}}>{buttonLabel}</Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalHeader toggle={toggle}>Change todo</ModalHeader>
            <ModalBody>
            <Form>
                <FormGroup>
                    <Input type="text" value={val} onChange={e=>setVal(e.target.value)} />
                </FormGroup>
            </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleEdit}>save</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
      </div>
    );
  }
  
  export default ModalEdit;