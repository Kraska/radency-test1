
export class ModalLayout {

    //<button type="button" class="btn btn-primary">Create</button>
    constructor(name, title, body, footer = '') {
        this.name = name;
        this.title = title;
        this.body = body;
        this.footer = footer;
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
                  <div class="modal-body">${this.body}</div>
                  <div class="modal-footer">${this.footer}</div>
                </div>
            </div>        
        </div>`;
    }
}