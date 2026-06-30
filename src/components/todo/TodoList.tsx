import TodoItem from '@/components/todo/TodoItem';

export default function TodoList() {
  return (
    <div className="border-y border-y-gray-200 divide-y divide-gray-200">
      <TodoItem title="Test1" status={false} />
      <TodoItem title="Test2" status={true} />
    </div>
  );
}
