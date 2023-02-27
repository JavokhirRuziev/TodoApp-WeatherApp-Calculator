import { Close, Edit, Remove } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import TodoForm from './TodoForm'
import '../style.css'

function Todo({todos,completeTodo,removeTodo,updateTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value:''
  })

  const [editable, seteditable] = useState(false)

  // const edited = ()=>{
  //   seteditable(!editable)
  // }

  const done = (e)=>{
    e.currentTarget.classList.toggle('edited')
  }

  const submitUpdate = value =>{
    updateTodo(edit.id,value)
    setEdit({
      id:null,
      value:''
    })
    if(edit.id){
      return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }
  }

  return todos.map((todo,index)=>
    <div onClick={done} className={editable ? 'edited' : ''} key={index}>
      <div key={todo.id} >
        {todo.text}
        {console.log(todo.id)}
      </div>
      <div>
        <IconButton><Edit></Edit></IconButton>
        <IconButton onClick={()=>removeTodo(todo.id)}><Close></Close></IconButton>
      </div>
    </div>
  )
}

export default Todo