function multiplyOrDivineANumber(arr) {

    let x = Number(arr[0])
    let y = Number(arr[1])

    if (x > y)
        console.log(x / y)
    else
        console.log(x * y)
}

multiplyOrDivineANumber(['2', '3'])