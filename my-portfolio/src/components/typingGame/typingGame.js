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
            start: false,
            points: 10,
            wordPrompt: '',
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

    //executes the checkInput function when Enter is pressed on the keyboard by the user
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

    //begins the timer and focuses on the input field after changing it from disabled to not disabled
    start = () => {
        //if its GAME OVER, reset the points to 10 when the user clicks START
        if (this.state.points === "LOSER") {
            this.setState({ points: 10 })
        }
        this.setState({ points: 10 })
        this.points = setInterval(() => {
            this.setState({ points: this.state.points - 2 })
        }, 1000)
        this.setState({ start: true })
        this.setState({ wordPrompt: "magical words" })
        document.getElementById("userInput").disabled = !document.getElementById("userInput").disabled
        document.getElementById("userInput").focus();
        document.getElementById("userInput").placeholder = ""
    }

    gameOver = () => {
        this.setState({ wordPrompt: "GAME OVER" })
        this.setState({ points: "LOSER" })
        clearInterval(this.points)
        this.setState({ start: false })
        document.getElementById("userInput").disabled = true
    }

    render() {
        //when the points hit zero, initiate game over
        if (this.state.points < 0) {
            this.gameOver()
        }
        return (
            <section>
                <p id="helloWorld">{this.state.wordPrompt}</p>
                <input id="userInput" placeholder="press START" value={this.state.userInput} onChange={(e) => this.setState({ userInput: e.target.value })} onKeyPress={this.enterPressed.bind(this)} disabled></input>
                <p>{this.state.points}</p>
                {
                    this.state.start === false && (
                        <button onClick={this.start}>START</button>
                    )
                }

            </section>
        );
    }
}


export default TypingGame;