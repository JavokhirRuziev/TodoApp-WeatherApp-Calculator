import {Close, Done} from '@mui/icons-material';
import {
  Button,
  Card,
  CardContent,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import React, {useRef, useState} from 'react';
import './style.css';

function TodoApp() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  // const [edit,setEdit] = useState(false)

  // const ddd = ()=>{
  //   setEdit(!edit)
  // }

  const addTodo = () => {
    if (!input.trim()) {
      return;
    }
    const newTodos = [...todos, {name: input, id: Date.now()}];
    setTodos(newTodos);
    setInput('');
  };

  const done = (e) => {
    e.currentTarget.classList.toggle('style');
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  return (
    <Card sx={{bgcolor: 'whitesmoke', border: 'none'}} className="todoApp">
      <CardContent>
        <div className="main">
          <TextField
            label="Add Todo"
            variant="standard"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="contained" onClick={addTodo}>
            Add
          </Button>
        </div>
        {todos.map((todo) => (
          <Card className="card" onClick={done}>
            <div className="created">
              <Typography>{todo.name}</Typography>
              <IconButton color="black">
                <Done></Done>
              </IconButton>
              <IconButton color="error" onClick={() => removeTodo(todo.id)}>
                <Close></Close>
              </IconButton>
            </div>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}

export default TodoApp;
