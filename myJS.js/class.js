class Person {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;

    }
    get name() {
        return this._name;
    }
    set name(value) {
        if(typeof value === 'string') {
            this._name = value;
        } else {
            throw new Error('please, enter letters');
        }
    }
    get surname() {
        return this._surname;
    }
    set surname(value) {
        if(typeof value === 'string') {
            this._surname = value;
        } else {
            throw new Error('please, enter letters')
        }
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

let user = new Person('Lusine', 'Sargsyan');
alert(user.getFullName());