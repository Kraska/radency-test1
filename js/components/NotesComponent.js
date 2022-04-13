import { NotesLayout } from "./NotesLayout.js";
import { EVENT_MANAGER } from '../services/EventManager.js';
import { NOTE_SERVICE } from "../services/NoteService.js";
import { AbstractComponent } from "./AbstractComponent.js"; 
import { EditNoteComponent } from "./EditNoteComponent.js";
import { RemoveNoteComponent } from "./RemoveNoteComponent.js";
import { ArchiveNoteComponent } from "./ArchiveNoteComponent.js";

export class NotesComponent extends AbstractComponent {

    constructor(selector) {
        super(selector)

        EVENT_MANAGER.subscribe(NOTE_SERVICE.EVENTS.CREATED, this.update);
        EVENT_MANAGER.subscribe(NOTE_SERVICE.EVENTS.UPDATED, () => this.update());
        EVENT_MANAGER.subscribe(NOTE_SERVICE.EVENTS.REMOVED, () => this.update());
        EVENT_MANAGER.subscribe(NOTE_SERVICE.EVENTS.ARCHIVED, () => this.update());
    }

    getContent = () => {
        return this.layout.getContent();
    }

    beforeUpdate = () => {
        this.notes = NOTE_SERVICE.getActiveNotes();

        this.editNoteComponents = this.notes
            .map(note => new EditNoteComponent('', note));

        this.removeNoteComponents = this.notes
            .map(note => new RemoveNoteComponent('', note));

        this.archiveNoteComponents = this.notes
            .map(note => new ArchiveNoteComponent('', note));

        this.layout = new NotesLayout(
            this.notes,
            this.editNoteComponents, 
            this.removeNoteComponents,
            this.archiveNoteComponents
        );      

        // console.log(this.notes);
    }

    afterUpdate = () => {
        this.editNoteComponents.forEach(component => component.afterUpdate());
        this.removeNoteComponents.forEach(component => component.afterUpdate())
        this.archiveNoteComponents.forEach(component => component.afterUpdate())
    }
}