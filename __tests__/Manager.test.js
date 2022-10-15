const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("name", () => {
        it ('take in a manager name', () => {
            const manager = new Manager('Hermione');
            const result = manager.getName();
            expect(result).toEqual('Hermione');
        })
    })

    describe("id", () => {
        it ('take in a manager id', () => {
            const manager = new Manager('Hermione', 5917);
            const result = manager.getId();
            expect(result).toEqual(5917);
        })
    })

    describe("email", () => {
        it ('take in a manager email', () =>{
            const manager = new Manager('Hermione', 5917, "Hermione12@gmail.com");
            const result = manager.getEmail();
            expect(result).toEqual('Hermione12@gmail.com');
        })
    })

    describe("office_number", () => {
        it ('take in a manager office number', () => {
            const manager = new Manager('Hermione', 5917, 'Hermione12@gmail.com', 123);
            const result = manager.getOfficeNumber();
            expect(result).toEqual(123);
        })
    })

});

