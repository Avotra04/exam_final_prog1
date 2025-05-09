import { describe, it } from "mocha";
import { expect } from 'chai'; 
import { countMaxBobsleigh } from "../code/bobsleigh.js";

describe("Bobsleigh sur gazon", function () {
    describe("Test pour l'exercice niveau 2", function () {
        it("retourne 3 avec un tableau de longueur 5", function () {
            expect(countMaxBobsleigh(5, ["....X", "X....", ".....", "..X..", "X...X"])).to.equal(3);
        });
        it("retourne avec un tableau de longueur 8", function(){
            expect(countMaxBobsleigh(2, ["X.", ".."]).to>equal(0));
        });
        it("retourne 1 avec un tableau de longueur 4", function () {
            expect(4, ["X...", "...X", "..X.", "...."]).to.equal(1);
        });
        it("retourne 0 avec un tableau de longueur 0", function () {
            expect(countMaxBobsleigh(0, [])).to.equal(0);
        });
    });
});
