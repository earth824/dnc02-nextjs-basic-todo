import StatCard from '@/components/dashboard/StatCard';

export default function StatOverview() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <StatCard />
      <StatCard />
      <StatCard />
    </div>
  );
}
