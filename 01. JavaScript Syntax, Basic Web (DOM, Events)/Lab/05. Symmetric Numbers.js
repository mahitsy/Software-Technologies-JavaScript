function symmetricNumber(n) {
    let number = Number(n[0])


    for (let i = 1; i <= number; i++) {
        if (isSymmetric('' + i)) {
            console.log(i)
        }
    }

    function isSymmetric(symmetricNumber) {
        for (let i = 0; i < symmetricNumber.length; i++) {
            if (symmetricNumber[i] !== symmetricNumber[symmetricNumber.length - 1 - i]) {
                return false
            }
        }

        return true
    }

}

symmetricNumber(['100'])