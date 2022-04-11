
import { AbstractComponent } from "./AbstractComponent.js";

export class BodyComponent extends AbstractComponent {

    constructor(selector, notesDivId, summaryDivId, addNodeModalDivId) {
        super(selector);

        this.notesDivId = notesDivId;
        this.summaryDivId = summaryDivId;
        this.addNodeModalDivId = addNodeModalDivId;
    }

    getContent = () => {
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