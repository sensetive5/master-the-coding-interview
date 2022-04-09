const calculateTotalWater = (left: number, right: number, currentHeight: number) => Math.min(left, right) - currentHeight;

export const bruteForceSolution = (numbersList: number[]): number => {
    let totalWater = 0;

    for (let i = 0; i < numbersList.length; i++) {
        let left = i;
        let right = i; 
        let maxLeft = 0;
        let maxRight = 0;

        while (left >= 0) {
            maxLeft = Math.max(maxLeft, numbersList[left]);
            left -= 1;
        }

        while (right < numbersList.length) {
            maxRight = Math.max(maxRight, numbersList[right]);
            right += 1;
        }

        const currentWater = calculateTotalWater(maxLeft, maxRight, numbersList[i]);

        if (currentWater >= 0) {
            totalWater += currentWater;
        }
    }

    return totalWater;
}