import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import flowers from "./flower.json";
import scores from "./scores.json";
import visuals from "./visuals.json";
import './App.css';


class App extends Component {
  state = {
    flowers,
    scores,
    visuals
  };


    handleClick(clickedFlower) {
      //console.log('Clicked: ', clickedFlower);
      var shaker = this.state.visuals
      console.log("no shake")


      if (clickedFlower.clicks === 0) {
        //Do NOT shake the flowers
        shaker[0].shake = "";
        shaker[1].message = "Pick a Flower!"
        this.setState({
          shaker
        })
        //Increase flower click counter
        clickedFlower.clicks++

        //Increase Score and/or Check for High Score
        var currentScores = this.state.scores;
        if (currentScores[0].current === currentScores[0].high){
          currentScores[0].current++;
          currentScores[0].high++;
        }
        else if (currentScores[0].current < currentScores[0].high){
          currentScores[0].current++;
        }
        else {
          console.log("houston, we have a problem")
        }
        this.setState({
          currentScores
        });
      }
      else {
        //Reset score
        var resetScore = this.state.scores;
        resetScore[0].current = 0;
        this.setState({
          resetScore,
        });
        // Reset clicks to 0 for all flower images
        this.state.flowers.forEach(flower => (
          flower.clicks = 0
        ))
        shaker[0].shake = "shake";
        shaker[1].message = "Wrong Flower!"
        this.setState({
          shaker
        })
        console.log(this.state.visuals[0].shake)
      }
    }      
  
  render() {
    //console.log(this.state.flowers)
    let classes = 'card '+ this.state.visuals[0].shake;
    return (
      <div className="App">
        <div id="root">
          <div>
              <NavBar 
                message={visuals[1].message}
                current={scores[0].current}
                high={scores[0].high}
              />
              <header className="header">
                <h1 className="frost">Clicky Game!</h1>
                <h2 className="frost">Click on an image to earn points,</h2> 
                <h2 className="frost">but click an image twice and it's game over!</h2>
              </header>
              <main className="container">
                {this.state.flowers.sort(function(a, b){return 0.5 - Math.random()}).map(flower => (
                  <div key={flower.id} className={classes} style={{ backgroundImage : `url(${flower.image})` }} onClick={() => this.handleClick(flower)}></div>
                ))}
              </main>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
