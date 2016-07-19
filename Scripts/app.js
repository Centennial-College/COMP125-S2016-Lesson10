/**
 * FileName: app.js
 * 
 * @author Kevin Ma
 * @date July 12, 2016
 * 
 * StudentID: 300867968
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";

    // app entry function
    function init() {
        console.log('App Started');

        var mystring = "MyStrIng";
        console.log("Original string: " + mystring);
        var newString = mystring.toLowerCase();
        console.log("New String: " + newString);

        var firstNameLastName = "John Smith";
        var spacePosition = firstNameLastName.indexOf(" ");
        console.log(spacePosition);

        var firstName = firstNameLastName.slice(0, spacePosition + 1);
        console.log(firstName)

        var myArray = new Array();
        myArray[0] = "firstString"
        var myOtherArray = ["firstString", "secondString", 5, new Array()]

        // 2 diff ways regexp in javascript
        var regexp = /^Hello$/

        var regexp2 = new RegExp("Hello");

        function Card(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        var deck = [
            new Card("Ace", "Spades"),
            new Card("King", "Diamonds"),
            new Card("Jack", "Clubs"),
            new Card("Queen", "Hearts"),
            new Card("10", "Spades")
        ]

        // 3 ways to iterate through array in JavaScript
        // for loop
        // not efficient in this case because calculating length
        // everytime. for large data sets can cause overhead
        for (var index = 0; index < deck.length; index++) {
            console.log(deck[index].face + " " + deck[index].suit)
        }

        // foreach loop - preferred method for this type of activity
        deck.forEach(function (card) {
            console.log(card.face + " " + card.suit);
        }, this);

        // forin loop
        for (var card in deck) {
            if (deck.hasOwnProperty(card)) {
                console.log(deck[card].face + " " + deck[card].suit)
            }
        }
    }


    // call init functin when window finishes loading
    window.addEventListener("load", init);

})();