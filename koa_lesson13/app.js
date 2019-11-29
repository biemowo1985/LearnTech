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

    //Static Method
    static run() {
        console.log('This is static run method.');
    }
}

var s = new Student('Kevin', 18, 'Male');
s.getInfo();
s.print();

//Call static method
Student.run();


//Single Instance
class Database {
    static getInstance() {
        if (!Database.Instance) {
            Database.Instance = new Database();
        }
        return Database.Instance;
    }

    constructor() {
        console.log('Create Database Instance...');
        this.connect();
    }

    connect() {
        console.log('Connecting Database...');
    }

    query(queryType) {
        console.log(`The query type is ${queryType}`);
    }
}

console.log('------------ Single Instance Start... -----------');

var db1 = Database.getInstance();
db1.query('ADD');
var db2 = Database.getInstance();
db2.query('DELETE');
var db3 = Database.getInstance();
db3.query('UPDATE');
var db4 = Database.getInstance();
db4.query('QUERY');
