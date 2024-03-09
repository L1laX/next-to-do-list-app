import React from 'react';
import ChangeTodo from './ChangeTodo';
import { todoType } from '../../../../Types/todoType';
import EditTodo from './EditTodo';
import DeleteTodo from './DeleteTodo';
const Todo = ({ todo }: { todo: todoType }) => {
  return (
    <div
      className={`w-full flex items-center justify-between bg-white py-3 px-20 rounded-2xl ${
        todo.isCompleted ? 'line-through opacity-50' : null
      }`}
    >
      <ChangeTodo todo={todo}></ChangeTodo>
      <span className="text-center font-bold">{todo.title}</span>
      <div className="flex items-center gap-5">
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
