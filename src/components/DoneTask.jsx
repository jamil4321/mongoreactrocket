import React,{ useContext } from 'react';
import { GlobalContext } from '../contextApi/GlobalState';
import { Button, ListGroupItem } from 'reactstrap';

const DoneTask = ({id,item}) => {
    const { deleteTodo,getTodo } = useContext(GlobalContext)
    getTodo()
  return (
<ListGroupItem >
      {item}

     <span className="ml-5">
      <Button className="ml-4"  color="danger" onClick={() => { getTodo(); deleteTodo(id.$oid) }}>Delete</Button>
     </span>

    </ListGroupItem>

  
  )
}

export default DoneTask
