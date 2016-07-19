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

    var xhr;

    // we can use a named function instead of an anonymous function
    function readData() {
        // data loaded  everything is okay
        if (xhr.readyState == 4 && xhr.status == 200) {

            var addressbook = JSON.parse(xhr.responseText);
            var contacts = addressbook.contacts;

            contacts.forEach(function (contact) {
                console.log(contact);
            }, this);

        }
    }

    // app entry function
    function init() {
        xhr = new XMLHttpRequest(); // step 1 - create xhr object


        // NOTE: the path is relative to the html, not app.js
        // xhr.open("GET", "../addressbook.json", true);
        xhr.open("GET", "contacts.json", true); // step 2 - open request

        // step 3 - send request
        xhr.send(null);

        // step 4 - wait for file to load
        // xhr.onreadystatechange = displayAddressInfoToConsole;

        // addEventListener preferred over onevents 
        xhr.addEventListener("readystatechange", readData);
    }


    // call init functin when window finishes loading
    window.addEventListener("load", init);

})();