import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import flowers from "./flower.json";
import scores from "./scores.json";
import './App.css';


class App extends Component {
  state = {
    flowers,
    scores
  };

  //rearrange images function
  

  //check for high score function

  //set all images to clicks === 0



    handleClick() {
      console.log('this is:', this);
    //If # of clicks on img === 0
      // clicks+
      // score+
      // rearrange images
    //Else
      // all images clicks === 0
      // check for high score
      // score === 0 
      // rearrange images      
    }      
  
  render() {
    console.log(this.state.flowers)
    return (
      <div className="App">
        <div id="root">
          <div>
              <NavBar 
                current={scores[0].current}
                high={scores[0].high}
              />
              <header className="header">
                <h1 className="frost">Clicky Game!</h1>
                <h2 className="frost">Click on an image to earn points,</h2> 
                <h2 className="frost">but click an image twice and it's game over!</h2>
              </header>
              <main className="container">
                {this.state.flowers.map(flower => (
                  <div key={flower.id} className="card" style={{ backgroundImage : `url(${flower.image})` }} onClick={(e) => this.handleClick(e)}></div>
                ))}
              </main>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
