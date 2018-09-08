const Koa = require('koa');
const { resolve } = require('path');
const app = new Koa();
const views = require('koa-views');
const { connect } = require('./database/init');

(async () => {
    await connect()
})()

app.use(views(resolve(__dirname, './views'), {
    extension: 'pug'
}))

app.use(async (ctx, next) => {
    await ctx.render('index', {
        you: 'luke'
    })
})

app.listen("4455");