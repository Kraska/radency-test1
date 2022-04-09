// import { Note } from '../entities/Note.js'
import { STORE } from '../storage/Storage.js'

export class NotesLayout {

    constructor(iconsStyle = `style="color: dimgrey;"`, headIconsStyle = `style="color: white;"`) {
        this.iconsStyle = iconsStyle;
        this.headIconsStyle = headIconsStyle;
        
        // console.log(this.headIconsStyle)
    }

    getContent = () => {
        const tbody = this.getTbody();
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
        <tbody id="notesList" class="border-white">${tbody}</tbody>
        </table>
        <button type="button" class="btn btn-secondary float-end">Create Note</button>`;
    }

    getTbody = () => {
        const tbody = Object.values(STORE.notes).map(this.noteToRow).join('');
        //console.log(tbody);
        return tbody;
    }

    noteToRow = (note) => {
        // console.log(note);
        
        let tr = `<tr class="table-primary border-white" style="border-width:6px">
            <th scope="row">Icon</th>
            <td>${note.title}</td>
            <td>${note.created}</td>
            <td>${note.category.title}</td>
            <td>${note.content}</td>
            <td>dates</td>
            <td><i class="bi bi-pencil-fill" ${this.iconsStyle}></i></td>
            <td><i class="bi bi-arrow-down-square-fill" ${this.iconsStyle}></i></td>
            <td><i class="bi bi-trash-fill" ${this.iconsStyle}></i></td>
        </tr>`;

        return tr;
    }
};