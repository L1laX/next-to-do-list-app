'use client';
import React from 'react';
import { todoType } from '../../../../Types/todoType';
import Button from '../ui/Button';
import Form from '../ui/Form';
import Input from '../ui/Input';
import { deletTodo } from '@/app/actions/todoAction';
import { BsFillTrashFill } from 'react-icons/bs';

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={deletTodo}>
      <Input type="hidden" name="inputId" value={todo.id} placeholder="" />
      <Button actionButton text={<BsFillTrashFill />} type="submit"></Button>
    </Form>
  );
};

export default DeleteTodo;
