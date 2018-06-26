import React from 'react';

class MasterInput extends React.Component {

  render(){
    return (
      <div>
        <input type="text" onChange={this.props.handleMasterText} name="masterText"/>
      </div>
    )
  }
}

export default MasterInput;
