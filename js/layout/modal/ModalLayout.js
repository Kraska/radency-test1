
export class ModalLayout {

    //<button type="button" class="btn btn-primary">Create</button>
    constructor(name, title, content, okBatton, canselBatton) {
        this.name = name;
        this.title = title;
        this.content = content;
        this.canselBatton = `<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cansel</button>`;
        this.okBatton = `<button type="button" class="btn btn-primary">Save</button>`;
    }

    getContent = () => {
        return `<!-- Modal -->
        <div class="modal fade" id="${this.name}" aria-labelledby="${this.name}Label" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="${this.name}Label">${this.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>        
                  </div>
                  <div class="modal-body">${this.content}</div>
                  <div class="modal-footer">
                        ${this.canselBatton}
                        ${this.okBatton}
                  </div>
                </div>
            </div>        
        </div>`;
    }
}