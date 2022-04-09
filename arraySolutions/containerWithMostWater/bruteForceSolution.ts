const getMinBetweenTwoNumbers = (num1: number, num2: number): number => Math.min(num1, num2);

const getSizeBetweenTwoIndexes = (idx1: number, idx2: number): number => Math.abs(idx1 - idx2);

export const bruteForceSolution = (numersList: number[]): number => {
    let maxArea = 0;

    for (let p1 = 0; p1 < numersList.length; p1++) {
        for (let p2 = p1 + 1; p2 < numersList.length; p2++) {
            const min = getMinBetweenTwoNumbers(numersList[p1], numersList[p2]);
            const size = getSizeBetweenTwoIndexes(p1, p2);

            maxArea = Math.max(maxArea, min * size);
        }
    }

    return maxArea;
}