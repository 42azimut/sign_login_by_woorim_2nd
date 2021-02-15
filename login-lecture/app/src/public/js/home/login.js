"use strict";

const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginButton = document.querySelector("button");

loginButton.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value
    };

    
    fetch("/login", {
        method: "POST",
        header: {
            'Content-Type': "application/json",
        },
        body: JSON.stringfy(req)
    });
}