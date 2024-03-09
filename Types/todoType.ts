import { edit } from '@/app/actions/todoAction';
export type todoType = {
  id: string;
  title?: string | null;
  isCompleted: boolean;
  createdAt?: Date;
};
