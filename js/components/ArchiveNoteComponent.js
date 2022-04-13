import { NOTE_SERVICE } from "../services/NoteService.js";
import { AbstractComponent } from "./AbstractComponent.js";
import { ArchiveNoteModalLayout } from "./ArchiveNoteModalLayout.js";


export class ArchiveNoteComponent extends AbstractComponent {

    constructor(selector, note) {
        super(selector)

        this.note = note;
        this.modalId = `archiveNoteModal_${note.id}`;
        this.okButtonId = `archiveNoteButton_${note.id}`

        this.layout = new ArchiveNoteModalLayout(
            this.modalId, 
            'Archiving Note', 
            this.note, 
            this.okButtonId
        );
    }

    afterUpdate = () => {
        document.querySelector(`#${this.okButtonId}`).onclick = this.onArchive;
    }

    getContent = () => {
        return this.layout.getContent();
    }

    onArchive = () => {
        bootstrap.Modal.getInstance(document.getElementById(this.modalId)).hide();
        NOTE_SERVICE.archiveNote(this.note.id);  
    }
}