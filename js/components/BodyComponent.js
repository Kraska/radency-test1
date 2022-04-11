
export class BodyComponent {

    constructor(selector, notesDivId, summaryDivId, addNodeModalDivId) {
        this.selector = selector;

        this.notesDivId = notesDivId;
        this.summaryDivId = summaryDivId;
        this.addNodeModalDivId = addNodeModalDivId;
    }

    render = () => {
        this.update();
    }

    update = () => {
        document.querySelector(this.selector).innerHTML = this.getContent();
    }

    getContent() {

        return `
        <header>
            <div class="container"></div>
        </header>

        <section>
            <div class="container" id="${this.notesDivId}">Notes</div>
            <div class="container" id="${this.addNodeModalDivId}"></div>
            
            <div class="container" id="${this.summaryDivId}">Summary</div>
        </section>

        <footer>
            <div class="container"></div>
        </footer>`;
    }
}