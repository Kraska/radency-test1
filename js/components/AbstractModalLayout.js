export class AbstractModalLayout {

    constructor() {
        if (new.target === AbstractModalLayout) {
            throw new TypeError("Cannot construct AbstractModalLayout instances directly");
        }
    }

    getContent = () => {
        return `<!-- Modal -->
        <div class="modal fade" id="${this.getName()}" aria-labelledby="${this.getName()}Label" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="${this.getName()}Label">${this.getTitle()}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>        
                  </div>
                  <div class="modal-body">${this.getBody()}</div>
                  <div class="modal-footer">${this.getFooter()}</div>
                </div>
            </div>        
        </div>`;
    }

    getName = () => {
        throw new TypeError("Method 'getName' needs to implement!");
    }

    getTitle = () => {
        throw new TypeError("Method 'getTitle' needs to implement!");
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