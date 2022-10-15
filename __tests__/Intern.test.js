const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("name", () => {
        it ('take in inter name', () => {
            const intern = new Intern('Ron');
            const result = intern.getName();
            expect(result).toEqual('Ron');
        })
    })

    describe("id", () => {
        it ('take in an intern id', () => {
            const intern = new Intern('Ron', 1234);
            const result = intern.getId();
            expect(result).toEqual(1234);
        })
    })

    describe("email", () => {
        it ('take in an intern email', () => {
            const intern = new Intern('Ron', 1234, 'RonWeasley@hogwarts.com');
            const result = intern.getEmail();
            expect(result).toEqual('RonWeasley@hogwarts.com');
        })
    })

    describe('school', ()=> {
        it ('take in an intern school', () => {
            const intern = new Intern('Ron', 1234, 'RonWeasley@hogwarts.com', 'Hogwarts');
            const result = intern.getSchool();
            expect(result).toEqual('Hogwarts');
        })
    })

});
