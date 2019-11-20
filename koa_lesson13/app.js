/*********** ES6中的类、继承和静态方法 ************/

/*jshint esversion:6 */
class Person {
    constructor(name, age) {
        this._pName = name;
        this._pAge = age;
    }

    getInfo() {
        console.log(`Name: ${this._pName} - Age: ${this._pAge}`);
    }
}

class Student extends Person {
    constructor(name, age, sex) {
        super(name, age);
        this._sSex = sex;
    }

    print() {
        console.log(`Print: Sex is ${this._sSex}`);
    }
}

var s = new Student('Kevin', 18, 'Male');
s.getInfo();
s.print();