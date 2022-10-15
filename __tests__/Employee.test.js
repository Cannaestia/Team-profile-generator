const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("name", () => {
        it ('take in an employee name', () => {
            const employee = new Employee('Jennifer');
            const result = employee.getName();
            expect(result).toEqual('Jennifer');
        })
    })

    describe("id", () => {
        it ('take in an employee id', () => {
            const employee = new Employee('Jennifer',1422);
            const result = employee.getId();
            expect(result).toEqual(1422);
        })
    })

    describe("email", () => {
        it ('take in an employee email', () => {
            const employee = new Employee('Jennifer',1422,'Cannaestia@gmail.com');
            const result = employee.getEmail();
            expect(result).toEqual('Cannaestia@gmail.com');
        })
    })



});
