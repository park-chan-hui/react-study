import React from "react";

export default class ClassClock extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      date: new Date()
    };
  };
  
  componentDidMount(){
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  };

  componentWillUnmount(){
    clearInterval(this.timerId);
  }

  tick = () =>{
    this.setState({
      date: new Date()
    });
  };
    

  /**
   * color => color
   * font-size => fontSize
   * 
   */
  render() {
    const { color } = this.props;
    const { date } = this.state;
    return (
      <h3 style={{ color }}>
        Class: { date.toLocaleTimeString() }</h3>
    )
  };
}