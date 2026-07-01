'use client';

import { createTodo } from '@/lib/actions/todo';
import { TodoFormInput, todoFormSchema } from '@/lib/schemas/todo';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';

type TodoFormProps = {
  defaultValues?: TodoFormInput;
  onSubmitAction: (input: unknown) => Promise<{ success: boolean }>;
};

export default function TodoForm({
  defaultValues = { title: '', status: 'false' },
  onSubmitAction
}: TodoFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<TodoFormInput>({
    resolver: zodResolver(todoFormSchema),
    defaultValues
  });

  const [isPending, startTransition] = useTransition();

  // const router = useRouter();

  const onSubmit = (data: TodoFormInput) => {
    startTransition(async () => {
      const result = await onSubmitAction(data);
      if (!result.success) {
        alert('Something went wrong');
        return;
      }
      // router.push('/todo');
    });
  };

  return (
    <form className="grid gap-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          type="text"
          className="px-3 py-1.5 border border-gray-200 rounded-lg outline-none w-full"
          placeholder="Enter todo title"
          {...register('title')}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>
      <div>
        <div className="flex gap-12">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              value="false"
              id="pending"
              {...register('status')}
            />
            <label htmlFor="pending">Pending</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="radio"
              value="true"
              id="completed"
              {...register('status')}
            />
            <label htmlFor="completed">Completed</label>
          </div>
        </div>
        {errors.status && (
          <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
        )}
      </div>
      <div className="flex gap-4">
        <Link href="/todo" className="px-4 py-2 bg-gray-300 rounded-lg">
          Cancel
        </Link>
        <button
          className="px-4 py-2 bg-gray-300 rounded-lg"
          disabled={isPending}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
