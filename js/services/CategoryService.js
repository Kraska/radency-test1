import { STORE } from '../storage/Storage.js';
import { EVENT_MANAGER } from './EventManager.js';
import { EVENTS } from './events.js';


export class CategoryService {

    constructor() {
        EVENT_MANAGER.subscribe(EVENTS.NoteService.CREATED, this.onNoteCreated);
        EVENT_MANAGER.subscribe(EVENTS.NoteService.UPDATED, this.onNoteUpdated);
        EVENT_MANAGER.subscribe(EVENTS.NoteService.REMOVED, this.onNoteRemoved);
        EVENT_MANAGER.subscribe(EVENTS.NoteService.ARCHIVED, this.onNoteArchived);
    }


    onNoteCreated = ( { note } ) => {
        note.category.increaseActiveCounter();
    }

    onNoteUpdated = ( { oldNote, newNote } ) => {
        if (oldNote.category.id != newNote.category.id) {
            
            oldNote.isActive ? 
                oldNote.category.decreaseActiveCounter() :
                oldNote.category.decreaseArchivedCounter();

            newNote.isActive ? 
                newNote.category.increaseActiveCounter():
                newNote.category.increaseArchivedCounter();
        }
    }

    onNoteRemoved = ( { note } ) => {
        note.isActive ?
            note.category.decreaseActiveCounter() :
            oldNote.category.decreaseArchivedCounter();
    }

    onNoteArchived = ( { note } ) => {
        note.category.decreaseActiveCounter();
        note.category.increaseArchivedCounter();
    }


    getCategories = () => {
        return Object.values(STORE.categories);
    }

    newId = () => {
        return (Math.random() + 1).toString(36).substring(7);
    }

    getCategory = (id) => {
        return STORE.categories[id];
    }
}

export const CATEGORY_SERVICE = new CategoryService();