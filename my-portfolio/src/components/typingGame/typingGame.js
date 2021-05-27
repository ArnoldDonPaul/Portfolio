import React, { Component } from 'react';
import './typingGame.scss';

import nyanCat from '../../assets/images/NyanCat.gif'
import nicCage from '../../assets/images/nicCage.jpg'

//array of word prompts [spellbook]
let myArray = [
    "confusiate",
    "traiteus",
    "inceneus",
    "leviaris",
    "supresius",
    "illumieseo",
    "magnendio",
    "extierio",
    "defeneris",
    "slugiato",
    "repeotis",
    "ethereos",
    "neuralenum",
    "duplior",
    "muferous",
    "stupendo",
    "sanctaro",
    "petrifiteus",
    "corrupteous",
    "reflecto",
    "araeum",
    "evicteris",
    "isolotum",
    "magnulso",
    "tranquro",
    "mystifecto",
    "kersplaticus",
    "abrakablam",
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
            win: false,
            lose: false,
            neutral: false,
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
            this.setState({ points: this.state.points + 10 });
            // console.log("success");
            this.changeDisplay()
            this.setState({ userInput: '' })
            //if the user's input DOES NOT match the word prompt, subtract points from the user's total
        } else {
            this.setState({ points: this.state.points - 3 });
            // console.log("failure")
            // console.log(this.state.wordPrompt)
            // console.log(this.state.userInput)
        }

    }

    //begins the timer and focuses on the input field after changing it from disabled to not disabled
    start = () => {
        this.setState({ points: 10 })
        this.points = setInterval(() => {
            this.setState({ points: this.state.points - 2 })
        }, 1000)
        this.changeDisplay()
        this.setState({ win: false })
        this.setState({ lose: false })
        this.setState({ start: true })
        this.setState({ neutral: true })
        document.getElementById("userInput").disabled = !document.getElementById("userInput").disabled
        document.getElementById("userInput").focus();
        document.getElementById("userInput").placeholder = ""
    }

    winner = () => {
        this.setState({ wordPrompt: "YOU DID IT!" })
        this.setState({ points: "WINNER" })
        clearInterval(this.points)
        this.setState({ start: false })
        this.setState({ neutral: false })
        this.setState({ win: true })
        document.getElementById("userInput").disabled = true
    }

    gameOver = () => {
        this.setState({ wordPrompt: "GAME OVER" })
        this.setState({ points: "LOSER" })
        clearInterval(this.points)
        this.setState({ start: false })
        this.setState({ neutral: false })
        this.setState({ lose: true })
        document.getElementById("userInput").disabled = true
    }

    render() {

        //when the points hit zero, initiate game over. when the points hit 50, initiate win function
        if (this.state.points < 0) {
            this.gameOver()
        } else if (this.state.points > 50) {
            this.winner()
        }
        return (
            <section>
                {
                    this.state.win === true && (
                        <img alt="win" src={nicCage}></img>
                    )
                }
                {
                    this.state.lose === true && (
                        <img alt="lose" src={nicCage}></img>
                    )
                }
                {
                    this.state.neutral === true && (
                        <img alt="neutral" src={nyanCat}></img>
                    )
                }
                <p>{this.state.wordPrompt}</p>
                <input id="userInput" autocomplete="off" placeholder="press START" value={this.state.userInput} onChange={(e) => this.setState({ userInput: e.target.value })} onKeyPress={this.enterPressed.bind(this)} disabled></input>
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