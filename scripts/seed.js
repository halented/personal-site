const { db } = require('@vercel/postgres');
const {
    timers,
    users,
} = require('../app/lib/seed-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "users" table if it doesn't exist
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS users (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          username VARCHAR(255) NOT NULL UNIQUE,
          password TEXT NOT NULL
        );
      `;

        console.log(`Created "users" table`);

        // Insert data into the "users" table
        const insertedUsers = await Promise.all(
            users.map(async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                return client.sql`
                INSERT INTO users (id, username, password)
                VALUES (${user.id}, ${user.username}, ${hashedPassword})
                ON CONFLICT (id) DO NOTHING;
                `;
            }),
        );

        console.log(`Seeded ${insertedUsers.length} users`);

        return {
            createTable,
            users: insertedUsers,
        };
    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}

async function seedTimers(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

        // Create the "timers" table if it doesn't exist
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS timers (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID NOT NULL,
        title VARCHAR(255) NOT NULL,
        length INT NOT NULL,
        fill INT NOT NULL
        );
    `;

        console.log(`Created "timers" table`);

        // Insert data into the "timers" table
        const insertedTimers = await Promise.all(
            timers.map(
                (timer) => client.sql`
          INSERT INTO timers (user_id, title, length, fill)
          VALUES (${timer.user_id}, ${timer.title}, ${timer.length}, ${timer.fill})
          ON CONFLICT (id) DO NOTHING;
        `,
            ),
        );

        console.log(`Seeded ${insertedTimers.length} timers`);

        return {
            createTable,
            timers: insertedTimers,
        };
    } catch (error) {
        console.error('Error seeding timers:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    await seedUsers(client);
    await seedTimers(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});