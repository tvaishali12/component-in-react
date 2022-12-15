import { Component } from "react";

class Forminput extends Component {
  state = {
    Name: "",
    Password: "",
  };
  render() {
    return (
      <>
        <div>
          <label>Name : </label>
          <input
            type="text"
            // value={this.state.value}
            onChange={(e) => {
              this.setState({ Name: e.target.value });
            }}
          />
        </div>
        <br></br>
        <div>
          <label>Password : </label>
          <input
            type="password"
            value={this.state.value}
            onChange={(e) => {
              this.setState({ Password: e.target.value });
            }}
          />
        </div>

        <p>Name : {this.state.Name}</p>
        <p>Password : {this.state.Password}</p>
      </>
    );
  }
}
export default Forminput;
