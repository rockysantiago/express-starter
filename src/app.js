import express from 'express';

const app = express();

console.log('Test linter');

app.get('/', (req, res) => res.send('Hello World!'));

export default app;
