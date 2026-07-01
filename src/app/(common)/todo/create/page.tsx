import TodoForm from '@/components/todo/TodoForm';
import { createTodo } from '@/lib/actions/todo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Todo'
};

export default function CreateTodoPage() {
  return (
    <main className="p-8">
      <div className="bg-white rounded-2xl p-8 flex flex-col gap-8">
        <h1 className="text-2xl font-semibold">Create Todo</h1>
        <TodoForm onSubmitAction={createTodo} />
      </div>
    </main>
  );
}
