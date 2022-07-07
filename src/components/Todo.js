import React from 'react'

import style from './todo.module.css'


const Todo = (props) => {
  const{title, desc} = props.todo
  // title+desc =1 props and id is different props
  const{id} = props

  const handleClick = (id) => {
    //passing id through onRemoveTodo to todos (c-p)
    props.onRemoveTodo(id);
  }
  return (
    <article className={style.todo}>
      <div>

      <h3>{title}</h3>
      <p>{desc}</p>

      </div>

      <div>
        <button className={style.btn} onClick={()=> handleClick(id)}>
          <i className='fa fa-trash fa-2x'></i>
        </button>
      </div>
      
    </article>
  )
}

export default Todo