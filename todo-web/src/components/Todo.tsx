import { useState, useEffect } from 'react';
import { BsPlus, BsSearch } from 'react-icons/bs';
import { useAppDispatch } from '../redux/hooks';
import { addTodo, fetchTodos, updateSearch } from '../redux/todoSlice';
import FilterButton from './FilterButton';
import TodoList from './TodoList';

const Todo = () => {
    const dispatch = useAppDispatch();
    const [newTodoText, setNewTodoText] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleAddTodo = () => {
        if (newTodoText.trim() !== '') {
            dispatch(addTodo(newTodoText.trim()));
            setNewTodoText('');
        }
    };

    const handleSearchTerm = (value: string) => {
        setSearchTerm(value);
        dispatch(updateSearch({ search: value }));
    };

    return (
        <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
            <h2 className="mt-3 mb-6 text-2xl font-bold text-center uppercase">
                Todo Personalization
            </h2>

            <div className="flex items-center mb-4">
                <input value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} type="text" name="addTodoInput" id="addTodoInput" placeholder="Add Todo" className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none" onClick={handleAddTodo}>
                    <BsPlus />
                </button>
            </div>

            <div className="flex items-center justify-between">
                <FilterButton />
                <div className="flex items-center mb-4">
                    <input value={searchTerm} onChange={(e) => handleSearchTerm(e.target.value)} type="text" name="searchInput" id="searchInput" placeholder="Search" className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500" />
                    <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none">
                        <BsSearch />
                    </button>
                </div>
            </div>
            <TodoList />
        </div>
    );
};

export default Todo;
