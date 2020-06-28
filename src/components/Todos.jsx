import React, { useContext } from 'react';
import { GlobalContext } from '../contextApi/GlobalState';
import { Button, ListGroupItem } from 'reactstrap';
import EditTodo from './EditTodo';

const Todos = ({ id, item }) => {
  const { deleteTodo, completeTask, getTodo } = useContext(GlobalContext)


  const update = (id) => {
    const newTodo = {
      item: item,
      status: true
    }
    completeTask(id, newTodo)
    getTodo()
  }
  // const updateItem = (id) => {
  //   let updatedItem = prompt("Enter Updated Item");
  //   if (updatedItem === null){
  //     updatedItem = item
  //   }
  //   const updatedTodo = {
  //     item: updatedItem,
  //     status: false
  //   }
  //   completeTask(id, updatedTodo)
  //   getTodo()
  // }

  return (
    <ListGroupItem >
      {item}

     <span className="ml-5">
     <Button className="ml-4" color="success" onClick={() => update(id.$oid)}>Done</Button>
      <EditTodo id={id} />
      <Button className="ml-4"  color="danger" onClick={() => { getTodo(); deleteTodo(id.$oid) }}>Delete</Button>
     </span>

    </ListGroupItem>

  )
}

export default Todos
