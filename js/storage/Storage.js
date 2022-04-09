import { Category } from '../entities/Category.js'
import { Note } from '../entities/Note.js'


class Storage {

    constructor() {
        this.init();
    }

    init() {

        this.categories = {
            '1': new Category(1, 'Task'),
            '2': new Category(2, 'Random Thought') 
        }; 

        this.notes = {
            '1': new Note(1, 'Shopping list', '09.04.2022', this.categories['1'], 'Tomatoes, bread'),
            '2': new Note(2, 'The theory of evolution', '09.04.2022', this.categories['2'], ''),
            '3': new Note(3, 'Books list', '09.04.2022', this.categories['1'], 'book1, book2'),
            '4': new Note(4, 'Task2', '09.04.2022', this.categories['1'], 'Tomatoes, bread, ...'),
            '5': new Note(5, 'Task3', '09.04.2022', this.categories['1'], '...'),
            '6': new Note(6, 'Task4', '09.04.2022', this.categories['1'], '...'),
            '7': new Note(7, 'Task5', '09.04.2022', this.categories['1'], '...'),
        };
    }
}

export const STORE = new Storage();