export class AbstractComponent {

    constructor(selector) {
        this.selector = selector;
    }

    render = () => {
        this.update();
    }

    update = () => {
        document.querySelector(this.selector).innerHTML = this.getContent();
        this.onUpdate();
    }

    onUpdate = () => {}

    getContent = () => {
        throw new TypeError("Method 'getContent' needs to implement!");
    }
}