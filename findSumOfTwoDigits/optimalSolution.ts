export const foundTwoDigitsSumOptimal = (numbersList: number[], foundSum: number): [number, number] | null => {
    if (numbersList.length === 0 || numbersList.length === 1) return null;

    if (numbersList.length === 2) {
        const sum = numbersList[0] + numbersList[1];

        return sum === foundSum ? [0, 1] : null;
    }

    const numberIndexHashMap = new Map();

    for (let p1 = 0; p1 < numbersList.length; p1++) {
        const numberToFind = foundSum - numbersList[p1];

        if (numberIndexHashMap.has(numberToFind)) {
            return [numberIndexHashMap.get(numberToFind), p1];
        } else {
            numberIndexHashMap.set(numbersList[p1], p1);
        }
    }
    
    return null;
}