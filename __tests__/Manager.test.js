const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("name", () => {
        it ('take in a manager name', () => {
            const algo = new Manager;
            const name = 'Hermione';
            const result = algo.getName(name);
            expect(result).toEqual(name);
        })
    })

    describe("id", () => {
        it ('take in a manager id', () => {
            const algo = new Manager;
            const id = 5917;
            const result = algo.getID(id);
            expect(result).toEqual(id);
        })
    })

    describe("email", () => {
        it ('take in a manager email', () =>{
            const algo = new Manager;
            const email = 'Hermione12@gmail.com';
            const result = algo.getEmail(email);
            expect(result).toEqual(email);
        })
    })

    describe("office_number", () => {
        it ('take in a manager office number', () => {
            const algo = new Manager;
            const office_number = 123
            const result = algo.getOfficeNumber(office_number);
            expect(result).toEqual(office_number);
        })
    })

});

