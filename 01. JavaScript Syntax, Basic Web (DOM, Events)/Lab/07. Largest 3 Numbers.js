function largest3Numbers(str) {
    let toNumber = str.map(Number)
    toNumber.sort((a, b) => b - a)
    let largestThreeNumbers = toNumber.slice(0,3)
    for (let i = 0; i < largestThreeNumbers.length; i++) {
        console.log(largestThreeNumbers[i])
    }
}

largest3Numbers([
    '10',
    '30',
    '15',
    '20',
    '50',
    '5'])