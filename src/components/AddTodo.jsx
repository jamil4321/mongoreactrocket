import React,{useContext,useState} from 'react';
import {GlobalContext} from '../contextApi/GlobalState';
import { Button, Modal, ModalBody, Form, FormGroup, Label, Input, ModalHeader,Container } from 'reactstrap';


const AddTodo = () => {
    const [item, setitem] = useState('');
    const [modal,setModal] = useState(false);

    const {addTodo,getTodo} = useContext(GlobalContext)
    const toggle=()=>{
        setModal(!modal)
    }


    const onSubmit = e=>{
        e.preventDefault();
        const newTodo = {
            item,
            status:false
        }
        addTodo(newTodo)
        toggle()
        setitem('');
        getTodo()
    }
    return (
        <Container>
                <Button
                    color="dark"
                    style={{ marginBottom: '2rem' }}
                    onClick={toggle}
                >Add Item</Button>
                <Modal
                    isOpen={modal}
                    toggle={toggle}
                >
                    <ModalHeader
                        toggle={toggle}
                    >
                        Add Task
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={onSubmit}>
                            <FormGroup>
                                <Label for="title">Add Task</Label>
                                <Input type="text" name="title" id="title" placeholder="Enter Book Title" onChange={e => setitem(e.target.value)}  />
                            </FormGroup>
                            <Button
                                color="dark"
                                style={{ marginBottom: '2rem' }}
                                block
                            >Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </Container>
    )
}

export default AddTodo
