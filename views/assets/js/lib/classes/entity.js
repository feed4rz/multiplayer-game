class Entity {
  constructor(x, y, w, h, rotation, texture_path, renderer) {
    /* Canvas */
    this.ctx = renderer.entity_manager.ctx;

    /* Entity id */
    this.id = Date.now();

    /* Entity position */
    this.x = x;
    this.y = y;
    this.rotation = rotation;

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
    this.ctx.save();

    this.ctx.translate(this.x + this.width / 2, this.y + this.height / 2);

    this.ctx.rotate(this.rotation / 180 * Math.PI);

    this.ctx.translate(-this.width / 2, -this.height / 2);

    this.ctx.drawImage(this.texture, 0, 0, this.width, this.height);

    this.ctx.restore();
  }
}