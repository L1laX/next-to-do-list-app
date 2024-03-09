'use client';

import { edit } from '@/app/actions/todoAction';
import Form from '../ui/Form';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { useState } from 'react';
import { todoType } from '../../../../Types/todoType';
import { BiEdit } from 'react-icons/bi';

const EditTodo = ({ todo }: { todo: todoType }) => {
  const [editTodo, setEditTodo] = useState(false);
  const handleEdit = () => {
    if (todo.isCompleted) return;

    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };

  return (
    <div className="flex gap-5 items-center">
      {editTodo ? (
        <Form action={edit} onSubmit={handleSubmit} className="flex">
          <Input name="inputId" value={todo.id} type="hidden" placeholder="" />
          <div className="flex justify-center">
            <Input type="text" name="newTitle" placeholder="EditTodo" />
          </div>
          <Button type="submit" text="save" />
        </Form>
      ) : null}
      <Button onClick={handleEdit} text={<BiEdit />} actionButton />
    </div>
  );
};

export default EditTodo;
