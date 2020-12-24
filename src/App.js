import react, { useState } from 'react'
import List from './component/List';
import FormAdd from './component/FormAdd'
import './App.css';
import { ButtonGroup, Button } from 'reactstrap'

function App() {


  const [todos, setTodos] = useState([
    {id : 0, isComplete : true, name :'Learn HTML'}, 
    {id : 1, isComplete : true, name : 'Learn CSS'},
    {id : 2, isComplete : true, name : 'Learn JavaScript'},
    {id : 3, isComplete : false, name : 'Learn ES6'},
    {id : 4, isComplete : false, name : 'Learn React'},
    {id : 5, isComplete : false, name : 'Learn Rdux'}
  ])

  const [done, setDone] = useState(null)

  const add = newTodo => {
    setTodos([...todos, {id : Math.random(),isComplete : false, name : newTodo}])
  }


  const remove = index => {
    setTodos(todos.filter(todo=>todo.id !== index))
  } 

  const complete = index => {
    setTodos(todos.map(todo =>todo.id === index? {...todo,isComplete:!todo.isComplete}:todo))
  }

  const edit = (id, text) => {
    setTodos(todos.map(todo=> todo.id===id ? {...todo, name:text} : todo))
  }


  const search = () => {
    return (done !==null)? todos.filter(todo=>todo.isComplete === done): todos
  }


  return (
    <div className="App">

      <ButtonGroup>
        <Button color="success" onClick={() => setDone(true)} >Done</Button>
        <Button color="danger" onClick={() => setDone(false)} >Not Done</Button>
        <Button color="primary" onClick={() => setDone(null)}>All</Button>
      </ButtonGroup>

      {console.log(done)}
      <FormAdd add = {add} />
      <List todos = {search()} remove = {remove} complete = {complete} edit = {edit} />
    </div>
  );
}

export default App;
