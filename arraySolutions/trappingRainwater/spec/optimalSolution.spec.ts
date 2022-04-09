import { optimalSolution } from "../optimalSolution";

describe('Brute force solution', () => {
    test ('Should calculate amount trapped total water', () => {
        const expectedResult = optimalSolution([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]);

        expect(expectedResult).toEqual(8);
    });

    test ('Should return zero if empty array passed', () => {
        const expectedResult = optimalSolution([]);

        expect(expectedResult).toEqual(0);
    });

    test ('Should return zero if array with one element passed', () => {
        const expectedResult = optimalSolution([9]);

        expect(expectedResult).toEqual(0);
    });

    test ('Should return zero if no any trap in the array', () => {
        const expectedResult = optimalSolution([9, 8, 7, 6, 5, 4, 3, 2, 1]);

        expect(expectedResult).toEqual(0);
    });
});
