import React, { Component } from 'react';
import '../styles/styles.css';

//array of text that will populate onClick
let myArray = [
    //fun
    "because I couldn't become Spider-Man.",
    "and all of your base are belong to me.",
    "&lt;div&gt;{funnyText}&lt;/div&gt;",
    "who will never not pet a dog.",
    "and a black belt in Kung Fu.",
    "who thinks alpacas are delightful.",
    "and I'm happy you're here. Welcome!",
    "and coffee is my life force",
    "by day, asleep by night",
    "and sometimes a huge nerd",
    //less fun
    "and I built this site using React.",
    "who is constantly learning.",
    "that's open to new opportunities.",
    "with an eye for detail.",
    "with a UX design certificate",
    "who collaborates well with others",
    "that creates user-friendly experiences",
];

//set the length of the array to a variable to make it dynamic
let arrayLength = myArray.length

//copy of the original array to repopulate myArray once it is emptied
let newArray = []

class Hero extends Component {
    render() {

        //function to change displayed text onClick
        const changeDisplay = () => {

            //sets an empty array to store value of displayed array item
            let arrayItem = []

            //select a random item from myArray
            let newItem = myArray[Math.floor(Math.random() * myArray.length)];

            //sets the displayed text to the random item from myArray
            document.getElementById("randomized").innerHTML = newItem

            //store the currently displayed array item in arrayItem for comparison
            arrayItem.push(document.getElementById("randomized").innerHTML)

            //store a copy of the original array
            newArray.push(document.getElementById("randomized").innerHTML)

            //compare myArray to the currently displayed item. remove it from myArray
            var i
            for (i = 0; i <= myArray.length; i++) {
                if (myArray[i] === arrayItem[0]) {
                    myArray.splice(i, 1)
                }
            }
            //when my array is empty it will repopulate with newArray
            if (newArray.length === arrayLength) {
                for (i = 0; i <= arrayLength - 2; i++) {
                    myArray.push(newArray[i])
                }
                newArray.splice(0, arrayLength)
                newArray.push(document.getElementById("randomized").innerHTML)
            }
        }

        return (
            <>
                <p>Arnold Don Paul</p>
                <p>I'm a Web Developer <span id="randomized" >based in Toronto, Canada.</span></p>
                <button onClick={changeDisplay}>click me!</button>
            </>
        );
    }
}

export default Hero;