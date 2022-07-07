import React,{useState} from 'react'
//for unique id
import {v4 as uuidv4} from 'uuid'
import Todos from './Todos'
import style from "./home.module.css"
import NewTodo from './NewTodo'



const Home = () => {
  const[todos,setTodos] = useState([])

  const handleAddTodo = (todo) =>{
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(),todo}]
    })
  }

  const handleRemoveTodo = (id) =>{
    setTodos((prevTodos) => {
      //jegular id match korena segula return kore dibo/rekhe dibo.id came from todo through onRemoveTodo method.(todo-> todos-> home)
      const filterdTodos= prevTodos.filter((todo) => (todo.id) !== id);
      return filterdTodos;

    })
  }
  return (
    <div className={style.container}>
      <h1 style={{color:"white"}}>Todo App</h1>
      {/* new todo came from newTodo through onAddTodo(c-p) */}
      <NewTodo onAddTodo={handleAddTodo}/>
      {/* passing (p-c) todos as todos to Todos.onRemoveTodo came from todos (c-p-p) */}
     <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
      </div>
  )
}

export default Home