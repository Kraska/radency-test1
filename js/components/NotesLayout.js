import { NOTE_SERVICE } from '../services/NoteService.js';

export class NotesLayout {

    constructor(
        notes,
        editNoteComponents,
        removeNoteComponents,
        archiveNoteComponents,
        iconsStyle = `style="color: dimgrey;"`, 
        headIconsStyle = `style="color: white;"`
    ) {
        this.notes = notes;
        this.iconsStyle = iconsStyle;
        this.headIconsStyle = headIconsStyle;

        this.editNoteModals = editNoteComponents
                .map(component => component.getContent())
                .join("\n");      

        this.removeNoteModals = removeNoteComponents
                .map(component => component.getContent())
                .join("\n");    

        this.archiveNoteModals = archiveNoteComponents
                .map(component => component.getContent())
                .join("\n");      
    }

    getContent = () => {
        return `
        <table class="table border-white table-hover">
        <thead class="table-secondary">
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Created</th>
            <th scope="col">Category</th>
            <th scope="col">Content</th>
            <th scope="col">Dates</th>
            <th scope="col"></th>
            <th scope="col"><i class="bi bi-arrow-down-square-fill" ${this.headIconsStyle}></i></th>
            <th scope="col"><i class="bi bi-trash-fill" ${this.headIconsStyle}></i></th>
            </tr>
        </thead>
        <tbody id="notesList" class="border-white">${this.getTbody()}</tbody>
        </table>
        ${this.editNoteModals}
        ${this.removeNoteModals}
        ${this.archiveNoteModals}
        `;
    }

    getTbody = () => {
        return this.notes.map(this.noteToRow).join('');
    }

    noteToRow = (note) => {
        const tr = `<tr class="table-primary border-white" style="border-width:6px">
            <th scope="row">Icon</th>
            <td>${note.title}</td>
            <td>${note.created}</td>
            <td>${note.category.title}</td>
            <td>${note.content}</td>
            <td>dates</td>
            <td id="editNote_${note.id}" data-bs-toggle="modal" data-bs-target="#editNoteModal_${note.id}">
                <i class="bi bi-pencil-fill" ${this.iconsStyle}></i>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#archiveNoteModal_${note.id}">
                <i class="bi bi-arrow-down-square-fill" ${this.iconsStyle}></i>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#removeNoteModal_${note.id}">
                <i class="bi bi-trash-fill" ${this.iconsStyle}></i>
            </td>
        </tr>`;

        return tr;
    }

};