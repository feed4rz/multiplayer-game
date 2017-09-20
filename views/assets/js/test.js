let canvas;
let renderer;
let entity_manager;

let entity;
let entity1;
let entity2;
let entity3;

let i = 0;

window.onload = () => {
  canvas = document.getElementById('ctx');
  renderer = new Renderer(canvas, 600, 600, 60);
  
  entity = new Entity(50, 50, 100, 50, 0, '/img/texture.jpg', renderer);
  entity1 = new Entity(50, 50, 100, 50, 45, '/img/texture.jpg', renderer);
  entity2 = new Entity(50, 50, 100, 50, 90, '/img/texture.jpg', renderer);
  entity3 = new Entity(50, 50, 100, 50, 135, '/img/texture.jpg', renderer);

  setInterval(animate, 1000/60);
};

function animate(){
  i += 2;

  let value = i / 180 * Math.PI;

  entity.x = 100 + Math.sin(value)*50;
  entity.y = 100 + Math.cos(value)*50;
  entity.rotation = i % 360;

  entity1.x = 175 - Math.sin(value)*50;
  entity1.y = 175 - Math.cos(value)*50;

  entity2.x = 175 + Math.sin(value)*50;
  entity2.y = 175 + Math.cos(value)*50;

  entity3.x = 175 - Math.sin(value)*50;
  entity3.y = 175 - Math.cos(value)*50;
}