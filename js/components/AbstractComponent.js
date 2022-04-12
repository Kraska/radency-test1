export class AbstractComponent {

    constructor(selector) {
        this.selector = selector;
    }

    render = () => {
        this.update();
        this.onRender();
    }

    update = () => {
        document.querySelector(this.selector).innerHTML = this.getContent();
    }

    onRender = () => {}

    getContent = () => {
        throw new TypeError("Method 'getContent' needs to implement!");
    }
}