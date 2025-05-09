import { describe } from "mocha";
import { expect } from 'chai'; 
import { reduceDirection } from "../code/niveau3.js";

describe("Traversee dans le Far West", function () {
    describe("Test pour l'exercice niveau 3", function () {
        it("retorne ['OUEST'] si directions = ['NORD', 'SUD','SUD', 'EST', 'OUEST', 'NORD', 'OUEST'] ", function () {
            expect(reduceDirection(['NORD', 'SUD', 'SUD', 'EST', 'OUEST', 'NORD', 'OUEST'])).to.equal(['OUEST']);
        });
        it("retourne ['EST'] si directions = ['NORD', 'SUD', 'EST', 'OUEST', 'EST'] ", function () {
            expect(reduceDirection(['NORD', 'SUD', 'EST', 'OUEST', 'EST'])).to.equal(['EST']);
        });
        it("retourne [] si directions = [] ", function () {
            expect(reduceDirection([])).to.equal([]);
        });
        it("retourne [] si directions = ['SUD', 'NORD', 'EST', 'OUEST']", function () {
            expect(reduceDirection(['SUD', 'NORD', 'EST', 'OUEST'])).to.equal([]);
        });

    });
});