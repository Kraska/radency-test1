import { AddNoteModalLayout } from "./AddNoteModalLayout.js";
import { CATEGORY_SERVICE } from "../services/CategoryService.js";
import { NOTE_SERVICE } from "../services/NoteService.js";
import { AbstractComponent } from "./AbstractComponent.js";


export class AddNoteComponent extends AbstractComponent {

    constructor(selector) {
        super(selector)

        this.titleInputId = 'addNoteTitle';
        this.contentInputId = 'addNoteContent';
        this.categoryInputId = 'addNoteCategory';
        this.saveButtonId = 'addNoteSaveButton'

        this.layout = new AddNoteModalLayout(
            CATEGORY_SERVICE.getCategories(),
            this.titleInputId,
            this.contentInputId,
            this.categoryInputId,
            this.saveButtonId
        );
    }

    onRender = () => {
        document.querySelector(`#${this.saveButtonId}`).onclick = this.onSave;
    }

    getContent = () => {
        return `
            ${this.layout.getContent()} 
            <button 
                type="button" 
                class="btn btn-secondary float-end" 
                data-bs-toggle="modal" 
                data-bs-target="#${this.layout.getName()}">
                    Create Note3
            </button>`;
    }

    onSave = () => {
        let title = document.querySelector(`#${this.titleInputId}`).value;
        let category = document.querySelector(`#${this.categoryInputId}`).value;
        let content = document.querySelector(`#${this.contentInputId}`).value;

        NOTE_SERVICE.addNewNote(title, category, content);  
    }
}