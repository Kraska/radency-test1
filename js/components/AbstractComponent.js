
export class AbstractComponent {

    constructor(selector) {
        this.selector = selector;
    }

    render = () => {
        this.update();
        this.onRender();
    }

    update = () => {
        console.log('this.selector', this.selector);
        document.querySelector(this.selector).innerHTML = this.getContent();
    }

    onRender = () => {}

    // todo abstract
    getContent = () => {
        return '';
    }
}