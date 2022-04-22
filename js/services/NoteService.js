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

    addNewNote = (title, categoryId, content, date) => {

        const id = this.newId();
        const category = CATEGORY_SERVICE.getCategory(categoryId);
        const dates = date ? [date] : [];

        STORE.notes[id] = new Note(
            id, 
            title, 
            category, 
            content, 
            new Date(), 
            date, 
            dates
        );
        
        EVENT_MANAGER.notify(
            EVENTS.NoteService.CREATED, 
            { note: STORE.notes[id] }
        );
    }

    updateNote = (id, title, categoryId, content, date = null) => {
        
        const oldNote = STORE.notes[id];

        const category = CATEGORY_SERVICE.getCategory(categoryId);

        const dates = [...oldNote.dates];
        if (!this.isDatesEqual(date, oldNote.date)) {
            dates.push(date);
        }

        STORE.notes[id] = new Note(
            id, 
            title, 
            category, 
            content, 
            oldNote.created, 
            date, 
            dates, 
            oldNote.isActive
        );

        EVENT_MANAGER.notify(
            EVENTS.NoteService.UPDATED, 
            { oldNote, newNote: STORE.notes[id] }
        );
    }

    isDatesEqual = (date1, date2) => {
        if (date1 === null)
            return date2 === null ? true : false;

        if (date2 === null)
            return false;

        return date1.toString() === date2.toString();    
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