import React from 'react';

class FontPreview extends React.Component {

  state = {
    color: 'black'
  }

  handleColorChange = (e) => {
    this.setState({color: e.target.value})
  }
  render(){
    return (
      <div style={styles.div}>
        <p style={{...styles.p, ...{color: `${this.state.color}`}}}>
          {this.props.masterText}
        </p>
        <select onChange={this.handleColorChange}>
          <option value="black">Black</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
        </select>
      </div>
    )
  }
}

const styles = {
  // alignSelf: "center",
  div: {
    width: "200px",
    margin: "0 auto",
    border: "1px solid black",
    // minHeight: "20px"
  },
  p: {
    // fontFamily: "serif"
    minHeight: "20px",
    padding: "20px"
    // color: `${this.state.color}`
  }
}

export default FontPreview;
