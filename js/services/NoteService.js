import { STORE } from '../storage/Storage.js';
import { EVENT_MANAGER } from './EventManager.js';
import { CATEGORY_SERVICE } from './CategoryService.js';
import { Note } from '../entities/Note.js';


class NoteService {

    constructor() {
        this.EVENTS = {
            CREATED: "NoteService.CREATED",
            UPDATED: "NoteService.UPDATED",
            REMOVED: "NoteService.REMOVED",
            ARCHIVED: "NoteService.ARCHIVED",
            ACTIVATED: "NoteService.ACTIVATED",
         };
    }
    
    getNotes = () => {
        return Object.values(STORE.notes);
    }

    getActiveNotes = () => {
        return Object.values(STORE.notes).filter(note => note.isActive);
    }

    addNewNote = (title, categoryId, content) => {

        const id = this.newId();
        const category = CATEGORY_SERVICE.getCategory(categoryId);
        STORE.notes[id] = new Note(id, title, category, content, '');
        
        EVENT_MANAGER.notify(this.EVENTS.CREATED);
    }

    updateNote = (id, title, categoryId, content) => {
        //console.log('updateNote');
        const category = CATEGORY_SERVICE.getCategory(categoryId);
        STORE.notes[id] = new Note(id, title, category, content, '');
        EVENT_MANAGER.notify(this.EVENTS.UPDATED);
    }

    removeNote = (id) => {
        delete STORE.notes[id];
        EVENT_MANAGER.notify(this.EVENTS.REMOVED);
    }

    archiveNote = (id) => {
        STORE.notes[id].archive();
        EVENT_MANAGER.notify(this.EVENTS.ARCHIVED);
    }

    newId = () => {
        return (Math.random() + 1).toString(36).substring(7);
    }
}


export const NOTE_SERVICE = new NoteService();