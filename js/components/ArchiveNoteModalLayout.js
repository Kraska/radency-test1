import { AbstractModalLayout } from './AbstractModalLayout.js';

export class ArchiveNoteModalLayout extends AbstractModalLayout {

    constructor(id, title, note, okButtonId) {
        super(id, title);        
        this.note = note;
        this.okButtonId = okButtonId;
    }
    
    
    getOkButton = () => {
        return `<button type="button" id="${this.okButtonId}" class="btn btn-primary">Archive</button>`;
    }

    getBody = () => {
        return `
            <div class="mb-3">
                Are you sure you want to archive Note "${this.note.title}"?
            </div>`;
    }

}