'use client';

import Card from '@/components/molecules/card';
import Button from '@/components/atom/button';
import { signInWithGoogle } from '@/libs/auth';

export default function Page() {
  return (
    <div className="flex h-full items-center justify-center">
      <Card>
        <form action={signInWithGoogle}>
          <Button type="submit">
            <span>Sign in with Google</span>
          </Button>
        </form>
      </Card>
    </div>
  );
}
