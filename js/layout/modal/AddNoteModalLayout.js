import { ModalLayout } from './ModalLayout.js';
import { NOTE_SERVICE } from '../../services/NoteService.js';

export class AddNoteModalLayout {

    constructor(categories) {
        this.categories = categories;

        this.titleInputId = 'addNoteTitle';
        this.contentInputId = 'addNoteContent';
        this.categoryInputId = 'addNoteCategory';
    }

    getContent = () => {
        const modelName = "addNoteModal";
        const addNoteModal = new ModalLayout(modelName, "Add Note", this.getBody());

        const onSave = () => {
            console.log('onSave!');
        }

        return `<div>
            ${addNoteModal.getContent()}
            <button 
                type="button" 
                onclick="${onSave}"
                class="btn btn-secondary float-end" 
                data-bs-toggle="modal" 
                data-bs-target="#${modelName}">
                    Create Note
            </button>
        </div>`;
    }

    getBody = () => {

        const onSaveFuncName = 'AddNoteModalLayoutOnSave';
        window[onSaveFuncName] = this.onSave;
    
        return `
            <div class="mb-3">
                <label for="${this.titleInputId}" class="form-label">Title</label>
                <input type="text" class="form-control" id="${this.titleInputId}" placeholder="Note title">
            </div>
            <div class="mb-3">
                ${this.getCategoriesSelect()}
            </div>
            <div class="mb-3">
                <label for="${this.contentInputId}" class="form-label">Content</label>
                <textarea class="form-control" id="${this.contentInputId}" rows="3"></textarea>
            </div>
            <div class="mb-4">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cansel</button>
                <button type="button" onclick="${onSaveFuncName}()" class="btn btn-primary">Save</button>
            </div>
            `;
    }

    getCategoriesSelect = () => {
        const catToOption = (cat) => `<option value="${cat.id}">${cat.title}</option>`;
        return `
            <label for="${this.categoryInputId}" class="form-label">Category</label>
            <select class="form-select" id="${this.categoryInputId}">
                ${this.categories.map(catToOption).join("\n")}
            </select>`;
    }

    onSave = (e) => {
        let title = document.querySelector(`#${this.titleInputId}`).value;
        let category = document.querySelector(`#${this.categoryInputId}`).value;
        let content = document.querySelector(`#${this.contentInputId}`).value;

        NOTE_SERVICE.addNewNote(title, category, content);        
    }

}