import { NotesLayout } from "./NotesLayout.js";
import { EVENT_MANAGER } from '../services/EventManager.js';
import { NOTE_SERVICE } from "../services/NoteService.js";
import { AbstractComponent } from "./AbstractComponent.js"; 
import { EditNoteComponent } from "./EditNoteComponent.js";
import { RemoveNoteComponent } from "./RemoveNoteComponent.js";

export class NotesComponent extends AbstractComponent {

    constructor(selector) {
        super(selector)

        this.editNoteComponents = NOTE_SERVICE.getNotes()
            .map(note => new EditNoteComponent('', note));

        this.removeNoteComponents = NOTE_SERVICE.getNotes()
            .map(note => new RemoveNoteComponent('', note));

        this.layout = new NotesLayout(this.editNoteComponents, this.removeNoteComponents);

        EVENT_MANAGER.subscribe(NOTE_SERVICE.EVENTS.CREATED, this.update);
        EVENT_MANAGER.subscribe(NOTE_SERVICE.EVENTS.UPDATED, () => this.update());
        EVENT_MANAGER.subscribe(NOTE_SERVICE.EVENTS.REMOVED, () => this.update());
    }

    getContent = () => {
        return this.layout.getContent();
    }

    onUpdate = () => {
        this.editNoteComponents.forEach(component => component.onUpdate());
        this.removeNoteComponents.forEach(component => component.onUpdate())
    }
}