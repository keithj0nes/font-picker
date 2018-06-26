import React from 'react';

class FontPreview extends React.Component {

  state = {
    color: 'black',
    font: 'Helvetica'
  }

  handleSelectChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    console.log(this.state.font);
    return (
      <div style={styles.div}>
        <p style={{...styles.p, ...{color: `${this.state.color}`}, ...{fontFamily: `${this.state.font}`}}}>
          {this.props.masterText}
        </p>

        <div style={{display: 'flex'}}>

          <select onChange={this.handleSelectChange} name="font">
            <option value="Helvetica">Helvetica</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
          </select>
          <select onChange={this.handleSelectChange} name="color">
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
          </select>
        </div>


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
