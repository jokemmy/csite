
const Koa = require( 'koa' );
const next = require( 'next' );
const logger = require( 'koa-logger' );
const koabody = require( 'koa-body' );
const Router = require( 'koa-router' );
const compress = require( 'koa-compress' );
const routers = require( './router' );


const port = parseInt( process.env.PORT, 10 ) || 3000;
const env = process.env.NODE_ENV;
const dev = env !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare().then(() => {

  const server = new Koa();
  const router = new Router();

  if ( dev ) {
    server.use( logger());
  }

  server.use( koabody());
  server.use( compress());

  router.get( '/text', async ctx => {
    await app.render( ctx.req, ctx.res, '/text', ctx.query );
    ctx.respond = false;
  });

  routers( server, router, app, handle );

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
