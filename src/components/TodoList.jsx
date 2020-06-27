import React, {Component } from 'react';
import { GlobalContext } from '../contextApi/GlobalState';
import { Container, ListGroup, } from 'reactstrap';
import Todos from './Todos';
import DoneTask from './DoneTask';

class TodoList extends Component {

    static contextType = GlobalContext
    componentDidMount() {
        const { getTodo } = this.context
        getTodo()
    }


    render() {
        const { todo } = this.context
        return (
            <Container>
                <h1>New Task</h1>
                <ListGroup>
                    {todo.map(t => !t.status ? <Todos key={t._id.$oid} id={t._id} item={t.item} status={t.status} /> : null)}
                </ListGroup>
                <hr />
                <br />
                <br />

                <h1>Completed Task</h1>
                <ListGroup>
                    {todo.map(t => t.status ? <DoneTask key={t._id.$oid} id={t._id} item={t.item} status={t.status} /> : null)}
                </ListGroup>

            </Container>
        )
    }
}

export default TodoList


