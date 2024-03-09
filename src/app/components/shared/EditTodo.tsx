'use client';

import Button from '../ui/Button';

import { todoType } from '../../../../Types/todoType';
import { BiEdit } from 'react-icons/bi';

const EditTodo = ({
  todo,
  editTodo,
  setEditTodo,
}: {
  todo: todoType;
  editTodo: boolean;
  setEditTodo: (value: boolean) => void;
}) => {
  const handleEdit = () => {
    if (todo.isCompleted) return;
    setEditTodo(!editTodo);
  };

  return (
    <div className="flex gap-5 items-center">
      <Button onClick={handleEdit} text={<BiEdit />} actionButton />
    </div>
  );
};

export default EditTodo;
