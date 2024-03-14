//  Name: Jennifer Morrison
//  Date: March 3, 2024
//  Class: Web115.0004
//  File Name: validationScript2.js

"use strict";
// JavaScript code for form validation
const myForm = document.getElementById("myForm");

// Add event listener when submit event is triggered
myForm.addEventListener('submit', function (event) {
    // Retrieve the input field value
    let fieldInput = myForm.inputField.value;
    
    // Set regular expression pattern for alphanumeric input
    let regex = /^[a-zA-Z0-9]*$/;
    // Check if the input value matches the pattern or input is empty string
    if (!regex.test(fieldInput) || (fieldInput === '')) {
        // Prevent form from submitting
        event.preventDefault();
        // Invalid input: display error message
        alert('Invalid format! Please submit numbers and letters only - no spaces or special characters.');
    } else {
        // Valid input: display confirmation and submit the form
        alert('Thank you for submitting your text.')
    }
});












