import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home'
};

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8">
      <Image src="/logo.png" alt="brand" width={120} height={120} />
      <h1 className="text-4xl">The best simple todo list for you. Join us!</h1>
      <Link
        href="/dashboard"
        className="px-5 py-2.5 bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        Get&apos;s Start
      </Link>
    </main>
  );
}
