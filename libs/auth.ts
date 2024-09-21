'use server';

import * as Auth from '@/auth';

export async function signInWithGoogle() {
  return await Auth.signIn('google', { redirectTo: '/' });
}

export async function signOut() {
  return await Auth.signOut({ redirectTo: '/login' });
}
