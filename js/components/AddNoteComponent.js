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
                dateId: 'addNoteDate', 
                saveButtonId: 'addNoteSaveButton'
            },
            CATEGORY_SERVICE.getCategories()
        );
    }

    afterUpdate = () => {
        datepicker(`#${this.layout.dateId}`, { onSelect: this.onSelect });
        document.querySelector(`#${this.layout.saveButtonId}`).onclick = this.onSave;
    }

    onSelect = (instance) => {
        this.selectedDate = instance.dateSelected;
    }

    getContent = () => {
        return `
            ${this.layout.getContent()} 
            <div class="container">
                <button 
                    type="button" 
                    class="btn float-end" 
                    data-bs-toggle="modal" 
                    data-bs-target="#${this.layout.id}">
                        Create Note
                </button>
            </div>`;
    }

    onSave = () => {
        let title = document.querySelector(`#${this.layout.titleId}`).value;
        let categoryId = document.querySelector(`#${this.layout.categoryId}`).value;
        let content = document.querySelector(`#${this.layout.contentId}`).value;
        let date = this.selectedDate || null;

        bootstrap.Modal.getInstance(document.getElementById(this.modalId)).hide();

        NOTE_SERVICE.addNewNote(title, categoryId, content, date);  
    }
}