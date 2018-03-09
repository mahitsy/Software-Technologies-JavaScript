function setValue(arr) {
    let length = Number(arr[0])

    let array = new Array(length).fill(0)

    for (let i = 1; i < arr.length; i++) {
        let token = arr[i].split(' - ')
        let index = token[0]
        let value = token[1]
        array[index] = value
    }

    for (let num of array) {
        console.log(num)
    }

}

setValue([
    '2',
    '0 - 5',
    '0 - 6',
    '0 - 7'
])