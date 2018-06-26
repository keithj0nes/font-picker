import React from 'react';

class FontPreview extends React.Component {

  state = {
    color: 'black',
    font: 'Helvetica',
    listOfFonts: ['Helvetica', 'Anton', 'IM Fell English SC', 'Inconsolata', 'Shrikhand', 'Spirax', 'Times New Roman']
  }

  handleSelectChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){

    return (
      <div style={styles.div}>
        <p style={{...styles.p, ...{color: `${this.state.color}`}, ...{fontFamily: `${this.state.font}`}}}>
          {this.props.masterText}
        </p>

        <div style={{display: 'flex'}}>

          <select onChange={this.handleSelectChange} name="font">
            {this.state.listOfFonts.map((fontName, ind) => {
              return <option key={ind} value={fontName}>{fontName}</option>
            })}
          </select>
          <select onChange={this.handleSelectChange} name="color">
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
          </select>

          {this.props.removable && <button onClick={()=>{this.props.removePreview(this.props.ind)}}>Remove</button>}

        </div>


      </div>
    )
  }
}

const styles = {
  div: {
    width: "300px",
    margin: "0 auto",
    border: "1px solid black",
  },
  p: {
    minHeight: "20px",
    padding: "20px",
    fontSize: "20px"
  }
}

export default FontPreview;
