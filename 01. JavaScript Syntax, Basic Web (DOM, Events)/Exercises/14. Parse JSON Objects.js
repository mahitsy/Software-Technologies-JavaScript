function pareFromJSON(arr) {
    let array = new Array()
    for (let string of arr) {
        let object = JSON.parse(string)
        array.push(object)
    }

    for (let obj of array) {
        for (let key of Object.keys(obj)) {
            console.log(`${key.replace(/\w\S*/g, function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            })}: ${obj[key]}`)

        }
    }
}

pareFromJSON([
    '{"name":"Gosho","age":10,"date":"19/06/2005"}',
    '{"name":"Tosho","age":11,"date":"04/04/2005"}'
])