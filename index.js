'use strict';

let alexaReq = require('alexa-sdk');
let skill = "Next American Holiday";
let APP_ID = "amzn1.ask.skill.9a7d4210-e6cd-4903-b4c4-f097c96426f1";

let jokes = [
    "I count from 0",
    "Catch me at the Foo Bar",
    "If my life were a heap, I would constantly be suffering from heap corruption",
    "How many programmers does it take to screw in a lightbulb? None, it's a hardware problem",
    "In order to understand recursion, you must first understand recursion",
    "Why don't programmers tell jokes in octal? Because 7 10 11!",
    "Why do Java programmers wear glasses? Because they don't see sharp",
    "Why did the programmer quit his job? Because he didn’t get arrays.",
    "There are 10 kinds of people in this world: Those who understand binary, those who don't, and those who weren't expecting a base 3 joke.",
    "A programmer heads out to the store. His wife says while you're out, get some milk. He never came home.",
    "What do you call a developer that doesn't comment code? A developer.",
    "A programmer is told to go to hell, he finds the worst part of that statement is the go to",
    "I am above average at looking things up on Google",
    "How do functions break up? They stop calling each other!",
    "When do two functions fight? When they have arguments",
    "What happened to the function that ran away? It never returned",
    "Why did the web developer send a few extra bucks to his hosting provider? Because he heard that he should always tip his server.",
];

exports.handler = (event, context, callback) => {
    let alexa = alexaReq.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

let handlers = {
    'LaunchRequest': function() {
        this.emit('GetJokeIntent');
    },
    'GetJokeIntent': function() {
        let idx = Math.floor(jokes.length * Math.random());
        let joke = jokes[idx];

        let out = "Joke: " + joke;
        this.emit(":tellWithCard", out, skill, joke);
    },
    'AMAZON.StopIntent': function() {
        this.emit(":tell", "onPause()");
    },
    'AMAZON.CancelIntent': function() {
        this.emit(":tell", "System.exit(0)");
    },
    'AMAZON.HelpIntent': function() {
        let out = "You can ask me to give you a programming joke or for programming humor";
        let again = "How can I help?";
        this.emit(":ask", out, again);
    }
}
