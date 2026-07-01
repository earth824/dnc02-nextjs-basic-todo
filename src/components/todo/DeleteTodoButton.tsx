'use client';

import { deleteTodo } from '@/lib/actions/todo';
import { useTransition } from 'react';

type DeleteTodoButtonProps = {
  id: number;
};

export default function DeleteTodoButton({ id }: DeleteTodoButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      await deleteTodo(id);
    });
  };

  return (
    <button
      className="bg-red-500 text-white px-3 py-1.5 rounded-lg"
      onClick={handleClick}
      disabled={isPending}
    >
      {isPending ? '...' : 'Delete'}
    </button>
  );
}
