import { AddEditNoteModalLayout } from "./AddEditNoteModalLayout.js";
import { CATEGORY_SERVICE } from "../services/CategoryService.js";
import { NOTE_SERVICE } from "../services/NoteService.js";
import { AbstractComponent } from "./AbstractComponent.js";


export class AddNoteComponent extends AbstractComponent {

    constructor(selector) {
        super(selector)

        this.modalId = 'addNoteModal';

        this.layout = new AddEditNoteModalLayout(
            this.modalId, 
            'Creating new Note',
            {
                titleId: 'addNoteTitle', 
                contentId: 'addNoteContent', 
                categoryId: 'addNoteCategory', 
                saveButtonId: 'addNoteSaveButton'
            },
            CATEGORY_SERVICE.getCategories()
        );
    }

    onUpdate = () => {
        document.querySelector(`#${this.layout.saveButtonId}`).onclick = this.onSave;
    }

    getContent = () => {
        return `
            ${this.layout.getContent()} 
            <button 
                type="button" 
                class="btn btn-secondary float-end" 
                data-bs-toggle="modal" 
                data-bs-target="#${this.layout.id}">
                    Create Note3
            </button>`;
    }

    onSave = () => {
        let title = document.querySelector(`#${this.layout.titleId}`).value;
        let category = document.querySelector(`#${this.layout.categoryId}`).value;
        let content = document.querySelector(`#${this.layout.contentId}`).value;
        
        bootstrap.Modal.getInstance(document.getElementById(this.modalId)).hide();

        NOTE_SERVICE.addNewNote(title, category, content);  
    }
}