import React from 'react';
import './App.css';
import { 
  credits,
  reels, 
  spinReels, 
  enableDiagonal, 
  enableTopAndBottom,
  enableMiddle, 
  winConditions
} from './functions/functions'
import SlotContainer from './components/slot-container/slot-container.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reels, 
      winConditions
    };
  }

  render() {
    const { reels } = this.state;
    return (
      <div className='game-container'>
        <div className='slot-container'>
          <div className='reel'>
            <div className='icon'>{reels[0][2]}</div> 
            <div className='icon'>{reels[0][1]}</div>
            <div className='icon'>{reels[0][0]}</div>
          </div>
          <div className='reel'>
            <div className='icon'>{reels[1][2]}</div>
            <div className='icon'>{reels[1][1]}</div>
            <div className='icon'>{reels[1][0]}</div>
          </div>
          <div className='reel'>
            <div className='icon'>{reels[2][2]}</div>
            <div className='icon'>{reels[2][1]}</div>
            <div className='icon'>{reels[2][0]}</div>
          </div>
        </div>
        <div className='buttons-container'>
          <button className='spin' onClick={() => {
            this.setState({reels: spinReels()});
          }}>Spin!</button>
          <div className='bet-options'>
            <button onClick={() => {
              this.setState({winConditions: enableMiddle()});
            }}>Bet 1</button>
            <button onClick={() => {
              this.setState({winConditions: enableTopAndBottom()});
            }}>Bet 2</button>
            <button onClick={() => {
              this.setState({winConditions: enableDiagonal()});
            }}>Bet 3</button>  
          </div>      
        </div>
        <div className='credits'>Remaining credits: {credits}</div>
      </div>
    );
  }
}


export default App;
