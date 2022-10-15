const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("name", () => {
        it ('take in an engineer name', () => {
            const engineer = new Engineer('Harry');
            const result = engineer.getName();
            expect(result).toEqual('Harry');
        })
    })
    
    describe("id", () => {
        it ('take in an engineer id', () => {
            const engineer = new Engineer('Harry', 5678);
            const result = engineer.getId();
            expect(result).toEqual(5678); 
        })
    })

    describe("email", () => {
        it ('take in an engineer email', () => {
            const engineer = new Engineer('Harry', 5678, 'Harry123@gmail.com' );
            const result = engineer.getEmail();
            expect(result).toEqual('Harry123@gmail.com');
        })
    })

    describe("github", () => {
        it ('take in an engineer github page', () => {
            const engineer = new Engineer ('Harry', 5678, 'Harry123@gmail.com', 'HarryGit12');
            const result = engineer.getGithub();
            expect(result).toEqual('HarryGit12');
        })
    })
});
