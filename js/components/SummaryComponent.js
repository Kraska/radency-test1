import { EVENT_MANAGER } from '../services/EventManager.js';
import { AbstractComponent } from "./AbstractComponent.js"; 
import { CATEGORY_SERVICE } from "../services/CategoryService.js";
import { SummaryLayout } from "./SummaryLayout.js";
import { EVENTS } from '../services/events.js';

export class SummaryComponent extends AbstractComponent {

    constructor(selector) {
        super(selector)

        EVENT_MANAGER.subscribe(EVENTS.CategoryService.UPDATED, this.update);
    }

    getContent = () => {
        return this.layout.getContent();
    }

    beforeUpdate = () => {
        this.categories = CATEGORY_SERVICE.getCategories();
        this.layout = new SummaryLayout(this.categories);
    }
}