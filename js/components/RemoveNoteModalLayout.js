import { AbstractModalLayout } from './AbstractModalLayout.js';

export class RemoveNoteModalLayout extends AbstractModalLayout {

    constructor(id, title, note, removeButtonId) {
        super(id, title);        
        this.note = note;
        this.removeButtonId = removeButtonId;
    }
    
    
    getOkButton = () => {
        return `<button type="button" id="${this.removeButtonId}" class="btn btn-primary">Delete</button>`;
    }

    getBody = () => {
        return `
            <div class="mb-3">
                Are you sure you want to delete Note "${this.note.title}"?
            </div>`;
    }

}