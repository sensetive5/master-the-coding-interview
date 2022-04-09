const getMinBetweenTwoNumbers = (num1: number, num2: number): number => Math.min(num1, num2);

const getSizeBetweenTwoIndexes = (idx1: number, idx2: number): number => Math.abs(idx1 - idx2);

export const optimalSolution = (numbersList: number[]): number => {
    let maxArea = 0;
    let p1 = 0;
    let p2 = numbersList.length - 1;

    while (p1 < p2) {
        const min = getMinBetweenTwoNumbers(numbersList[p1], numbersList[p2]);
        const size = getSizeBetweenTwoIndexes(p1, p2);

        maxArea = Math.max(maxArea, min * size);

        if (numbersList[p1] <= numbersList[p2]) {
            p1 += 1;
        } else {
            p2 -= 1;
        }
    }

    return maxArea;
}