export class AbstractComponent {

    constructor(selector) {
        this.selector = selector;
    }

    render = () => {
        this.update();
    }

    update = () => {
        this.beforeUpdate();
        document.querySelector(this.selector).innerHTML = this.getContent();
        this.afterUpdate();
    }

    beforeUpdate = () => {}

    afterUpdate = () => {}

    getContent = () => {
        throw new TypeError("Method 'getContent' needs to implement!");
    }
}