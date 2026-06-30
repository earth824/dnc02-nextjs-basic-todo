import Menu from '@/components/layouts/Menu';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="px-10 py-6 flex justify-between items-center shadow bg-white">
      <Link href="/">
        <div className="flex items-center gap-10">
          <Image src="/logo.png" alt="brand" width={48} height={48} />
          <h2 className="text-3xl font-bold text-blue-500">Basic Todo</h2>
        </div>
      </Link>
      <Menu />
    </header>
  );
}
