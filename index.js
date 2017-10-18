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
    "Knock knock. Race condition. Who's there?",
    "What's the best part about UDP jokes? I don't care if you get them.",
    "A SQL statement walks into a bar and sees two tables. It approaches, and asks may I join?",
    "A web developer walks into a bar, and immediately leaves in disgust after seeing it was laid out in tables.",
    "Yo' mama so FAT she can't save files larger than 4 Gigabites",
    "Why do programmers confuse Halloween and Christmas? Because Oct 31 = Dec 25.",
    "If you put a million monkeys at a million keyboards, one of them will eventually write a java program. The rest will write Perl programs",
    "An SEO expert walks into a bar, pub, liquore store, brewery, alchohol, beer, whiskey, vodka, bourbon, rum",
    "A man walks into a bar and asks for 1.4 root beers. The bartender replies, 'I'll have to charge you extra, thats a rootbeer float'. The man says 'In that case, make it a double.'",  
    "A java programmer sets two glasses of water on his bedside table beforegoing to sleep. A full one in case he gets thirsty, and an empty one in case he doesn't", 
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
