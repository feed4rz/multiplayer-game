var socket;
var canvas;
var renderer;
var ENTITIES = {};
var keys = { up : false, down : false, left : false, right : false };

window.onload = function(){
  canvas = document.getElementById('ctx');
  renderer = new Renderer(canvas, 600, 600, 60);

  socket = io("http://:3001");

  socket.on('connect', function(){
    console.log('connected');
  });

  socket.on('remove_entity', function(id){
    ENTITIES[id].remove();
    delete ENTITIES[id];
  });
  
  socket.on('entities', function(new_entities){
    for(var key in new_entities){
      if(ENTITIES[key]){
        ENTITIES[key].x = new_entities[key].x;
        ENTITIES[key].y = new_entities[key].y;
        ENTITIES[key].texture.src = new_entities[key].texture;
      } else {
        ENTITIES[key] = new Entity(new_entities[key].x, new_entities[key].y, 50, 50, 0, new_entities[key].texture, renderer);
      }
    }
  });

  window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
  
    if(key == 38){
      keys.up = false;
    } else if(key == 40){
      keys.down = false;
    } else if(key == 37){
      keys.left = false;
    } else if(key == 39){
      keys.right = false;
    }
  
    socket.emit('key_update', keys);
  }
  
  window.onkeydown = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
  
    if(key == 38){
      keys.up = true;
    } else if(key == 40){
      keys.down = true;
    } else if(key == 37){
      keys.left = true;
    } else if(key == 39){
      keys.right = true;
    }
  
    console.log(keys);
  
    socket.emit('key_update', keys);
  }
};