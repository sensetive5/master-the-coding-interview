const findSumOfTwoDigits = (numbersList: number[], foundSum: number): [number, number] | null => {
    if (numbersList.length === 0 || numbersList.length === 1) return null;

    if (numbersList.length === 2) {
        const sum = numbersList[0] + numbersList[1];

        return sum === foundSum ? [0, 1] : null;
    }

    for (let p1 = 0; p1 < numbersList.length; p1++) {
        const numberToFind = foundSum - numbersList[p1];

        for (let p2 = p1 + 1; p2 < numbersList.length; p2++) {
            if (numberToFind === numbersList[p2]) {
                return [p1, p2];
            } else {
                continue;
            }
        }
    }
    
    return null;
}