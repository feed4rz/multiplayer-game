/* Worker dependencies */
var express = require('express');
var helmet = require('helmet');
var io = require('socket.io').listen(3001);

/* ExpressJS stuff */
var app = express();

/* Setting up views */
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views/assets'));
app.set('views', __dirname + '/views');

/* Helmet middleware */
app.use(helmet());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

app.get('/', function(req, res){
  res.render('index');
});

io.on('connection', function(socket){
  newentity(socket.id);

  socket.emit('entities', entities);

  socket.on('key_update', function(data){
    if(data.up){
      entities[socket.id].dy = -1;
    } else {
      entities[socket.id].dy = 0;
    }

    if(data.down){
      entities[socket.id].dy = 1;
    } else if(!data.up){
      entities[socket.id].dy = 0;
    }

    if(data.left){
      entities[socket.id].dx = -1;
    } else {
      entities[socket.id].dx = 0;
    }

    if(data.right){
      entities[socket.id].dx = 1;
    } else if(!data.left){
      entities[socket.id].dx = 0;
    }
  });

  socket.on('yoba_activate', function(){
    entities[socket.id].texture = '/img/yoba.png';
  });

  socket.on('disconnect', function(){
    removeentity(socket.id);
  });
});

var entities = {};

function newentity(id){
  entities[id] = {
    player_id : id,
    id : Date.now(),
    x : 100,
    y : 100,
    dx : 0,
    dy : 0,
    texture : '/img/texture.jpg'
  };
}

function removeentity(id){
  delete entities[id];

  io.emit('remove_entity', id);
}

function tick(){
  for(var i in entities){
    if(entities[i].dx == 0 && entities[i].dy == 0) continue;
    entities[i].x += entities[i].dx;
    entities[i].y += entities[i].dy;
  }

  io.emit('entities', entities);
}

setInterval(tick, 1000/60);