const Boss = require('../cards/boss');
const Engineer = require('../cards/engineer');
const createMgr = require("./meat & potatoes/functionHouse");

describe("createMgr", () => {
it("should assign response value to bosscard fields", () => {
    const testRes = ["BOSSNAME", "BOSSID", "BOSSEMAIL", "BOSSPHONENUMBER"];
    const bossSample = {name: "BOSSNAME", id: "BOSSID", email: "BOSSEMAIL", phone: "BOSSPHONENUMBER"};
    const result = new Boss(testRes[0], testRes[1], testRes[2], testRes[3]);

    expect(result).toEqual(bossSample);
    });
  });

  describe("createEng", () => {
    it("should assign response value to engineercard fields", () => {
        const testRes = ["ENGINEERNAME", "ENGINEERID", "ENGINEEREMAIL", "ENGINEERPHONENUMBER"];
        const engSample = {name: "ENGINEERNAME", id: "ENGINEERID", email: "ENGINEEREMAIL", github: "ENGINEERGITHUB"};
        const result = new Engineer(testRes[0], testRes[1], testRes[2], testRes[3]);
    
        expect(result).toEqual(engSample);
        });
      });

      describe("createInt", () => {
        it("should assign response value to interncard fields", () => {
            const testRes = ["INTERNNAME", "INTERNID", "INTERNEMAIL", "INTERNPHONENUMBER"];
            const intSample = {name: "INTERNNAME", id: "INTERNID", email: "INTERNEMAIL", school: "INTERNSCHOOL"};
            const result = new Intern(testRes[0], testRes[1], testRes[2], testRes[3]);
        
            expect(result).toEqual(intSample);
            });
          });