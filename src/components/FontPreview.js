import React from 'react';
import "../styles/fontpreview.css";

class FontPreview extends React.Component {

  state = {
    selectedColor: 'black',
    selectedFont: 'Helvetica',
    showShadow: false,
    showShadowColor: 'black',
    showOutline: false,
    fontSizes: '',
    fontWeightBold: false,
    listOfFonts: ['Helvetica', 'Anton', 'IM Fell English SC', 'Inconsolata', 'Shrikhand', 'Spirax', 'Times New Roman']
  }

  handleSelectChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    this.setState({[e.target.name]: value})
  }
  //
  // handleFontSizeChange = () => {
  //   var h = (this.textSize.clientHeight + 1);
  //   var w = (this.textSize.clientWidth + 1);
  //   console.log(this.textSize);
  //   var mytext = document.getElementById('mytext')
  //   console.log(mytext.getBoundingClientRect().width.toFixed(2));
  //   console.log(h, w);
  // }


componentDidMount(){
  this.fitTextOnCanvas(this.props.masterText, this.state.selectedFont, 100)
}

componentDidUpdate(){
  this.fitTextOnCanvas(this.props.masterText, this.state.selectedFont, 100)
}

fitTextOnCanvas = (text,fontface,yPosition) => {
    const canvas=document.getElementById(`canvas-${this.props.id}`);
    const context=canvas.getContext("2d");
    const fontWeight = this.state.fontWeightBold ? 'bold' : 'normal';

    context.clearRect(0, 0, canvas.width, canvas.height);
    // start with a large font size
    let fontsize=200;
    // lower the font size until the text fits the canvas
    do{
        fontsize--;
        // context.font=fontsize+"px "+fontface;
          context.font = ` ${fontWeight} ${fontsize}px ${this.state.selectedFont}`

        context.textBaseline="middle";

    }while(context.measureText(text).width>canvas.width)

    // draw the text
    context.fillText(text, 0 ,yPosition);
}

  render(){

    return (
      <div  className="font-preview-container">
        <div id="haha">

        <canvas id={`canvas-${this.props.id}`} width="700" height="200" style={{border: "1px solid red"}}></canvas>

          <p  style={{
            ...{backgroundColor: `${this.props.boatColor}`},
            ...{color: `${this.state.selectedColor}`},
            ...{fontFamily: `${this.state.selectedFont}`},
            ...{fontWeight: this.state.fontWeightBold ? 'bold' : 'normal'},
            // ...{textShadow: "4px 4px white, 8px 8px blue"}
            ...{textShadow: this.state.showShadow && `3px 3px white, 8px 8px ${this.state.showShadowColor}`}}
          } className="font-preview-text scale--js">
              {this.props.masterText}

          </p>

          <p id="place-name">
            {this.props.masterText}
          </p>
        </div>

        <div className="font-preview-options">

          <select onChange={this.handleSelectChange} name="selectedFont">
            {this.state.listOfFonts.map((fontName, ind) => {
              return <option key={ind} value={fontName}>{fontName}</option>
            })}
          </select>
          <select onChange={this.handleSelectChange} name="selectedColor">
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="green">Green</option>

          </select>


          <div>

            <input type="checkbox" id={`showOutline-${this.props.id}`} onChange={this.handleSelectChange} name="showOutline" checked={this.state.showOutline}/>
            <label htmlFor={`showOutline-${this.props.id}`}> Outline </label>
  <br/>
            {this.state.showOutline &&
              <div>
                <h1>OUTLINE DATA</h1>
              </div>
            }
            <input type="checkbox" id={`showShadow-${this.props.id}`} onChange={this.handleSelectChange} name="showShadow" checked={this.state.showShadow}/>
            <label htmlFor={`showShadow-${this.props.id}`}> Shadow </label>

            {this.state.showShadow &&
              <div>
                <h1>SHADOW DATA</h1>

                <select onChange={this.handleSelectChange} name="showShadowColor">
                  <option value="black">Black</option>
                  <option value="blue">Blue</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>

                </select>

              </div>
            }
          </div>

          <div>

          <button onClick={()=>{this.setState({fontWeightBold: !this.state.fontWeightBold})}}>s</button>


          {this.props.removable && <button onClick={()=>{this.props.removePreview(this.props.id)}}>Remove</button>}
          <button onClick={()=>{this.props.purchase({color: this.state.selectedColor, font: this.state.selectedFont, fontSize: "20px"})}}>Purchase</button>



          </div>

        </div>


      </div>
    )
  }
}

export default FontPreview;
//
// boat color change
// <select onChange={this.props.handleBoatColor} name="boatColor">
//   <option value="black">Black</option>
//   <option value="blue">Blue</option>
//   <option value="red">Red</option>
// </select>
