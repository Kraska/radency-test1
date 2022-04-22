export class NotesLayout {

    constructor(
        notes,
        editNoteComponents,
        removeNoteComponents,
        archiveNoteComponents
    ) {
        this.notes = notes;

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
        <table class="table table-hover TableList">
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Created</th>
                <th scope="col">Category</th>
                <th scope="col">Content</th>
                <th scope="col">Dates</th>
                <th scope="col"></th>
                <th scope="col"><i class="bi bi-arrow-down-square-fill"></i></th>
                <th scope="col"><i class="bi bi-trash-fill"></i></th>
            </tr>
        </thead>
        <tbody id="notesList">${this.getTbody()}</tbody>
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
        const icon = `<i class="bi ${note.category.iconName}"></i>`
        const tr = `<tr>
            <th class="icon-coll">${icon}</th>
            <th>${note.title}</th>
            <td>${note.createdStr()}</td>
            <td>${note.category.title}</td>
            <td>${note.content}</td>
            <td>${note.datesStr()}</td>
            <td id="editNote_${note.id}" data-bs-toggle="modal" data-bs-target="#editNoteModal_${note.id}">
                <i class="bi bi-pencil-fill"></i>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#archiveNoteModal_${note.id}">
                <i class="bi bi-arrow-down-square-fill"></i>
            </td>
            <td data-bs-toggle="modal" data-bs-target="#removeNoteModal_${note.id}">
                <i class="bi bi-trash-fill"></i>
            </td>
        </tr>`;

        return tr;
    }

};