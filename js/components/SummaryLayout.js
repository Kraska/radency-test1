export class SummaryLayout {

    constructor(categories, iconsStyle = `style="color: dimgrey;"`) {
        this.categories = categories;
        this.iconsStyle = iconsStyle;   
    }

    getContent = () => {
        return `
        <table class="table border-white table-hover">
        <thead class="table-secondary">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Note Category</th>
                <th scope="col">Active</th>
                <th scope="col">Archived</th>
            </tr>
        </thead>
        <tbody class="border-white">${this.getTbody()}</tbody>
        </table>`;
    }

    getTbody = () => {
        return this.categories.map(this.categoryToRow).join('');
    }

    categoryToRow = (category) => {
        const tr = `<tr class="table-primary border-white" style="border-width:6px">
            <th scope="row">Icon</th>
            <td>${category.title}</td>
            <td>${category.activeCounter}</td>
            <td>${category.archivedCounter}</td>
        </tr>`;

        return tr;
    }

};