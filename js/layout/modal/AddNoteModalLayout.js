import { ModalLayout } from './ModalLayout.js';

export class AddNoteModalLayout {

    getContent = () => {
        const modelName = "addNoteModal";
        const addNoteModal = new ModalLayout(modelName, "Add new Note", "Content...");

        return `<div>
            ${addNoteModal.getContent()}
            <button type="button" class="btn btn-secondary float-end" data-bs-toggle="modal" data-bs-target="#${modelName}">Create Note</button>
        </div>`;
    }
}