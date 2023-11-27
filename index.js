const os  = require('node:os');
require('dotenv').config();
const Koa = require('koa');
const app = new Koa();

const APP_PORT = process.env.APP_PORT;
app.use(async ctx => {
    ctx.body = `Hello World!\nhost:${os.hostname()}`;
});

app.listen(APP_PORT);
console.log('Application was started on port:', APP_PORT);
