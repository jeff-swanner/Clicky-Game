import React from "react";

// Imports neccesary react components
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Images from "./components/Images";
import Footer from "./components/Footer";

// Imports finPics JSON file with references to image files
import finPics from "./components/finPics.json";

// Imports function used to shuffle array order
import shuffle from "./components/shuffle";

// Empty array used to store the already chosen array items
var chosenArray = [];

class App extends React.Component {
  // Adding the score variables and finPics array to the state
  state = {
      currentScore: 0,
      finPics,
      topScore: 0
  };

  // gameLoop handles onclick events for images
  gameLoop = (event) => {
    event.preventDefault();
    // Grabs the unique alt tag of the image clicked on
    let chosen = event.target.getAttribute('alt');

    // Checks if image has been saved in chosenArray
    if (chosenArray.includes(chosen)){
      // Resets score to 0 if already saved in chosenArray
      this.setState({ currentScore: 0 });
      // Empties chosen array to reset game
      chosenArray =[];
    } else {
      // If not in chosenArray increments currentScore by 1
      this.setState({ currentScore: this.state.currentScore + 1 });
      // Checks the topScore and updates if currentScore is higher than top score
      if (this.state.currentScore >= this.state.topScore) {
          this.setState({ topScore: this.state.topScore + 1 });
      };
      // Pushes the selected array item to chosenArray
      chosenArray.push(chosen);
    };

    // Shuffles the finPics array
    this.setState({ finPics: shuffle(this.state.finPics)});        
  };

  render() {
    return (
      <div>
        <Navbar
          // sends current score and top score to Navbar as props
          currentScore = {this.state.currentScore}
          topScore = {this.state.topScore}
        />
        <Jumbotron />
        <Images 
          // Sends finPics array and gameloop function to images as props
          finPics = {this.state.finPics}
          gameLoop = {this.gameLoop}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
