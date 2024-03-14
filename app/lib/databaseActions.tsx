'use server'
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { sql } from '@vercel/postgres';
import { HttpTimerType, TimerType } from './types';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function postTimer(postData: HttpTimerType) {
    // temporarily post all timers to one hardcoded  user until we approach auth
    if (!postData.userId) {
        postData = { ...postData, userId: '4f690fd8-2392-4857-910a-e8208d7a407e' }
    }

    try {
        await sql`
            INSERT INTO timers (user_id, title, length, fill)
            VALUES (${postData.userId}, ${postData.title}, ${postData.length}, ${postData.fill})
            ON CONFLICT (id) DO NOTHING;
          `;

        revalidatePath("/timers");

        return { message: 'success' }
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to post new timer.');
    }
}

export async function fetchTimers() {
    // Prevents the response from being cached.
    noStore();

    try {
        const data = await sql<TimerType>`SELECT * FROM timers`;
        return data.rows;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch timer data.');
    }
}

export async function updateTimer(timer: TimerType) {
    try {
        await sql`
            UPDATE timers SET title = ${timer.title}, length = ${timer.length}, fill = ${timer.fill} WHERE id = ${timer.id}
        `;

        revalidatePath('/timers');
        return { message: 'success' };
    }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error(`Failed to update timer ${timer.title}. See browser console for details.`);
    }
}

export async function deleteTimer(timerId: string) {
    try {
        await sql`
            DELETE FROM timers WHERE id = ${timerId}
        `;

        revalidatePath("/timers");

        return { message: 'success' };
    }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error(`Failed to delete timer ${timerId}.`);
    }
}

export async function authenticate(prevState: string | undefined, formData: FormData) {
    try {
      await signIn('credentials', formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }
