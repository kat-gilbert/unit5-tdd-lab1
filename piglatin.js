
const translate = (wordToBeTranslated) => {
    wordToBeTranslated = wordToBeTranslated.toLowerCase();

    if (wordToBeTranslated.startsWith( "a") || wordToBeTranslated.startsWith("e") || wordToBeTranslated.startsWith("i") || wordToBeTranslated.startsWith("o") || wordToBeTranslated.startsWith("u")) {
            return wordToBeTranslated + "way";
    }

       else { 
        let firstLetter = wordToBeTranslated.charAt(0);
        let slicedWord = wordToBeTranslated.slice(1);

        wordToBeTranslated = slicedWord + firstLetter + "ay";
        return wordToBeTranslated;
       }
};

console.log(translate("Emma"));
console.log(translate("lenny"));

module.exports = translate;