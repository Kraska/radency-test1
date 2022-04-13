
class EventManager {

    constructor() {
        this.listeners = {}
    }

    subscribe = (eventType, listener) => {
        this.listeners[eventType] || (this.listeners[eventType] = []);
        this.listeners[eventType].push(listener)
    } 

    notify = (eventType, data) => {
        //console.log(eventType);
        (this.listeners[eventType] || []).forEach(listener => listener(data))
    }
}

export const EVENT_MANAGER = new EventManager();