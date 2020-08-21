import React from 'react';

const todo = ({todo}) => {
    return (
        <div style={{ display: 'flex' }}>
            <input type='checkbox' />
            <li
                style={{
                    color: 'black',
                    textDecoration : todo.completed ? "line-through" : null
                }}
            >{todo.task}</li>
            <button>X</button>
        </div>
    );
}

export default todo;
