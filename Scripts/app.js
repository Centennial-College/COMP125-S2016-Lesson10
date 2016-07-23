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

    var xhrAddressBook;
    var xhrNavData;

    // we can use a named function instead of an anonymous function
    function readData() {
        // data loaded             everything is okay
        if (xhrAddressBook.readyState == 4 && xhrAddressBook.status == 200) {

            var addressbook = JSON.parse(xhrAddressBook.responseText);
            var contacts = addressbook.contacts;

            contacts.forEach(function (contact) {
                console.log(contact);
            }, this);

        }
    }

    function readNavData() {
        if (xhrNavData.readyState == 4 && xhrNavData.status == 200) {

            // create a reference to the HTMLElement
            var mainNav = document.getElementById("mainNav");
            mainNav.innerHTML = xhrNavData.responseText;

            setActivePage();
        }
    }

    function readAddressBook() {
        xhrAddressBook = new XMLHttpRequest(); // step 1 - create xhr object
        // NOTE: the path is relative to the html, not app.js
        xhrAddressBook.open("GET", "contacts.json", true); // step 2 - open request
        xhrAddressBook.send(null); // step 3 - send request
        xhrAddressBook.addEventListener("readystatechange", readData); // step 4 - wait for file to load
    }

    function setActivePage() {
        switch (document.title) {
            case "Home":
                document.getElementById("index").setAttribute("class", "active");
                break;
            case "About Me":
                document.getElementById("about").setAttribute("class", "active");
                break;
            case "Projects":
                document.getElementById("projects").setAttribute("class", "active");
                break;
            case "Contact Me":
                document.getElementById("contact").setAttribute("class", "active");
                break;
        }
    }

    function loadNavBar() {
        xhrNavData = new XMLHttpRequest();
        xhrNavData.open("GET", "Partials/navbar.html", true);
        xhrNavData.send(null);
        xhrNavData.addEventListener("readystatechange", readNavData);
    }

    // app entry function
    function init() {
        loadNavBar();
        readAddressBook();
    }


    // call init functin when window finishes loading
    window.addEventListener("load", init);

})();