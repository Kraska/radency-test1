export class Note {

    constructor(id, title, category, content, created, date = null, dates = [], isActive = true) {
        this.id = id;
        this.title = title;
        this.created = created;
        this.category = category;
        this.content = content;
        this.date = date;
        this.dates = dates;
        this.isActive = isActive;
    }

    archive = () => {
        this.isActive = false;
    }

    createdStr = () => {
        return this.created
            .toLocaleDateString('en-us', { day:"numeric", year:"numeric", month:"short"});
    }

    datesStr = () => {
        return this.dates
            .map(date => date.toLocaleDateString('en-us'))
            .join(', ');
    }
}