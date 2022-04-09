export class Note {

    constructor(id, title, created, category, content, dates = [], isActive = true) {
        this.id = id;
        this.title = title;
        this.created = created;
        this.category = category;
        this.content = content;
        this.dates = dates;
        this.isActive = isActive;
    }

}