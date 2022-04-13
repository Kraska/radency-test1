import { STORE } from '../storage/Storage.js';
import { EVENT_MANAGER } from './EventManager.js';
import { CATEGORY_SERVICE } from './CategoryService.js';
import { Note } from '../entities/Note.js';


class NoteService {

    constructor() {
        this.EVENTS = {
            CREATED: "NoteService.CREATED",
            UPDATED: "NoteService.UPDATED",
            ARCHIVED: "NoteService.ARCHIVED",
            ACTIVATED: "NoteService.ACTIVATED",
         };
    }
    
    getNotes = () => {
        return Object.values(STORE.notes);
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

    newId = () => {
        return (Math.random() + 1).toString(36).substring(7);
    }
}


export const NOTE_SERVICE = new NoteService();