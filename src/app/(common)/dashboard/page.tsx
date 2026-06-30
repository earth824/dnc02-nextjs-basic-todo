import StatOverview from '@/components/dashboard/StatOverview';
import TodoList from '@/components/todo/TodoList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard'
};

export default function DashboardPage() {
  return (
    <main className="flex flex-col gap-8 p-8">
      <StatOverview />
      <div className="bg-white rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-8">Latest Todo</h2>
        <TodoList />
      </div>
    </main>
  );
}
