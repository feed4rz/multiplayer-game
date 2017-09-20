class EntityManager {
  constructor(ctx){
    /* Canvas */
    this.ctx = ctx;

    /* Entitites */
    this.entities = [];
  }

  add(entity){
    this.entities.push(entity);
  }

  remove(entity){
    this.entities.splice(this.entities.indexOf(entity), 1);
  }

  tick(){
    for(let i = 0; i < this.entities.length; i++){
      this.entities[i].tick();
    }
  }
  
}