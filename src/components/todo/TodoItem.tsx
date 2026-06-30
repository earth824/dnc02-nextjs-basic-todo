type TodoItemProps = {
  title: string;
  status: boolean;
};

export default function TodoItem({ title, status }: TodoItemProps) {
  return (
    <div className="flex justify-between items-center p-4">
      <h4>{title}</h4>
      <div
        className={`${status ? 'bg-blue-500' : 'bg-gray-500'} text-white text-xs px-2 py-1 rounded-lg`}
      >
        {status ? 'Completed' : 'Pending'}
      </div>
    </div>
  );
}
