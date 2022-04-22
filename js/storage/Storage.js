import { Category } from '../entities/Category.js'
import { Note } from '../entities/Note.js'


class Storage {

    constructor() {
        this.init();
    }

    init() {

        this.categories = {
            '1': new Category(1, 'Task', 'bi-card-list', 6, 0),
            '2': new Category(2, 'Random Thought', 'bi-shuffle', 1, 0), 
            '3': new Category(3, 'Idea', 'bi-lightbulb', 1, 0) 
        }; 

        this.notes = {
            '1': new Note(1, 'Shopping list', this.categories['1'], 'Tomatoes, bread', new Date()),
            '2': new Note(2, 'The theory of evolution', this.categories['2'], '', new Date()),
            '3': new Note(3, 'Books list', this.categories['1'], 'book1, book2', new Date()),
            '4': new Note(4, 'Task2', this.categories['1'], 'Tomatoes, bread, ...', new Date()),
            '5': new Note(5, 'Task3', this.categories['3'], '...', new Date()),
            '6': new Note(6, 'Task4', this.categories['1'], '...', new Date()),
            '7': new Note(7, 'Task5', this.categories['1'], '...', new Date()),
        };
    }
}

export const STORE = new Storage();