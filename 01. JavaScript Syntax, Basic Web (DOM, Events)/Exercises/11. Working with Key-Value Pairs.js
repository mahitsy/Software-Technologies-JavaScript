function pairs(arr) {
   let searchKey = arr.pop()

    let result = {}

    for (let i = 0; i < arr.length; i++) {
        let token = arr[i].split(' ')
        let key = token[0]
        let value = token[1]

        result[key]=value
    }

    if(result.hasOwnProperty(searchKey)){
       console.log(result[searchKey])
    }else{
        console.log('None')
    }
}

pairs([
    '3 test',
    '3 test1',
    '4 test2',
    '4 test3',
    '4 test5',
    '43'

])