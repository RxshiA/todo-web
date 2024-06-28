import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { filterTodos, markAllCompleted } from '../redux/todoSlice';

const FilterButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector(state => state.todos.filter);

  const handleFilter = (filter: 'ALL' | 'COMPLETED' | 'INCOMPLETE') => {
    dispatch(filterTodos({ filter }));
  };

  return (
    <div className="flex space-x-4 items-center">
      <select 
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value as 'ALL' | 'COMPLETED' | 'INCOMPLETE')}
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>
      <button 
        onClick={() => dispatch(markAllCompleted())}
        className="text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded"
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButton;
