"use strict"

// functions

let updateDom = (domElement, content) => {
    if (content !== domElement.textContent) {
        return content < 10 ? '0' + content : content;
    }
    return domElement.textContent;
}

//dom elements

let days = document.querySelector("#days-js");
let hrs = document.querySelector("#hrs-js");
let mins = document.querySelector("#mins-js");
let secs = document.querySelector("#secs-js");


//variables
let countdown = {
    timeInSec: 0,
    day: 0,
    hr: 0,
    min: 0,
    sec: 0,
    convert_to_TimeInSec: function () {
        this.timeInSec = this.sec + this.min * 60 + this.hr * 3600 + this.day * 86400;
    },
    convert_to_Time: function () {

        this.day = parseInt(this.timeInSec / 86400);
        this.timeInSec = this.timeInSec % 86400;
        this.hr = parseInt(this.timeInSec / 3600);
        this.timeInSec = this.timeInSec % 3600;
        this.min = parseInt(this.timeInSec / 60);
        this.sec = this.timeInSec % 60;
    },
    start: function (days) {
        this.day = days
    },
    show: function () {
        console.log(`day: ${this.day} hr:${this.hr} min:${this.min} sec:${this.sec}`)
    }
}

//main

countdown.start(14);

setInterval(() => {
    countdown.convert_to_TimeInSec();
    countdown.timeInSec--;
    countdown.convert_to_Time();
    days.textContent = updateDom(days, countdown.day);
    hrs.textContent = updateDom(days, countdown.hr);
    mins.textContent = updateDom(days, countdown.min);
    secs.textContent = updateDom(days, countdown.sec);
}, 1000)
