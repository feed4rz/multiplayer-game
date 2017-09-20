class Renderer {
  constructor(canvas, w, h, frames){
    /* Canvas */
    this.ctx = canvas.getContext('2d');

    /* Size */
    this.width = w;
    this.height = h;

    /* Rendering */
    this.frames = frames;

    setInterval(function(){
      this.tick();
    }.bind(this), 1000 / this.frames);

    /* Entity manager */
    this.entity_manager = new EntityManager(this.ctx);
  }

  /* 1 frame */
  tick(){
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.entity_manager.tick();
  }
}