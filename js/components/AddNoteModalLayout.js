import { AbstractModalLayout } from './AbstractModalLayout.js';

export class AddNoteModalLayout extends AbstractModalLayout {

    constructor(categories, titleInputId, contentInputId, categoryInputId, saveButtonId) {
        super();
        
        this.categories = categories;

        this.titleInputId = titleInputId;
        this.contentInputId = contentInputId;
        this.categoryInputId = categoryInputId;
        this.saveButtonId = saveButtonId;
    }
    
    getName = () => {
        return 'addNoteModal';
    }

    getTitle = () => {
        return "Creating new Note";
    }
    
    getOkButton = () => {
        return `<button type="button" class="btn btn-primary">Ok</button>`;
    }

    getBody = () => {
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
                <button type="button" id="${this.saveButtonId}" class="btn btn-primary">Save</button>
            </div>`;
    }

    getCategoriesSelect = () => {
        const catToOption = (cat) => `<option value="${cat.id}">${cat.title}</option>`;
        return `
            <label for="${this.categoryInputId}" class="form-label">Category</label>
            <select class="form-select" id="${this.categoryInputId}">
                ${this.categories.map(catToOption).join("\n")}
            </select>`;
    }
}