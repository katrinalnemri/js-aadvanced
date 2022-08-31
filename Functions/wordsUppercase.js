function wordsUppercase(str) {
    let output = str.toUpperCase().match(/\w+/g).join(", ")
    console.log(output)
}
wordsUppercase('Hi, how are you?')