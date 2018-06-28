import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MasterInput from './components/MasterInput';
import FontPreview from './components/FontPreview';

class App extends Component {

  state = {
    masterText: "",
    fontPreviewCount: []
  }

  handleMasterText = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  addPreview = () => {
    const fontPreviewCount = [...this.state.fontPreviewCount, Date.now()]
    this.setState({fontPreviewCount})
  }

  removePreview = (ind) => {
    const fontPreviewCount = [...this.state.fontPreviewCount];
    const index = fontPreviewCount.indexOf(ind);
    if(index !== -1){
      fontPreviewCount.splice(index, 1)
      return this.setState({fontPreviewCount})
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <MasterInput handleMasterText={this.handleMasterText}/>
        <FontPreview masterText={this.state.masterText}/>

        {
          this.state.fontPreviewCount.map((item) => {
            return <FontPreview masterText={this.state.masterText} key={item} ind={item} removable={true} removePreview={this.removePreview}/>
          })
        }
        <button onClick={this.addPreview}>Add Preview</button>
      </div>
    );
  }
}

export default App;
