'use client';
import ChangeTodo from './ChangeTodo';
import { todoType } from '../../../../Types/todoType';
import EditTodo from './EditTodo';
import DeleteTodo from './DeleteTodo';
import { useState } from 'react';
import { edit } from '@/app/actions/todoAction';
import Form from '../ui/Form';
import Input from '../ui/Input';
import Button from '../ui/Button';
import EditForm from './EditForm';
const Todo = ({ todo }: { todo: todoType }) => {
  const [editTodo, setEditTodo] = useState(false);

  return (
    <div
      className={`w-full h-20 flex items-center border bg-slate-200 justify-between py-3 px-20 rounded-2xl ${
        todo.isCompleted ? 'line-through opacity-50' : null
      }`}
    >
      <ChangeTodo todo={todo}></ChangeTodo>
      {editTodo ? (
        <span className="w-full">
          <EditForm todo={todo} setEditTodo={setEditTodo} />
        </span>
      ) : (
        <span className={`text-center font-bold ${editTodo ? 'hidden' : null}`}>
          {todo.title}
        </span>
      )}
      <div className="flex items-center gap-5">
        <EditTodo todo={todo} setEditTodo={setEditTodo} editTodo={editTodo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
