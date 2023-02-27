import React, { useState } from 'react'
import './style.css'
import TodoApp from './TodoList/TodoApp';
import Calculator from './Calculator/Calculator';
import { NavLink, Route, Routes } from 'react-router-dom';
import WeatherApp from './WeatherApp/WeatherApp';
import { Button } from '@mui/material';


function App() {

  return (
    <div>
      <Button sx={{margin:'5px',padding:'0',borderRadius:'5px'}} color='primary' variant='contained'>
      <NavLink style={{textDecoration: 'none',color:'white',padding:'5px 10px',borderRadius:'5px'}} className={({isActive})=>isActive ? 'Active' : ''}  to='/TodoList'>todoApp</NavLink> 
      </Button>
      <Button sx={{margin:'5px',padding:'0',borderRadius:'5px'}} color='primary' variant='contained'>
      <NavLink style={{textDecoration: 'none',color:'white',padding:'5px 10px',borderRadius:'5px'}} className={({isActive})=>isActive ? 'Active' : ''}  to='/WeatherApp'>weatherApp</NavLink>
      </Button>
      <Button sx={{margin:'5px',padding:'0',borderRadius:'5px'}} color='primary' variant='contained'>
      <NavLink style={{textDecoration: 'none',color:'white',padding:'5px 10px',borderRadius:'5px'}} className={({isActive})=>isActive ? 'Active' : ''}  to='/Calculator'>Calculator</NavLink>
      </Button>

      <Routes>
        <Route path='/TodoList' element={<TodoApp/>} />
        <Route path='/WeatherApp' element={<WeatherApp/>} />
        <Route path='/Calculator' element={<Calculator/>} />
      </Routes>
    
    </div>
  )
  
  }
export default App