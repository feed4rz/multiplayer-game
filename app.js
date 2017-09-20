/* Config */
try {
  global.config = require('./config.json');
} catch (ex) {
  throw 'Please, add valid config.json to the directory';
}

/* Dependencies */
const cluster = require('cluster');

if(cluster.isMaster){
  /* Master dependencies */
  const os = require('os');

  /* CPU core count */
  const cores = os.cpus();

  /* Forking a worker for each CPU core */
  for(let i = 0; i < cores.length; i++){
    cluster.fork();
  }

  /* Respawn dead worker */
  cluster.on('exit', (worker, code, signal) => {
    cluster.fork();
  });
} else {
  /* Requiring worker as a dependency */
  require('./worker.js');
}