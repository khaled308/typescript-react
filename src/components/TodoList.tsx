import { useEffect} from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
interface Props{
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    todos: Todo[];
}

const DisplayTasks = ({ todos, setTodos }: Props) => {
    return (
        <>
            {
            todos.map(item => <SingleTodo
                todo={item}
                todos={todos}
                setTodos={setTodos}
                key={item.id}
            />)
            }
        </>
    )
}
function TodoList({ todos, setTodos }: Props) {
    useEffect(() => {
        const todosStr = localStorage.getItem('todos')
        let todosInLocalStorage = JSON.parse(todosStr ? todosStr : '[]')
        setTodos(todosInLocalStorage)
    }, [])

    return (
        <div className="todos">
            <ul className="todos__active">
                <span className="todos__heading">Active Tasks</span>
                <DisplayTasks todos={todos.filter(item=>!item.done)} setTodos={setTodos} />
            </ul>
            <ul className="todos__completed">
                <span className="todos__heading">Completed Tasks</span>
                <DisplayTasks todos={todos.filter(item=>item.done)} setTodos={setTodos} />
            </ul>
        </div>
    )
}

export default TodoList