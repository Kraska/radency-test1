import { Category } from '../entities/Category.js'
import { Note } from '../entities/Note.js'


class Storage {

    constructor() {
        this.init();
    }

    init() {

        this.categories = {
            '1': new Category(1, 'Task'),
            '2': new Category(2, 'Random Thought'), 
            '3': new Category(3, 'Idea') 
        }; 

        this.notes = {
            '1': new Note(1, 'Shopping list', this.categories['1'], 'Tomatoes, bread', '09.04.2022'),
            '2': new Note(2, 'The theory of evolution', this.categories['2'], '', '09.04.2022'),
            '3': new Note(3, 'Books list', this.categories['1'], 'book1, book2', '09.04.2022'),
            '4': new Note(4, 'Task2', this.categories['1'], 'Tomatoes, bread, ...', '09.04.2022'),
            '5': new Note(5, 'Task3', this.categories['1'], '...', '09.04.2022'),
            '6': new Note(6, 'Task4', this.categories['1'], '...', '09.04.2022'),
            '7': new Note(7, 'Task5', this.categories['1'], '...', '09.04.2022'),
        };
    }
}

export const STORE = new Storage();