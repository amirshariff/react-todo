import React, {useState} from 'react';
import uuid from 'uuid'

const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState({
        id: '',
        task: '',
        completed: false
    })
    
    const handleTaskInputChange = (e) => {
        setTodo({...todo, task: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid.v4() })
            setTodo({...todo, task:''})
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="task"
                    type="text"
                    value={todo.task}
                    onChange={handleTaskInputChange}>
                </input>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default TodoForm;
