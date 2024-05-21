import HeaderUser from '../HeaderUser';
import { signOut } from '@/libs/auth';
import Button from '@/components/atom/button';

export default function Header() {
  return (
    <div className="flex justify-between bg-white p-8">
      <div>
        <span>ろるめいと</span>
      </div>
      <div className="flex items-center gap-8">
        <HeaderUser />
        <form action={signOut}>
          <Button>Sign out</Button>
        </form>
      </div>
    </div>
  );
}
