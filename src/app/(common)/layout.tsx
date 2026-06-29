import Header from '@/components/layouts/Header';
import { ReactNode } from 'react';

type CommonLayoutProps = {
  children: ReactNode;
};

export default function CommonLayout({ children }: CommonLayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
