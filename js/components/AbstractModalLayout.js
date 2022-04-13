export class AbstractModalLayout {

    constructor(id, title) {

        this.id = id;
        this.title = title;

        if (new.target === AbstractModalLayout) {
            throw new TypeError("Cannot construct AbstractModalLayout instances directly");
        }
    }

    getContent = () => {
        return `<!-- Modal -->
        <div class="modal fade" id="${this.id}" aria-labelledby="${this.id}Label" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="${this.id}Label">${this.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>        
                  </div>
                  <div class="modal-body">${this.getBody()}</div>
                  <div class="modal-footer">${this.getFooter()}</div>
                </div>
            </div>        
        </div>`;
    }

    getBody = () => {
        throw new TypeError("Method 'getBody' needs to implement!");
    }

    getFooter = () => {
        return `<div class="mb-4">
            ${this.getCanselButton()}
            ${this.getOkButton()}
        </div>`;
    }

    getCanselButton = () => {
        return '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cansel</button>';
    }

    getOkButton = () => {
        return '<button type="button" class="btn btn-primary">Ok</button>';
    }
}