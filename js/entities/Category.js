export class Category {

    constructor(id, title, activeCounter = 0, archivedCounter = 0) {
        this.id = id;
        this.title = title;
        this.activeCounter = activeCounter;
        this.archivedCounter = archivedCounter;
    }

}