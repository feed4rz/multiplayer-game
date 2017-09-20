# multiplayer-game
Dummy test project with an objective of creating a JavaScript canvas 2d engine for games and other projects.

## Warning
Script uses latest version of JavaScript that might not be available on all the devices. 

Please **do not use this library** in production.

## Install
Clone the repository and then do
```
npm install
```
That will install the dependencies for nodejs app that runs the website, in case you need it

If you only need to install engine library include /views/assets/js/lib/index.js in your html. Lib folder must be available in path /js/lib for browser to recognize the library.

## Example
Example code creates few entities and tests various features of the library using basic animation.
```JAVASCRIPT
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
```
