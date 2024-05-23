import React from "react";

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Coding Ninjas",
      curIndex: 0,
      currentName: ""
    };
  }

  // This function adds a character to the string.
  typeWriterEffect = () => {
    this.setState((prevState) => {
      return {
        curIndex: prevState.curIndex + 1,
        currentName: prevState.fullName.substring(0, prevState.curIndex)
      };
    });
  };

  // Required lifecycle methods here
  componentDidMount(){
    this.interval = setInterval(()=>{
      if(this.props.showName){
        this.typeWriterEffect();
      }
    },500);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  componentDidUpdate(prevProps){
    if(prevProps.showName !== this.props.showName){
      if(this.props.showName){
        this.setState({curIndex: 0, currentName: ""});
      }
    }
  }

  render() {
    return <h1>{this.state.currentName}</h1>;
  }
}
