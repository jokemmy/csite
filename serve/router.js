

function routers( server, router, app, handle ) {

  [ '/', '/scene', '/hardware', '/store', '/about' ].forEach(( path ) => {
    const entry = path === '/' ? '/index' : path;
    router.get( path, async ctx => {
      await app.render( ctx.req, ctx.res, entry, ctx.query );
      ctx.respond = false;
    });
  });

  // 添加服务端简洁链接支持
  router.get( '/hardware/:category', async ctx => {
    const params = { category: ctx.params.category };
    await app.render( ctx.req, ctx.res, '/hardware', params );
    ctx.respond = false;
  });

  router.get( '/store/:code', async ctx => {
    const params = { code: ctx.params.code };
    await app.render( ctx.req, ctx.res, '/store/goods', params );
    ctx.respond = false;
  });

  router.get( '/scene/:id', async ctx => {
    const params = { id: ctx.params.id };
    await app.render( ctx.req, ctx.res, '/scene', params );
    ctx.respond = false;
  });

  // Default catch-all handler to allow Next.js to handle all other routes
  router.get( '*', async ctx => {
    await handle( ctx.req, ctx.res );
    ctx.respond = false;
  });

  server.use( async ( ctx, next ) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use( router.routes());
  server.use( router.allowedMethods());

}

module.exports = routers;
