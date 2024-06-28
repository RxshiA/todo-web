import { FaCheck, FaTimes, FaToggleOff, FaToggleOn, FaTrash } from "react-icons/fa";
import { useAppDispatch } from '../redux/hooks';
import { markCompleted, markIncomplete, removeTodo, toggleTodo } from '../redux/todoSlice';

const TodoItem = ({ todo, index }: { todo: any, index: number }) => {
    const dispatch = useAppDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));
    };

    const handleRemove = () => {
        dispatch(removeTodo(todo.id));
    };

    const handleMarkCompleted = () => {
        dispatch(markCompleted(todo.id)).then(() => {
            todo.completed = true;
        });
    };

    const handleMarkIncomplete = () => {
        dispatch(markIncomplete(todo.id)).then(() => {
            todo.completed = false;
        });
    };

    return (
        <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
            <div className="flex items-center">
                <span className="mr-4 text-gray-500">{index + 1}</span>
                <span className={`mr-4 ${todo.completed ? "line-through text-red-500" : ""}`}>{todo.text}</span>
            </div>

            <div className="space-x-3 ml-8">
                <button
                    onClick={handleToggle}
                    className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded">{todo.completed ? <FaToggleOff /> : <FaToggleOn />}</button>
                <button
                    onClick={handleRemove}
                    className="mr-2 text-sm bg-red-500 text-white sm:px-2 py-1 px-1 rounded"><FaTrash /></button>
                {
                    !todo.completed && (
                        <button
                            onClick={handleMarkCompleted}
                            className="mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 px-1 rounded"><FaCheck /></button>
                    )
                }
                {
                    todo.completed && (
                        <button
                            onClick={handleMarkIncomplete}
                            className="mr-2 text-sm bg-yellow-500 text-white sm:px-2 py-1 px-1 rounded"><FaTimes /></button>
                    )
                }
            </div>
        </li>
    );
};

export default TodoItem;
