import { useAppSelector } from '../redux/hooks';
import TodoItem from './TodoItem';

const TodoList = () => {
    const todos = useAppSelector((state) => state.todos.todos); 
    const filter = useAppSelector((state) => state.todos.filter);
    const search = useAppSelector((state) => state.todos.search);

    if (!Array.isArray(todos)) {
        return <div>Loading...</div>; 
    }

    const filteredTodos = todos.filter((todo) => {
        const matchFilter = 
            (filter === 'COMPLETED' && todo.completed) ||
            (filter === 'INCOMPLETE' && !todo.completed) ||
            filter === 'ALL';

        const matchSearch = search && typeof search === 'string' && todo.text.toLowerCase().includes(search.toLowerCase());

        return matchFilter && (!search || matchSearch);
    });

    return (
        <ul>
            {filteredTodos.map((todo, index) => (
                <TodoItem key={todo.id} todo={todo} index={index} />
            ))}
        </ul>
    );
};

export default TodoList;
