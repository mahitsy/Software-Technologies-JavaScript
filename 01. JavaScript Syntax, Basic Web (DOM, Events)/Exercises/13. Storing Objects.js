function storing(arr) {

    let array = new Array()

    for (let string of arr) {
        let tokens = string.split(' -> ')
        let [name, age, grade] = tokens

        array.push({
            Name: name,
            Age: Number(age),
            Grade: Number(grade).toFixed(2)
        })
    }

    for (let student of array) {
        for (let key of Object.keys(student)) {
            console.log(`${key}: ${student[key]}`)
        }
    }
}

storing([
    'Pesho -> 13 -> 6.00',
    'Ivan -> 12 -> 5.57',
    'Toni -> 13 -> 4.90'
])