import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState = {
    todo:[],
    loading:false
}
const url = "http://localhost:8000";
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState);
    

    const getTodo = ()=>{

    axios.get(url)
        .then(res=>
            
            dispatch({
            type:'GETITEMS',
            payload:res.data
        }))
        .catch(
            err=>console.log(err)
        )

    }
   const deleteTodo = (id)=>{
       
    axios.delete(`${url}/${id}`)
        .then(res=>
            dispatch({
                type:'DELETE',
                payload:res
               })
            )
        .catch(
            err=>console.log(err)
        )
        getTodo()
   }
    const addTodo = (item)=>{
        axios.post(`${url}`,item)
        .then(res=>
            dispatch({
                type:'ADD',
                payload:res.data
            })
            )
        .catch(
            err=>console.log(err)
        )
        getTodo()
    }
    const completeTask = (id,item)=>{
        axios.put(`${url}/${id}`,item)
        .then(res=>
            dispatch({
                type:'UPDATE',
                payload:res.data
            })
            )
        .catch(
            err=>console.log(err)
        )
        getTodo()
    }
    return(
        <GlobalContext.Provider
            value={{
                loading:state.loading,
                todo:state.todo,
                getTodo,
                deleteTodo,
                addTodo,
                completeTask
            }}
        >
           {children} 
        </GlobalContext.Provider>
    )
}