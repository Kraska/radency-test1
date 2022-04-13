import { NOTE_SERVICE } from "../services/NoteService.js";
import { AbstractComponent } from "./AbstractComponent.js";
import { RemoveNoteModalLayout } from "./RemoveNoteModalLayout.js";


export class RemoveNoteComponent extends AbstractComponent {

    constructor(selector, note) {
        super(selector)

        this.note = note;
        this.modalId = `removeNoteModal_${note.id}`;
        this.removeButtonId = `removeNoteButton_${note.id}`

        this.layout = new RemoveNoteModalLayout(
            this.modalId, 
            'Removing Note', 
            this.note, 
            this.removeButtonId
        );
    }

    afterUpdate = () => {
        document.querySelector(`#${this.removeButtonId}`).onclick = this.onRemove;
    }

    getContent = () => {
        return this.layout.getContent();
    }

    onRemove = () => {
        bootstrap.Modal.getInstance(document.getElementById(this.modalId)).hide();
        NOTE_SERVICE.removeNote(this.note.id);  
    }
}