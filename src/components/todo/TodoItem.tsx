import DeleteTodoButton from '@/components/todo/DeleteTodoButton';
import { cn } from '@/lib/cn';
import Link from 'next/link';

type TodoItemProps = {
  id: number;
  title: string;
  status: boolean;
  showAction?: boolean;
};

export default function TodoItem({
  id,
  title,
  status,
  showAction
}: TodoItemProps) {
  return (
    <div className="flex justify-between items-center p-4">
      <h4>{title}</h4>
      <div className="flex gap-2 items-center">
        <div
          className={cn(
            'text-white text-xs px-2 py-1 rounded-lg',
            status ? 'bg-blue-500' : 'bg-gray-500'
          )}
        >
          {status ? 'Completed' : 'Pending'}
        </div>
        {showAction && (
          <div className="flex gap-2">
            <Link
              href={`/todo/${id}/edit`}
              className="bg-green-500 text-white px-3 py-1.5 rounded-lg"
            >
              Edit
            </Link>
            <DeleteTodoButton id={id} />
          </div>
        )}
      </div>
    </div>
  );
}
