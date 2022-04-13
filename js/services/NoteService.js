import { STORE } from '../storage/Storage.js';
import { EVENT_MANAGER } from './EventManager.js';
import { CATEGORY_SERVICE } from './CategoryService.js';
import { Note } from '../entities/Note.js';
import { EVENTS } from './events.js';



class NoteService {

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
        
        EVENT_MANAGER.notify(EVENTS.NoteService.CREATED, { note: STORE.notes[id] });
    }

    updateNote = (id, title, categoryId, content) => {
        //console.log('updateNote');
        const oldNote = STORE.notes[id];
        const category = CATEGORY_SERVICE.getCategory(categoryId);
        STORE.notes[id] = new Note(id, title, category, content, '');

        EVENT_MANAGER.notify(EVENTS.NoteService.UPDATED, { oldNote, newNote: STORE.notes[id] });
    }

    removeNote = (id) => {
        const note = STORE.notes[id];
        delete STORE.notes[id];

        EVENT_MANAGER.notify(EVENTS.NoteService.REMOVED, { note });
    }

    archiveNote = (id) => {
        const note = STORE.notes[id];
        STORE.notes[id].archive();
        
        EVENT_MANAGER.notify(EVENTS.NoteService.ARCHIVED, { note });
    }

    newId = () => {
        return (Math.random() + 1).toString(36).substring(7);
    }
}


export const NOTE_SERVICE = new NoteService();