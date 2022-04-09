export const optimalSolution = (numbersList: number[]): number => {
    let leftIdx = 0;
    let rightIdx = numbersList.length - 1;

    let totalAmountOfWater = 0;

    let maxLeft = 0;
    let maxRight = 0;

    while (leftIdx < rightIdx) {
        if (numbersList[leftIdx] <= numbersList[rightIdx]) {
            if (numbersList[leftIdx] >= maxLeft) {
                maxLeft = numbersList[leftIdx];
            } else {
                totalAmountOfWater += maxLeft - numbersList[leftIdx];
            }
            
            leftIdx += 1;
        } else {
            if (numbersList[rightIdx] >= maxRight) {
                maxRight = numbersList[rightIdx];
            } else {
                totalAmountOfWater += maxRight - numbersList[rightIdx];
            }
            
            rightIdx -= 1;
        }
    }

    return totalAmountOfWater;
}