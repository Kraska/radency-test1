import { STORE } from '../storage/Storage.js';


export class CategoryService {

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