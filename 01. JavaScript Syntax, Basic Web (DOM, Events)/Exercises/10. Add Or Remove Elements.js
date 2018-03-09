function addOrRemoveElement(arr) {
    let arrayElements = []
    for (let i = 0; i < arr.length; i++) {
        let token = arr[i].split(' ')
        let command = token[0]
        let value = Number(token[1])
        if (command === 'add') {
            arrayElements.push(value)
        } else if (command === 'remove') {
            arrayElements.splice(value, 1)
        }
    }
    for (let element of arrayElements) {
        console.log(element)
    }
}

addOrRemoveElement([
        'add 3',
        'add 5',
        'remove 2',
        'remove 0',
        'add 7'
    ]
)