function sumByTown(array) {

    let sum = {}

    for (let i = 0; i < array.length; i++) {
        let obj = JSON.parse(array[i])
        if (sum.hasOwnProperty(obj.town)) {
            sum[obj.town] += obj.income
        } else {
            sum[obj.town] = obj.income
        }
    }

    let towns = Object.keys(sum).sort()

    for (let town of towns) {
        console.log(`${town} -> ${sum[town]}`)
    }
}

sumByTown(['{"town":"Sofia","income":200}',
    '{"town":"Varna","income":120}',
    '{"town":"Pleven","income":60}',
    '{"town":"Varna","income":70}']
)