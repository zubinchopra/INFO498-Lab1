'use strict'
import { pairSumToK } from './exercise/problem-a'
// test or it

describe("Those are tests for the pairSumToK", () => {

    it("Tests empty lists", function () {
        expect(pairSumToK([], 0)).toBeFalsy();
    })
    
    it("Tests for true", function () {
        // Assertion 
        expect(pairSumToK([-1, -2, -3], -5)).toBeTruthy();
        expect(pairSumToK([1, 2, 3], 5)).toBeTruthy();
        expect(pairSumToK([7, 8, 9], 17)).toBeTruthy();
        expect(pairSumToK([1, 2, 3, 4 , 5 , 7 ], 8)).toBeTruthy();
        expect(pairSumToK([1, 2, 3, 4 , 96, -5], -4)).toBeTruthy();
    })

    it("Tests for false", function () {
        // Assertion 
        expect(pairSumToK([-1, -2, -3], 2)).toBeFalsy();
        expect(pairSumToK([1, 2, 3], 9)).toBeFalsy();
        expect(pairSumToK([7, 8, 9], 69)).toBeFalsy();
        expect(pairSumToK([1, 2, 3, 4 , 5 , 7 ], 1)).toBeFalsy();
        expect(pairSumToK([1, 2, 3, 4 , 96, -5], -5)).toBeFalsy();
    })

})

