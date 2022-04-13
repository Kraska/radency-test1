import { AddEditNoteModalLayout } from "./AddEditNoteModalLayout.js";
import { CATEGORY_SERVICE } from "../services/CategoryService.js";
import { NOTE_SERVICE } from "../services/NoteService.js";
import { AbstractComponent } from "./AbstractComponent.js";


export class EditNoteComponent extends AbstractComponent {

    constructor(selector, note) {
        super(selector)

        this.note = note;

        this.modalId = `editNoteModal_${note.id}`;

        this.layout = new AddEditNoteModalLayout(
            this.modalId, 
            'Updating Note',
            {
                titleId: `editNoteTitle_${note.id}`, 
                contentId: `editNoteContent_${note.id}`, 
                categoryId: `editNoteCategory_${note.id}`, 
                saveButtonId: `editNoteSaveButton_${note.id}`
            },
            CATEGORY_SERVICE.getCategories(),
            note
        );
    }

    onUpdate = () => {
        document.querySelector(`#${this.layout.saveButtonId}`).onclick = this.onSave;
    }

    getContent = () => {
        return this.layout.getContent();
    }

    onSave = () => {

        let title = document.querySelector(`#${this.layout.titleId}`).value;
        let category = document.querySelector(`#${this.layout.categoryId}`).value;
        let content = document.querySelector(`#${this.layout.contentId}`).value;

        bootstrap.Modal.getInstance(document.getElementById(this.modalId)).hide();

        NOTE_SERVICE.updateNote(this.note.id, title, category, content);  
    }
}