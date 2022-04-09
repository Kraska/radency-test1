import { NotesLayout } from './NotesLayout.js';
import { SummaryLayout } from './SummaryLayout.js';


export class BodyLayout {

    getContent() {
        const header = '';
        const notes = new NotesLayout().getContent();
        const summary = new SummaryLayout().getContent();
        const footer = '';

        return `
        <header>
            <div class="container">${header}</div>
        </header>

        <section>
            <div class="container">${notes}</div>
            <div class="container">${summary}</div>
        </section>

        <footer>
            <div class="container">${footer}</div>
        </footer>`;
    }

};