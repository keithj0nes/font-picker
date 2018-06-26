import React from 'react';

class MasterInput extends React.Component {

  render(){
    return (
      <div className="master-input">
        <input type="text" onChange={this.props.handleMasterText} name="masterText" placeholder="Type here"/>
      </div>
    )
  }
}

export default MasterInput;
