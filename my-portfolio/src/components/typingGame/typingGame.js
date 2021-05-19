import React, { Component } from 'react';
import './typingGame.scss';

//array of word prompts [spellbook]
let myArray = [
    "weenus erectus",
    "leviOHsah",
    "kersplaticus",
    "abrakablam"
];

//set the length of the array to a variable to make it dynamic
let arrayLength = myArray.length

//copy of the original array to repopulate myArray once it is emptied
let newArray = []

class TypingGame extends Component {
    constructor() {
        super();
        //setting the initial states required
        this.state = {
            points: 10,
            wordPrompt: 'start',
            userInput: '',
        }
    }

    //function to change displayed text if the userInput is correct
    changeDisplay = () => {
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
        this.setState({ wordPrompt: newItem });

        console.log(this.state.start)

        // console.log(myArray)
        // console.log(newArray)
        // console.log(arrayItem)
        // console.log(newItem)
        // console.log(this.state.wordPrompt)
        // console.log(this.state.userInput)
    }

    enterPressed(event) {
        var code = event.keyCode || event.which;
        if (code === 13) { //13 is the enter keycode
            this.checkInput()
        }

    }

    //function to check if the user's input matches the word prompt
    checkInput = () => {

        //if the user's input matches the word prompt, add points to the user's total
        if (this.state.userInput === this.state.wordPrompt) {
            this.setState({ points: this.state.points + 5 });
            // console.log("success");
            this.changeDisplay()
            this.setState({ userInput: '' })
            //if the user's input DOES NOT match the word prompt, subtract points from the user's total
        } else {
            this.setState({ points: this.state.points - 5 });
            // console.log("failure")
            // console.log(this.state.wordPrompt)
            // console.log(this.state.userInput)
        }

    }

    start = () => {
        if (this.state.points > 0) {
            setInterval(() => {
                this.setState({ points: this.state.points - 1 })
            }, 1000)
        }
        document.getElementById("userInput").focus();
    }

    render() {
        return (
            <section>
                <p id="helloWorld">{this.state.wordPrompt}</p>
                <input id="userInput" placeholder="type spell here" value={this.state.userInput} onChange={(e) => this.setState({ userInput: e.target.value })} onKeyPress={this.enterPressed.bind(this)}></input>
                <p>{this.state.points}</p>
                <button onClick={this.start}></button>
            </section>
        );
    }
}


export default TypingGame;