import React, { useContext,useState } from 'react';
import { GlobalContext } from '../contextApi/GlobalState';
import { Container, Button, ListGroup, ListGroupItem } from 'reactstrap';

const Todos = ({ id, item }) => {
  const [updatedItem,setUpdatedItem]=useState(item)
  const [modal,setModal] = useState(false);
  const { deleteTodo, completeTask, getTodo } = useContext(GlobalContext)

  const toggle=()=>{
    setModal(!modal)
}

  const update = (id) => {
    const newTodo = {
      item: item,
      status: true
    }
    completeTask(id, newTodo)
    getTodo()
  }
  const updateItem = (id) => {
    let updatedItem = prompt("Enter Updated Item");
    if (updatedItem === null){
      updatedItem = item
    }
    const updatedTodo = {
      item: updatedItem,
      status: false
    }
    completeTask(id, updatedTodo)
    getTodo()
  }

  return (
    <ListGroupItem >
      {item}

     <span className="ml-5">
     <Button className="ml-4" color="success" onClick={() => update(id.$oid)}>Done</Button>

      <Button className="ml-4"  color="warning" onClick={() => updateItem(id.$oid)}>Edit</Button>
      <Button className="ml-4"  color="danger" onClick={() => { getTodo(); deleteTodo(id.$oid) }}>Delete</Button>
     </span>

    </ListGroupItem>

  )
}

export default Todos