import Form from '../ui/Form';
import Button from '../ui/Button';
import Input from '../ui/Input';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { changeStatus } from '@/app/actions/todoAction';
import { todoType } from '../../../../Types/todoType';

const ChangeTodo = ({ todo }: { todo: todoType }) => {
  return (
    <form action={changeStatus}>
      <Input name="inputId" value={todo.id} type="hidden" placeholder="" />
      <Button
        actionButton
        type="submit"
        text={<AiOutlineCheckCircle></AiOutlineCheckCircle>}
      />
    </form>
  );
};

export default ChangeTodo;
