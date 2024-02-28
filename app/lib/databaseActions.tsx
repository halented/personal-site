'use server'
import { unstable_noStore as noStore } from 'next/cache';
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