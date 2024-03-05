'use server'
import { unstable_noStore as noStore, revalidatePath } from 'next/cache';
import { sql } from '@vercel/postgres';
import { TimerType } from './types';

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

export async function postTimer(prevState: { message: string; }, formData: FormData,) {
    // temporarily post all timers to one hardcoded  user until we approach auth
    const postData = { userId: '4f690fd8-2392-4857-910a-e8208d7a407e', title: formData.get('title') as string, length: formData.get('length') as string, fill: 0 }

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