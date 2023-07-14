"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConnection = void 0;
const pg_1 = require("pg");
async function getConnection() {
    const client = new pg_1.Client({
        host: 'localhost',
        port: 5432,
        user: 'jzlbornoz',
        password: 'fatima17',
        database: 'TOTYSports'
    });
    await client.connect();
    console.log(client);
    return client;
}
exports.getConnection = getConnection;
