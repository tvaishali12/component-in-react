import { Component } from "react";

class Optimizedform extends Component {
  state = {
    Name: "",
    Password: "",
  };
  Handleinput = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, password } = this.state;
    return (
      <>
        <div>
          <label>Name : </label>
          <input
            name="name"
            type="text"
            // value={this.state.value}
            onChange={this.Handleinput}
          />
        </div>
        <br></br>
        <div>
          <label>Password : </label>
          <input
            name="password"
            type="password"
            // value={this.state.value}
            onChange={this.Handleinput}
          />
        </div>

        <p> Name :{name}</p>
        <p> Password :{password}</p>
      </>
    );
  }
}
export default Optimizedform;
