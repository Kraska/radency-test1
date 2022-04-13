import { AbstractModalLayout } from './AbstractModalLayout.js';

export class AddEditNoteModalLayout extends AbstractModalLayout {

    constructor(
            id,
            title,
            { titleId, contentId, categoryId, saveButtonId }, 
            categories, 
            note = { title: '', category: { id: '', title: ''}, content: '' }
        ) {
            
        super(id, title);
        
        this.categories = categories;

        this.titleId = titleId;
        this.contentId = contentId;
        this.categoryId = categoryId;
        this.saveButtonId = saveButtonId;
        this.note = note;
    }
    
    
    getOkButton = () => {
        return `<button type="button" id="${this.saveButtonId}" class="btn btn-primary">Save</button>`;
    }


    getBody = () => {
        return `
            <div class="mb-3">
                <label for="${this.titleId}" class="form-label">Title</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="${this.titleId}" 
                    value="${this.note.title}"
                    placeholder="Note title">
            </div>
            <div class="mb-3">
                ${this.getCategoriesSelect(this.note.category.id)}
            </div>
            <div class="mb-3">
                <label for="${this.contentId}" class="form-label">Content</label>
                <textarea class="form-control" id="${this.contentId}" rows="3">${this.note.content}</textarea>
            </div>`;
    }

    getCategoriesSelect = (selectedId) => {
        const catToOption = (cat) => 
            `<option ${cat.id == selectedId ? 'selected': ''} value="${cat.id}">${cat.title}</option>`;
        return `
            <label for="${this.categoryId}" class="form-label">Category</label>
            <select class="form-select" id="${this.categoryId}">
                ${this.categories.map(catToOption).join("\n")}
            </select>`;
    }
}