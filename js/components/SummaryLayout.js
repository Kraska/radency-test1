export class SummaryLayout {

    constructor(categories) {
        this.categories = categories;
    }

    getContent = () => {
        return `
        <div class="">
            <table class="table table-hover TableList">
            <thead class="table-secondary">
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Note Category</th>
                    <th scope="col">Active</th>
                    <th scope="col">Archived</th>
                </tr>
            </thead>
            <tbody class="border-white">${this.getTbody()}</tbody>
            </table>
        </div>`;
    }

    getTbody = () => {
        return this.categories.map(this.categoryToRow).join('');
    }

    categoryToRow = (category) => {
        const icon = `<i class="bi ${category.iconName}"></i>`
        const tr = `<tr>
            <th scope="row">${icon}</th>
            <td>${category.title}</td>
            <td>${category.activeCounter}</td>
            <td>${category.archivedCounter}</td>
        </tr>`;

        return tr;
    }

};