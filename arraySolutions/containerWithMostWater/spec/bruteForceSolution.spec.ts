import { bruteForceSolution } from "../bruteForceSolution";

describe('Brute force solution', () => {
    test('Should return greatest area', () => {
        const expectedResult = bruteForceSolution([7, 1, 2, 3, 9]);

        expect(expectedResult).toEqual(28);
    });

    test('Should return zero if length of array equals 0', () => {
        const expectedResult = bruteForceSolution([]);

        expect(expectedResult).toEqual(0);
    });

    test('Should return zero if length of array equals 1', () => {
        const expectedResult = bruteForceSolution([1]);

        expect(expectedResult).toEqual(0);
    });

    test('Should return area as multiply between two numbers if array length equals 2', () => {
        const expectedResult = bruteForceSolution([1, 2]);

        expect(expectedResult).toEqual(1);
    });
});
