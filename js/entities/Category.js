import { EVENT_MANAGER } from "../services/EventManager.js";
import { EVENTS } from "../services/events.js";

export class Category {

    constructor(id, title, activeCounter = 0, archivedCounter = 0) {
        this.id = id;
        this.title = title;
        this.activeCounter = activeCounter;
        this.archivedCounter = archivedCounter;
    }

    decreaseActiveCounter = () => {
        // console.log(this.id, 'decreaseActiveCounter');
        this.activeCounter--;
        EVENT_MANAGER.notify(EVENTS.CategoryService.UPDATED);
    }

    increaseActiveCounter = () => {
        // console.log(this.id, 'increaseActiveCounter');
        this.activeCounter++;
        EVENT_MANAGER.notify(EVENTS.CategoryService.UPDATED);
    }

    decreaseArchivedCounter = () => {
        // console.log(this.id, 'decreaseArchivedCounter');
        this.archivedCounter--;
        EVENT_MANAGER.notify(EVENTS.CategoryService.UPDATED);
    }

    increaseArchivedCounter = () => {
        // console.log(this.id, 'increaseArchivedCounter');
        this.archivedCounter++;
        EVENT_MANAGER.notify(EVENTS.CategoryService.UPDATED);
    }
}