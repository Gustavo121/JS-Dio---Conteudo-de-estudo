class Observable {
    constructor() {
        this.Observable = [];
    }

    subscribe(fn) {
        this.Observable.push(fn);
    }

    notify(data) {
        this.Observable.forEach(fn => fn(data));
    }

    unsubscribe(fn) {
        this.Observable = this.Observable.filter(obs => obs !== fn);
    }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified');

o.unsubscribe(logData2);

o.notify('notified 2');