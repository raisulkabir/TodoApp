import React from 'react'
import Todo from "./Todo"
import style from "./todos.module.css"

const Todos = (props) => {
  
  return (
    <section className={style.todos}>
      {/* passing todo as todo to Todo */}
      {
        props.todos.map((todo) => (
          // passing todo to todo because in todo there is title and desc and different id. onRemovetodo came from todo (c-p)
        <Todo todo={todo.todo} key={todo.id} id = {todo.id} onRemoveTodo={props.onRemoveTodo}/>))
      }
    </section>
  )
}

export default Todos