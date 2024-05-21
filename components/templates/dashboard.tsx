import { ReactNode } from 'react';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';

type Props = {
  children: ReactNode;
};

export default function Dashboard({ children }: Props) {
  return (
    <div className="flex h-screen flex-col bg-gray-100">
      <Header />
      <div className="flex h-full flex-row">
        <Sidebar />
        <div>{children}</div>
      </div>
    </div>
  );
}
