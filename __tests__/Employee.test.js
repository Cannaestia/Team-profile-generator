const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("name", () => {
        it ('take in an employee name', () => {
            const algo = new Employee();
            const name = 'Jennifer';
            const result = algo.getName(name);
            expect(result).toEqual(name);
        })
    })

    describe("id", () => {
        it ('take in an employee id', () => {
            const algo = new Employee();
            const id = 1422;
            const result = algo.getID(id);
            expect(result).toEqual(id);
        })
    })

    describe("email", () => {
        it ('take in an employee email', () => {
            const algo = new Employee();
            const email = 'Cannaestia@gmail.com';
            const result = algo.getEmail(email);
            expect(result).toEqual(email);
        })
    })



});
