import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Pics from './Pics.js';

class App extends Component{
  onClickBtn = () =>{
    window.location.reload()
  }

  render(){
  return (
    <div className="App">
      <h1>Meme generator</h1>
      <Pics />
      <button className="btn" onClick = {this.onClickBtn}>Generate Meme</button>
      
    </div>
  );
}
}
export default App;
