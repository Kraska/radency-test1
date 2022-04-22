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
                dateId: `editNoteDate_${note.id}`, 
                saveButtonId: `editNoteSaveButton_${note.id}`
            },
            CATEGORY_SERVICE.getCategories(),
            note
        );

        this.selectedDate = note.date;
    }

    afterUpdate = () => {
        datepicker(
            `#${this.layout.dateId}`, 
            { onSelect: this.onSelect, dateSelected: this.selectedDate }
        );
        document.querySelector(`#${this.layout.saveButtonId}`).onclick = this.onSave;
    }

    onSelect = (instance) => {
        this.selectedDate = instance.dateSelected;
    }

    getContent = () => {
        return this.layout.getContent();
    }

    onSave = () => {

        let title = document.querySelector(`#${this.layout.titleId}`).value;
        let categoryId = document.querySelector(`#${this.layout.categoryId}`).value;
        let content = document.querySelector(`#${this.layout.contentId}`).value;
        let date = this.selectedDate || null;

        bootstrap.Modal.getInstance(document.getElementById(this.modalId)).hide();

        NOTE_SERVICE.updateNote(this.note.id, title, categoryId, content, date);  
    }
}