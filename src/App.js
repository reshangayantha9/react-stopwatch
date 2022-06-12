import React from "react";
import "./App.css";

const Header = () => {
  return <h1 className="heading">STOP WATCH</h1>;
};

const Timer = (props) => {
  return (
    <div className="timer">
      <div className="hour">{props.time.hour}</div>:
      <div className="minute">{props.time.minute}</div>:
      <div className="second">{props.time.second}</div>:
      <div className="millisecond">{props.time.millisecond}</div>
    </div>
  );
};

const Action = (props) => {
  return (
    <div className="action">
      <button onClick={props.handleReset}id='reset'>RESET</button>
      <button onClick={props.handleStart}id='start'>START</button>
      <button onClick={props.handleStop}id='stop'>STOP</button>
    </div>
  );
};

class App extends React.Component {
  constructor(props, timer) {
    super(props);
    this.timer = timer;
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    };
  }
  handleStart = () => {
    this.timer=setInterval(()=>{
      this.setState((prevState)=>{
        return{
          millisecond:prevState.millisecond+1
        }
      });
      if(this.state.millisecond === 100){
        this.setState((prevState)=>{
          return{
            second:prevState.second+1,
            millisecond:0
          }
        })
      }
      if(this.state.second ===60){
        this.setState((prevState)=>{
          return{
            minute:prevState.minute+1,
            second:0
          }
        })
      }
      if(this.state.minute ===60){
        this.setState((prevState)=>{
          return{
            hour:prevState.hour+1,
            minute:0
          }
        })
      }
    },10)
  };

  handleStop = () => {
    clearInterval(this.timer);
  };

  handleReset = () => {
    this.setState(() => {
      return {
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
      };
    });
  };

  render() {
    return (
      <div className="parent">
        <div className="main">
        <Header />
        <Timer time={this.state}/>
        <Action
          handleStart={this.handleStart}
          handleStop={this.handleStop}
          handleReset={this.handleReset}
        />
        </div>
      </div>
    );
  }
}

export default App;
