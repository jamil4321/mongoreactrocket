import React, { useContext, useState } from 'react';
import { GlobalContext } from '../contextApi/GlobalState';
import { Button, Modal, ModalBody, Form, FormGroup, Label, Input, ModalHeader } from 'reactstrap';


const EditTodo = ({ id }) => {
    const [item, setitem] = useState('');
    const [modal, setModal] = useState(false);

    const { completeTask, getTodo } = useContext(GlobalContext)
    const toggle = () => {
        setModal(!modal)
    }
  

    const onSubmit = e => {
        e.preventDefault();
        const newTodo = {
            item,
            status: false
        }
        completeTask(id.$oid, newTodo)
        toggle()
        setitem('');
        getTodo()
    }
    return (
        <>
            <Button
                color="warning"
                className="ml-4"
                onClick={toggle}
            >Edit</Button>
            <Modal
                isOpen={modal}
                toggle={toggle}
            >
                <ModalHeader
                    toggle={toggle}
                >
                    Edit Task
                    </ModalHeader>
                <ModalBody>
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            <Label for="title">Edit Task</Label>
                            <Input type="text" name="title" id="title" placeholder="Enter Book Title" onChange={e => setitem(e.target.value)} />
                        </FormGroup>
                        <Button
                            color="dark"
                            style={{ marginBottom: '2rem' }}
                            block
                        >Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}

export default EditTodo;
