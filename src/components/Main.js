import React, { Component } from "react";

class Main extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "fuck",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.username}. Your password is ${this.state.password}.`);
    this.setState({
      username: "",
      password: ""
    });
  };

  handlePictureClick = event => {
    event.preventDefault();
    console.log('test')

  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-info shadow fixed-top">
          <span class="navbar-brand mb-0 h1">Clicky Game</span>
          <span class="navbar-brand mb-0 h1">Click an Image to Begin!</span>
          <span class="navbar-brand mb-0 h1">Score: 0 | Top Score: 0</span>
        </nav>
        <div class="jumbotron jumbotron-fluid shadow">
          <div class="container">
            <h1 class="display-4">Learn the Canidates!</h1>
            <p class="lead">Click on an face to earn points, but don't click on any more than once!</p>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-3 zoom">
              <img src="./biden.jpeg" class="img-fluid  p-1" alt="gamePic" onClick={this.handlePictureClick}></img>
            </div>
            <div class="col-lg-3 zoom">
              <img src="./booker.jpeg" class="img-fluid  p-1" alt="gamePic"></img>
            </div>
            <div class="col-lg-3 zoom">
              <img src="./bullock.jpeg" class="img-fluid  p-1" alt="gamePic"></img>
            </div>
            <div class="col-lg-3 zoom">
              <img src="./buttigieg.jpeg" class="img-fluid  p-1" alt="gamePic"></img>
            </div>

            <div class="col-lg-3 zoom">
              <img src="./castro.jpeg" class="img-fluid  p-1" alt="gamePic"></img>
            </div>
            <div class="col-lg-3 zoom">
              <img src="./delaney.jpeg" class="img-fluid  p-1" alt="gamePic"></img>
            </div>
            <div class="col-lg-3 zoom">
              <img src="./harris.jpeg" class="img-fluid  p-1" alt="gamePic"></img>
            </div>
            <div class="col-lg-3 zoom">
              <img src="./klobuchar.jpeg" class="img-fluid  p-1" alt="gamePic"></img>
            </div>

            <div class="col-lg-3 zoom">
              <img src="./o-rourke.jpeg" class="img-fluid  p-1" alt="gamePic"></img>
            </div>
            <div class="col-lg-3 zoom">
              <img src="./sanders.jpeg" class="img-fluid  p-1" alt="gamePic"></img>
            </div>
            <div class="col-lg-3 zoom">
              <img src="./steyer.jpeg" class="img-fluid  p-1" alt="gamePic"></img>
            </div>
            <div class="col-lg-3 zoom">
              <img src="./warren.jpeg" class="img-fluid  p-1" alt="gamePic"></img>
            </div>
          </div>
        </div>
        <footer class="page-footer font-small text-light bg-dark">
          <div class="footer-copyright text-center py-3">Github Repo:
            <a class="text-danger" href="https://github.com/jeff-swanner/clicky-game"> Click Here</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Main;
