import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Card({ children }: Props) {
  return <div className="rounded border border-gray-100 bg-white p-8 shadow">{children}</div>;
}
