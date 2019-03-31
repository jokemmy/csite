
const Koa = require( 'koa' );
const next = require( 'next' );
const logger = require( 'koa-logger' );
const koabody = require( 'koa-body' );
const Router = require( 'koa-router' );
const compress = require( 'koa-compress' );


const port = parseInt( process.env.PORT, 10 ) || 3000;
const env = process.env.NODE_ENV;
const dev = env !== 'production';
const app = next({ dir: '.', dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {

  const server = new Koa();
  const router = new Router();

  if ( dev ) {
    server.use( logger());
  }

  server.use( koabody());
  server.use( compress());

  // 添加服务端简洁链接支持
  router.get( '/hardware/:type', async ctx => {
    await app.render( ctx.req, ctx.res, '/hardware', ctx.query );
    ctx.respond = false;
  });

  router.get( '/scene/:type', async ctx => {
    await app.render( ctx.req, ctx.res, '/scene', ctx.query );
    ctx.respond = false;
  });

  router.get( '/store/:type', async ctx => {
    await app.render( ctx.req, ctx.res, '/store', ctx.query );
    ctx.respond = false;
  });

  // Default catch-all handler to allow Next.js to handle all other routes
  router.get( '*', async ctx => {
    await handle( ctx.req, ctx.res );
    ctx.respond = false;
  });

  server.use( router.routes());
  server.use( router.allowedMethods());

  server.use(( ctx, next ) => {
    ctx.res.statusCode = 200;
    return next();
  });

  server.listen( port, err => {
    if ( err ) {
      throw err;
    }
    console.log( `> Ready on port ${port} [${env}]` );
  });
}).catch( err => {
  console.log( 'An error occurred, unable to start the server' );
  console.log( err );
});
