function multipleValues(arr) {
    let searchKey = arr.pop()
    let obj = {}

    for (let i = 0; i < arr.length; i++) {
        let token = arr[i].split(' ')
        let key = token[0]
        let value = token[1]
        if(!obj.hasOwnProperty(key)){
            obj[key] = new Array()
        }
        obj[key].push(value)
    }

    if(obj.hasOwnProperty(searchKey)){
        for (let value of obj[searchKey]) {
            console.log(value)
        }
    }else {
        console.log("None")
    }

}

multipleValues([
    '3 test',
    '3 test1',
    '4 test2',
    '4 test3',
    '4 test5',
    '42'
])