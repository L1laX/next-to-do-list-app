import AddTodo from './components/shared/AddTodo';
import { prisma } from './utils/prisma';
import Todo from './components/shared/Todo';
async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return data;
}

const Home = async () => {
  const data = await getData();
  return (
    <section className="w-screen py-20 flex justify-center flex-col items-center">
      <section className="header-section">To-Do-List-APP</section>
      <section className="mt-6 w-1/2">
        <AddTodo />
        <section className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
          {data.map((todo, id) => (
            <div className="w-full" key={id}>
              <Todo todo={todo} />
            </div>
          ))}
        </section>
      </section>
    </section>
  );
};

export default Home;
