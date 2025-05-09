import { describe } from "mocha";
import { expect } from 'chai'; 
import { getLastDelegation } from "../code/ceremonie.js";

describe("Ceremonie d'ouverture", function () {
    describe("Test pour l'exercice niveau 1", function () {
        it("retourne '' si delegation = []", function () {
            expect(reduceDirection([])).to.equal('');
        });
        it("retourne 'Estonia' si delegation = ['Chili 101 2', 'Estonia 58 1', 'Romania 102 3', 'Ecuador 103 4', 'Madagascar 104 5', 'Oman 50 1', 'Nicaragua 51 3', 'Yemen 53 4']", function () {
            expect(reduceDirection(['Chili 101 2', 'Estonia 58 1', 'Romania 102 3', 'Ecuador 103 4', 'Madagascar 104 5', 'Oman 50 1', 'Nicaragua 51 3', 'Yemen 53 4'])).to.equal('Estonia');
        });
        it("retourne 'Romania' si delegation = ['Romania 102 4']", function () {
            expect(reduceDirection(['Romania 102 4'])).to.equal('Romania');
        });
        it("retourne 'Nicaragua' si delegation = ['Chili 101 2', 'Nicaragua 51 3']", function () {
            expect(reduceDirection(['Chili 101 2', 'Nicaragua 51 3'])).to.equal('Nicaragua');
        });
    });

});