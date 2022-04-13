import { NotesLayout } from "./NotesLayout.js";
import { EVENT_MANAGER } from '../services/EventManager.js';
import { NOTE_SERVICE } from "../services/NoteService.js";
import { AbstractComponent } from "./AbstractComponent.js"; 
import { EditNoteComponent } from "./EditNoteComponent.js";

export class NotesComponent extends AbstractComponent {

    constructor(selector) {
        super(selector)

        this.editNoteComponents = NOTE_SERVICE.getNotes()
            .map(note => new EditNoteComponent('', note));

        this.layout = new NotesLayout(this.editNoteComponents);

        EVENT_MANAGER.subscribe(NOTE_SERVICE.EVENTS.CREATED, this.update);
        EVENT_MANAGER.subscribe(NOTE_SERVICE.EVENTS.UPDATED, () => { console.log('UPDATED'); this.update(); });
    }

    getContent = () => {
        return this.layout.getContent();
    }

    onUpdate = () => {
        this.editNoteComponents.forEach(component => component.onUpdate());
    }
}