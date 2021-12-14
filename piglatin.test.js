const translate = require("./piglatin");

describe("translate", function() {
    test("if a word starts with A", function() {

        expect(translate("apple")).toEqual("appleway");
    })
    test("if a word starts with e", function() {

        expect(translate("emma")).toEqual("emmaway");
    })
    test("if a word starts with i", function() {

        expect(translate("imagine")).toEqual("imagineway");
    })
    test("if a word starts with o", function() {

        expect(translate("Olive")).toEqual("oliveway");
    })
    test("if a word starts with u", function() {

        expect(translate("ursula")).toEqual("ursulaway");
    })

    test("if a word startig with a consonant changes", function() {
        expect(translate("tuesday")).toEqual("uesdaytay");
    })
    test("translate a word with a second letter as a vowel", function() {
        expect(translate("lion")).toEqual("ionlay");
    })
    test("translate a word with a second letter as consonant", function() {
        expect(translate("two")).toEqual("wotay");
    })
    test("translate another word with second letter as consonant", function() {
        expect(translate("chair")).toEqual("haircay");
    })
    test("translate another word with second letter as consonant", function() {
        expect(translate("chair")).toEqual("haircay");
    })

})
