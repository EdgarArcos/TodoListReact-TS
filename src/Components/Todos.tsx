import { type listOfTodos } from "../Types/Types";

interface Props {
    todos: listOfTodos
}

export const Todos: React.FC<Props> = ({ todos }) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.title}
                </li>
            ))}
        </ul>
    )
}