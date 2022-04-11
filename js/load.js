import { BodyComponent } from './components/BodyComponent.js';
import { NotesComponent } from './components/NotesComponent.js';
import { AddNoteComponent } from './components/AddNoteComponent.js';


const notesDivId = "Notes";
const summaryDivId = "Summary";
const addNodeModalDivId = "AddNodeModal";

new BodyComponent("#content", notesDivId, summaryDivId, addNodeModalDivId).render();
new NotesComponent(`#${notesDivId}`).render();
new AddNoteComponent(`#${addNodeModalDivId}`).render();