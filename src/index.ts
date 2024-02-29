export {};

import 'dotenv/config';

console.log(process.env.DB_USER); // 👉️ "bobby_hadz"
console.log(process.env.ENV); // 👉️ "test"
console.log(process.env.DB_PORT); // 👉️ "9999"
