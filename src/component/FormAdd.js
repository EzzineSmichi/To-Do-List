import React, {useState} from 'react'
import { FormGroup, Input, Button } from 'reactstrap'


const FormAdd = ({add}) => {

    const [name, setName] = useState('')

    const handleAdd = e => {
        e.preventDefault()
        add(name)
        setName('')
    }


    return (
        
        <FormGroup>
          <Input style={{width:'20%', margin:'.5rem auto', padding:'1rem'}}
            type="text" 
            name="todo" 
            id="todo" 
            placeholder="enter your todo"  
            value = {name} 
            onChange = {e=>setName(e.target.value)}
        />
        <Button color='primary' onClick={handleAdd} >Add todo</Button>
        </FormGroup>
    )
}

export default FormAdd
