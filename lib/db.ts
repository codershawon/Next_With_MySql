import mysql, { Connection } from 'mysql2/promise';

// Explicitly type 'connection' and initialize it to 'null'
let connection: Connection | null = null;

export const createConnection = async (): Promise<Connection> => {
    if (!connection) {
        connection = await mysql.createConnection({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME
        });
    }
    return connection;
};

