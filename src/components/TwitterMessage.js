import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
      // remainingChars: this.props.maxChars
    };
  }

  changeHandler = (event) => {
    let messageLength = event.target.value.length 
    // console.log(messageLength)
    let newRemainingChar = this.props.maxChars - messageLength
    this.setState({
      message: event.target.value,
      remainingChar: newRemainingChar
    })

  }

  componentDidMount = () => {
    this.setState({
      maxChars: this.props.maxChars,
      remainingChar: this.props.maxChars
      
    })
  }

  render() {
    // console.log(this.props.maxChars)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.changeHandler(event)} name="message" id="message" />
        <h3>Remaining Characters {this.state.remainingChar}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
