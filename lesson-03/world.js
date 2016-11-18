class World {

    constructor (){
        this.entities = [];
    }

    addEntity(entity) {
        this.entities.push(entity);
    }

    render (ctx) {
        this.entities.forEach( entity => entity.render(ctx));
    }

    update(timeElapsed) {
        this.entities.forEach( entity => entity.update(timeElapsed));
    }
}
