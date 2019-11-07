import React from "react";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Images from "./Images";

var canidates = [
    {
      name: "biden",
      source: "./biden.jpeg"
    },
    {
      name: "booker",
      source: "./booker.jpeg"
    },
    {
      name: "bullock",
      source: "./bullock.jpeg"
    },
    {
      name: "buttigieg",
      source: "./buttigieg.jpeg"
    },
    {
      name: "castro",
      source: "./castro.jpeg"
    },
    {
      name: "delaney",
      source: "./delaney.jpeg"
    },
    {
      name: "harris",
      source: "./harris.jpeg"
    },
    {
      name: "o-rourke",
      source: "./o-rourke.jpeg"
    },
    {
      name: "sanders",
      source: "./sanders.jpeg"
    },
    {
      name: "steyer",
      source: "./steyer.jpeg"
    },
    {
      name: "warren",
      source: "./warren.jpeg"
    },
    {
      name: "yang",
      source: "./yang.jpeg"
    }
]

var chosenArray = [];

var shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

class Main extends React.Component {
    // Setting the initial state of the Counter component
    state = {
        currentScore: 0,
        canidates,
        topScore: 0
    };

    // handleIncrement increments this.state.count by 1
    handleIncrement = (event) => {
        event.preventDefault();
        let chosen = event.target.getAttribute('alt');
        if (chosenArray.includes(chosen)){
            this.setState({ currentScore: 0 });
            chosenArray =[];
        } else {
            this.setState({ currentScore: this.state.currentScore + 1 });
            if (this.state.currentScore >= this.state.topScore) {
                this.setState({ topScore: this.state.currentScore + 1 });
            };
            chosenArray.push(chosen);
        };
        this.setState({ canidates: shuffle(this.state.canidates)});
        
        // We always use the setState method to update a component's state
        
    };

    render() {
        return (
            <div>
                <Navbar 
                    currentScore = {this.state.currentScore}
                    topScore = {this.state.topScore}
                />
                <Jumbotron />
                <Images 
                  canidates = {this.state.canidates}
                  handleIncrement = {this.handleIncrement}
                />
                <Footer />
            </div>
        );
    }
}

export default Main;