import { AddNoteModalLayout } from "../layout/modal/AddNoteModalLayout.js";
import { CATEGORY_SERVICE } from "../services/CategoryService.js";
import { NOTE_SERVICE } from "../services/NoteService.js";


export class AddNoteComponent {

    constructor(selector) {
        this.selector = selector;

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

    render = () => {
        this.update();
        this.onRender();
    }

    update = () => {
        document.querySelector(this.selector).innerHTML = this.layout.getContent();
    }

    onRender = () => {
        document.querySelector(`#${this.saveButtonId}`).onclick = this.onSave;
    }

    onSave = () => {
        let title = document.querySelector(`#${this.titleInputId}`).value;
        let category = document.querySelector(`#${this.categoryInputId}`).value;
        let content = document.querySelector(`#${this.contentInputId}`).value;

        NOTE_SERVICE.addNewNote(title, category, content);  
    }
}