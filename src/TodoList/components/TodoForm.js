import React, {useState} from 'react';

function TodoForm(props) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Date.now(),
      text: input,
    });
    setInput('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="addTodo"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />

      <button onClick={handleSubmit}>add</button>
    </form>
  );
}

export default TodoForm;
