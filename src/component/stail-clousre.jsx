import { Component } from "react";

class Handle extends Component {
  state = {
    counter: 0,
  };
  Handleclick = () => {
    //------------increasing by 1 (stailclousre)-----------------------------
    this.setState({
      counter: this.state.counter + 1,
    });
    this.setState({
      counter: this.state.counter + 1,
    });
    this.setState({
      counter: this.state.counter + 1,
    });
    //---------------------------increasing by 3 (batchupdate)--------------
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
  };
  render() {
    const { counter } = this.state;
    return (
      <>
        <div>
          <button onClick={this.Handleclick}>Increment</button>
        </div>
        <p>{counter}</p>
      </>
    );
  }
}
export default Handle;
