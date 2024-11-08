const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async function () {
  const server = Hapi.Server(
    {
      port : '5000',
      host : process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    });

  server.route(routes);


  await server.start();

  console.log(`Server berjalan pada ${server.info.uri}`);


};

init();