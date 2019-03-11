import React, { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      showName:"",
      birthMonth: "",
      showbirthMonth: "",
      about: "",
      showabout: ""
    };
  }
  handleChange= (e) => {
    this.setState({
      [e.target.id]: e.target.value})}
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(prevState => ({ showname: prevState.name,
                                showbirthMonth: prevState.birthMonth,
                               showabout: prevState.about }));
  };
  render() {
    return (
      <div className='center'>
        <h4 className='container center'>Person Information</h4>
        <p> This is Person Information page.</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name' > Name </label>
          <input type='text' id='name' onChange={this.handleChange} /> <br />
          <label htmlFor='birthMonth'> Birth Month </label>
          <input type='text' id='birthMonth' onChange={this.handleChange}/> <br />
          <label htmlFor='about'> About </label>
          <input type='text' id='about' onChange={this.handleChange} /> <br />
          <button> Submit </button>
        </form>
        <p>Name: {this.state.showname}</p>
        <p>BirthMonth: {this.state.showbirthMonth}</p>
        <p>About: {this.state.showabout}</p>
      </div>
    );
  }  
}
export default Personal;
