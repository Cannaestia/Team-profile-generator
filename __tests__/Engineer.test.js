const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("name", () => {
        it ('take in an engineer name', () => {
            const algo = new Engineer();
            const name = 'Harry';
            const result = algo.getName(name);
            expect(result).toEqual(name);
        })
    })
    
    descritbe("id", () => {
        it ('take in an engineer id', () => {
            const algo = new Engineer();
            const id = 0366;
            const result = algo.getID(id);
            expect(result).toEqual(id); 
        })
    })

    describe("email", () => {
        it ('take in an engineer email', () => {
            const algo = new Engineer();
            const email = 'Harry123@gmail.com';
            const result = algo.getEmail(email);
            expect(result).toEqual(email);
        })
    })

    describe("github", () => {
        it ('take in an engineer github page', () => {
            const algo = new Engineer;
            const github = 'HarryGit12'
            const result = algo.getGithub(github);
            expect(result).toEqual(github);
        })
    })
});
