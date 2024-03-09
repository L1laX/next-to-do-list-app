import React from 'react';
import { edit } from '@/app/actions/todoAction';
import Form from '../ui/Form';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { todoType } from '../../../../Types/todoType';

const EditForm = ({
  setEditTodo,
  todo,
}: {
  setEditTodo: (value: boolean) => void;
  todo: todoType;
}) => {
  const handleSubmit = () => {
    setEditTodo(false);
  };
  return (
    <Form action={edit} onSubmit={handleSubmit} className="flex w-full">
      <Input name="inputId" value={todo.id} type="hidden" placeholder="" />
      <div className="input-section flex w-full gap-2 px-5">
        <div className="flex justify-center w-full ">
          <Input type="text" name="newTitle" placeholder="EditTodo" />
        </div>
        <Button type="submit" text="save" />
      </div>
    </Form>
  );
};

export default EditForm;
