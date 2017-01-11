//The Colour Mixer

var welcome = confirm("Welcome to the colour mixing machine!\nHere you can mix any two primary colours and see the output.\nClick OK to proceed.");

var colour = [];
var number = ["first", "second"];

for (i = 0; i <= 1; i++) {
    do {
        colour[i] = prompt("Please choose your " + number[i] + " primary colour.").toUpperCase();
        if (colour[i] != "RED" && colour[i] != "BLUE" && colour[i] != "YELLOW") {
            alert("That colour is not primary.\nPlease select RED, YELLOW or BLUE.");
        }
        else {
             break;
        }
    } while (true);
}


var colourMixer = {
    "RED":{
        "BLUE":"made PURPLE",
        "YELLOW":"made ORANGE",
        "RED":"made more RED!"
    },
    "YELLOW":{
        "BLUE":"made GREEN",
        "RED":"made ORANGE",
        "YELLOW": "made more YELLOW!"
    },
    "BLUE":{
        "RED":"made PURPLE",
        "YELLOW":"made GREEN",
        "BLUE":"made more BLUE!"
    }
};


alert("You " + colourMixer[colour[0]][colour[1]]);
