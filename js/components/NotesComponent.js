import { NotesLayout } from "../layout/NotesLayout.js";
import { CATEGORY_SERVICE } from "../services/CategoryService.js";
import { EVENT_MANAGER } from '../services/EventManager.js';
import { NOTE_SERVICE } from "../services/NoteService.js";


export class NotesComponent {

    constructor(selector) {
        this.selector = selector;

        this.layout = new NotesLayout(CATEGORY_SERVICE.getCategories());

        EVENT_MANAGER.subscribe(NOTE_SERVICE.EVENTS.CREATED, this.onAddNote)
    }

    render = () => {
        this.update();
    }

    update = () => {
        document.querySelector(this.selector).innerHTML = this.layout.getContent();
    }

    onAddNote = () => {
        this.update();
    }
}