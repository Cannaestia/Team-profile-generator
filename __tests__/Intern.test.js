const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("name", () => {
        it ('take in inter name', () => {
            const algo = new Intern;
            const name = 'Ron';
            const result = algo.getName(name);
            expect(result).toEqual(name);
        })
    })

    describe("id", () => {
        it ('take in an intern id', () => {
            const algo = new Intern;
            const id = 1234;
            const result = algo.getID(id);
            expect(result).toEqual(id);
        })
    })

    describe("email", () => {
        it ('take in an intern email', () => {
            const algo = new Intern;
            const email = 'RonWeasley@hogwarts.com';
            const result = algo.getEmail(email);
            expect(result).toEqual(email);
        })
    })

    describe('school', ()=> {
        it ('take in an intern school', () => {
            const algo = new Intern;
            const school = 'Hogwarts';
            const result = algo.getSchool(school);
            expect(result).toEqual(school);
        })
    })

});
