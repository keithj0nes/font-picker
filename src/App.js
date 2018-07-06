import React, { Component } from 'react';
import logo from './images/prismgraphicslogo.png';
import './App.css';

import MasterInput from './components/MasterInput';
import FontPreview from './components/FontPreview';

class App extends Component {

  state = {
    masterText: "",
    boatColor: "white",
    fontPreviewCount: []
  }

  handleMasterText = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  addPreview = () => {
    const fontPreviewCount = [...this.state.fontPreviewCount, Date.now()]
    this.setState({fontPreviewCount})
  }

  removePreview = (id) => {
    const fontPreviewCount = [...this.state.fontPreviewCount];
    const index = fontPreviewCount.indexOf(id);
    if(index !== -1){
      fontPreviewCount.splice(index, 1)
      return this.setState({fontPreviewCount})
    }
  }

  purchase = (details) => {
    console.log({...details, ...{text: this.state.masterText}});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Boat Lettering Customizer</h1>
        </header>

        <MasterInput handleMasterText={this.handleMasterText}/>
        Boat Color: <select onChange={this.handleMasterText} name="boatColor">
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>

        </select>
        <FontPreview
          masterText={this.state.masterText}
          purchase={this.purchase}
          id={1}
          boatColor={this.state.boatColor}
        />

        {
          this.state.fontPreviewCount.map((item) => {
            return <FontPreview
                      masterText={this.state.masterText}
                      key={item}
                      id={item}
                      removable={true}
                      removePreview={this.removePreview}
                      purchase={this.purchase}
                      handleBoatColor={this.handleMasterText}
                      boatColor={this.state.boatColor}
                    />
          })
        }

        {
          this.state.masterText.length > 0 && <button onClick={this.addPreview}>Add Preview</button>
        }
      </div>
    );
  }
}

export default App;
