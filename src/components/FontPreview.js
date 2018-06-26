import React from 'react';

class FontPreview extends React.Component {

  render(){
    return (
      <div style={styles}>
        <p>{this.props.masterText}</p>
      </div>
    )
  }
}

const styles = {
  // alignSelf: "center",
  width: "200px",
  margin: "0 auto",
  border: "1px solid black",
  minHeight: "20px"
}

export default FontPreview;
