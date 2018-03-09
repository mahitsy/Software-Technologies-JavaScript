function positiveOrNegative(arr) {
    let x = Number(arr[0])
    let y = Number(arr[1])
    let z = Number(arr[2])

    let result = x * y * z

    if (result<0)
        console.log('Negative')
    else
        console.log('Positive')

}

positiveOrNegative(['2', '3', '-1'])