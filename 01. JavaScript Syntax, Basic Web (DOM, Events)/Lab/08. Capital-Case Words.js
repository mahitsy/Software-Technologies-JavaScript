function extractCapitalCaseWords(arr) {
    let capitalCaseWords = [];
    for(let sentence of arr) {
        let words = sentence.split(/\W+/).filter(word => word != "");

        for(let word of words) {
            if(word == word.toUpperCase()) {
                capitalCaseWords.push(word);
            }
        }
    }

    console.log(capitalCaseWords.join(", "));
}

extractCapitalCaseWords([
    'We start by HTML, CSS, JavaScript, JSON and REST.',
    'Later we touch some PHP, MySQL and SQL.',
    'Later we play with C#, EF, SQL Server and ASP.NET MVC.',
    'Finally, we touch some Java, Hibernate and Spring.MVC.'
])