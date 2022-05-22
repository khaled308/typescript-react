import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import { useState } from 'react';

interface Props{
    todo: Todo;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    todos: Todo[];
}

function SingleTodo({ todo, todos, setTodos }: Props) {
    localStorage.setItem('todos',JSON.stringify(todos))
    const [editField, setEditField] = useState(false)
    const handelDone = (id: number) => {
        const allTodos = todos.filter(item=>item.id !== id)
        const updated = todos.filter(item => item.id === id).map(item =>{return {...item , done : !item.done}})
        setTodos([...allTodos, ...updated])
    }

    const handelDelete = (id: number) =>{
        const allTodos = todos.filter(item=>item.id !== id)
        setTodos([...allTodos])
    }

    const handelEdit = (id : number , txt:string) => {
        const allTodos = todos.filter(item=>item.id !== id)
        const updated = todos.filter(item => item.id === id).map(item =>{return {...item , todo : txt}})
        setTodos([...allTodos, ...updated])
    }

    return (
        <li className='todo'>
            {
                editField && !todo.done ?
                    <form onSubmit={()=>setEditField(false)}>
                        <input type='text'
                        className='todo__input'
                        value={todo.todo}
                        onChange={(e) => handelEdit(todo.id, e.target.value)}
                        autoFocus={editField}
                        onBlur={()=>setEditField(false)}
                    />
                    </form> : 
                    <div className={`todo__txt ${todo.done ? 'done' : ''}`}>{todo.todo}</div>
            }
            <div className='todo__icons'>
                <span onClick={()=>setEditField(!editField)}><AiFillEdit /></span>
                <span onClick={()=>handelDelete(todo.id)}><AiFillDelete/></span>
                <span onClick={()=>handelDone(todo.id)}><MdDone /></span>
            </div>
        </li>
    )
}

export default SingleTodo