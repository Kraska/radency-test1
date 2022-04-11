import { NotesLayout } from "../layout/NotesLayout.js";
import { CATEGORY_SERVICE } from "../services/CategoryService.js";
import { EVENT_MANAGER } from '../services/EventManager.js';
import { NOTE_SERVICE } from "../services/NoteService.js";
import { AbstractComponent } from "./AbstractComponent.js"; 


export class NotesComponent extends AbstractComponent {

    constructor(selector) {
        super(selector)

        this.layout = new NotesLayout(CATEGORY_SERVICE.getCategories());

        EVENT_MANAGER.subscribe(NOTE_SERVICE.EVENTS.CREATED, this.onAddNote)
    }

    getContent = () => {
        return this.layout.getContent();
    }

    onAddNote = () => {
        this.update();
    }
}