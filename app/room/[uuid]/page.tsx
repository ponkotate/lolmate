import Dashboard from '@/components/templates/dashboard';
import { notFound } from "next/navigation";

export default function Page({ params }: { params: { uuid: string } }) {
 
  const room = true

  if (!room) {
    return notFound();
  }

  return (
    <Dashboard>
      <div>RoomID: {params.uuid}</div>
    </Dashboard>
  );
}