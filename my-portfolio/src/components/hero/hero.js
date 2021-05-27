import React, { Component } from 'react';
import './hero.scss';

//array of text that will populate "web developer ___" onClick
let myArray = [
    //fun
    "because I couldn't become Spider-Man.",
    "& all your base are belong to us.",
    "& <div>{funnyText}</div>",
    "& sometimes a huge nerd.",
    "who will never not pet a dog.",
    "who's happy you clicked the button.",
    "whose life force is coffee.",
    "by day, billionaire vigilante by night. ᶻᶻᶻ",
    "of Slytherin House.",
    ">ERR! I'm sorry, D̴a̵̠̚v̴̯̇e̵̩̚. I'm afraid I can't do that.",
    // //less fun
    "that built this site using React.",
    "who is constantly learning.",
    "that's open to new opportunities.",
    "with an eye for detail.",
    "with a UX design certificate.",
    "who collaborates well with others.",
    "that creates user-friendly experiences.",
    // //interests
    "& personal trainer.",
    "& Twitch streamer [ @feedsnacks ].",
    "& black sash in Kung Fu.",
    "& video game enthusiast.",
    "& collector of comic books.",
    "& cinephile.",
    "& amateur card magician.",
    "& occasional rock climber.",
    "attempting to learn the ukelele.",
    "who thinks alpacas are delightful.",
    "who can almost finish a Rubik's Cube.",
];

//set the length of the array to a variable to make it dynamic
let arrayLength = myArray.length

//copy of the original array to repopulate myArray once it is emptied
let newArray = []

class Hero extends Component {
    render() {

        //function to change displayed text onClick
        const changeDisplay = () => {

            document.getElementById("randomized").innerHTML = ""

            //sets an empty array to store value of displayed array item
            let arrayItem = []

            //select a random item from myArray
            let newItem = myArray[Math.floor(Math.random() * myArray.length)];

            //store the currently displayed array item in arrayItem for comparison
            arrayItem.push(newItem)

            //store a copy of the original array
            if (arrayItem !== "") {
                newArray.push(String(arrayItem))
            }

            //compare myArray to the currently displayed item. remove it from myArray
            var i
            for (i = 0; i <= myArray.length; i++) {
                if (myArray[i] === arrayItem[0]) {
                    myArray.splice(i, 1)
                }
            }
            //when myArray is empty it will repopulate with newArray
            if (newArray.length === arrayLength) {
                for (i = 0; i <= arrayLength - 2; i++) {
                    myArray.push(newArray[i])
                }
                newArray.splice(0, arrayLength)
                newArray.push(String(arrayItem))
            }
            //function to simulate typing
            var j = 0
            function type() {
                if (j < newItem.length) {
                    document.getElementById("randomized").innerHTML += newItem.charAt(j);
                    j++;
                    setTimeout(type, 30)//typing speed
                }
            }

            type()//starts typing once the arrays have been updated

            console.log(myArray)
            console.log(newArray)
            console.log(arrayItem)
            console.log(newItem)
        }

        return (
            <>
                <div className="hero">
                    <p className="hero__text">web developer</p>
                    <div className="hero__dynamicSection">
                        <p>
                            <span className="hero__text--dynamic" id="randomized">based in Toronto, Canada.</span>
                            <span className="hero__text--blink">|</span>
                        </p>
                        <div className="hero__button" onClick={changeDisplay}>
                            <span className="hero__button--dice" role="img" aria-label="dice">🎲</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Hero;