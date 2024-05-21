import { ReactNode } from 'react';
import Header from '@/components/organisms/header';
import Sidebar from '@/components/organisms/sidebar';

type Props = {
  children: ReactNode;
};

export default function Dashboard({ children }: Props) {
  return (
    <div className="flex h-full flex-col">
      <Header />
      <div className="flex h-full flex-row">
        <Sidebar />
        <div>{children}</div>
      </div>
    </div>
  );
}
