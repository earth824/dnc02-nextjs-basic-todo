import MenuItem from '@/components/layouts/MenuItem';

export default function Menu() {
  return (
    <nav className="flex gap-4">
      <MenuItem href="/dashboard" label="Dashboard" />
      <MenuItem href="/todo" label="Todo" />
    </nav>
  );
}
