import {foundTwoDigitsSumOptimal} from '../optimalSolution';

describe('Optimal Solution', () => {
    test('Should return two indexes in an array', () => {
        const expectedResult = foundTwoDigitsSumOptimal([1, 3, 2, 5, 4, 8, 12, 0], 20);
    
        expect(expectedResult).toStrictEqual([5, 6]);
    });

    test('Should return null if sum is not exist', () => {
        const expectedResult = foundTwoDigitsSumOptimal([1, 3, 2, 5, 4, 8, 12, 0], 35);
    
        expect(expectedResult).toBeNull;
    });

    test('Should return null if length of numbers array equals 0', () => {
        const expectedResult = foundTwoDigitsSumOptimal([], 35);
    
        expect(expectedResult).toBeNull;
    });

    test('Should return null if length of numbers array equals 1', () => {
        const expectedResult = foundTwoDigitsSumOptimal([1], 35);
    
        expect(expectedResult).toBeNull;
    });

    test('Should return array of [0, 1] if length of numbers array equals 2 and sum exists', () => {
        const expectedResult = foundTwoDigitsSumOptimal([30, 5], 35);
    
        expect(expectedResult).toStrictEqual([0, 1]);
    });
});

