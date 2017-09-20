class Entity {
  constructor(x, y, w, h, texture_path, renderer) {
    /* Canvas */
    this.ctx = renderer.entity_manager.ctx;

    /* Entity id */
    this.id = Date.now();

    /* Entity position */
    this.x = x;
    this.y = y;

    /* Rectangular texture */
    this.texture = new Image();
    this.texture.src = texture_path;

    /* Rectangular size */
    this.width = w;
    this.height = h;

    /* Entity manager */
    this.entity_manager = renderer.entity_manager;

    this.entity_manager.add(this);
  }

  remove(){
    this.entity_manager.remove(this);
  }

  tick(){
    this.ctx.drawImage(this.texture, this.x, this.y, this.width, this.height);
  }
}