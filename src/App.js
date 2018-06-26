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

  //set scores

  //rearrange images function
  
  //set all images to clicks === 0



    handleClick(clickedFlower) {
                                            console.log('Clicked: ', clickedFlower);
      if (clickedFlower.clicks === 0) {
        //Increase flower click counter
        clickedFlower.clicks++

        //Increase Score and/or High Score
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

      // rearrange images
//    
      }
      else {
        //Reset score
        var resetScore = this.state.scores;
        resetScore[0].current = 0;
        this.setState({
          resetScore,
        });
      }
//    // all images clicks === 0
//     // rearrange images      
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
                  <div key={flower.id} className="card" style={{ backgroundImage : `url(${flower.image})` }} onClick={() => this.handleClick(flower)}></div>
                ))}
              </main>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
