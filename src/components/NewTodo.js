import React,{useState} from 'react'

import style from './newtodo.module.css'

const NewTodo = (props) => {

  const[todo,setTodo] = useState({title:"",desc:""})
  // collecting title and desc from todo= destructuring
  const{title,desc} = todo

  // handler
  const handleChange = (e) =>{
    // name= title/desc
    const name = e.target.name;
    
    // adding new todo to old todo
    setTodo((oldTodo) =>{
      return {...oldTodo, [name]: e.target.value}
    })

  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    props.onAddTodo(todo);
    setTodo({title:"", desc:""})
    
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.form_field}>
        <label htmlFor='title'>Title</label>
        <input type="text" 
        id="title" 
        name="title"
        value={title}
        onChange={handleChange}
        
        ></input>
      </div>

      <div className={style.form_field}>
        <label htmlFor='desc'>Description</label>
        <textarea type="text" 
        id="desc" 
        name="desc"
        value={desc}
        onChange={handleChange}
        
        ></textarea>
      </div>

      <button type='submit'>Add todo</button>
    </form>
  )
}

export default NewTodo