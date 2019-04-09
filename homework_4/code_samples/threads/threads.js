//SET UV_THREADPOOL_SIZE=2 && node threads.js
//SET UV_THREADPOOL_SIZE=5 && node threads.js

const crypto = require('crypto');

const start_time = Date.now();

crypto.pbkdf2("A", "B", 100000, 512, 'sha512', () => {
    console.log(`1. ${Date.now() - start_time}`);
})

crypto.pbkdf2("A", "B", 100000, 512, 'sha512', () => {
    console.log(`2. ${Date.now() - start_time}`);
})

crypto.pbkdf2("A", "B", 100000, 512, 'sha512', () => {
    console.log(`3. ${Date.now() - start_time}`);
})

crypto.pbkdf2("A", "B", 100000, 512, 'sha512', () => {
    console.log(`4. ${Date.now() - start_time}`);
})

crypto.pbkdf2("A", "B", 100000, 512, 'sha512', () => {
    console.log(`5. ${Date.now() - start_time}`);
})
