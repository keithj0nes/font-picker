import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MasterInput from './components/MasterInput';
import FontPreview from './components/FontPreview';

class App extends Component {

  state = {
    masterText: "",
    fontPreviewCount: 1
  }

  handleMasterText = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  addPreview = () => {
    this.setState({fontPreviewCount: this.state.fontPreviewCount+1})
  }

  render() {

    var fp = []
    for(var i = 1; i < this.state.fontPreviewCount; i++){
      fp.push(i)
    }

    console.log(this.state.fontPreviewCount);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <MasterInput handleMasterText={this.handleMasterText}/>
        <FontPreview masterText={this.state.masterText}/>

        {
          fp.map((item, index) => {
            return <FontPreview masterText={this.state.masterText} key={index}/>

          })
        }
        <button onClick={this.addPreview}>Add Preview</button>
      </div>
    );
  }
}

export default App;
