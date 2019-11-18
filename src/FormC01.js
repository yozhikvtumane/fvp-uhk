import * as React from "react";

export default class FormC01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //alert("A name was submitted: " + this.state.value);
    this.setState({printedValue: this.state.value})

    // this.printedValue = <h2>{this.state.value}</h2>
    event.preventDefault();
  }

  render() {
    return (
      <>
        <h2>Controlled form {this.state.value}</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h2>{this.state.printedValue}</h2>
        {/* {this.printedValue} */}
      </>
    );
  }
}
