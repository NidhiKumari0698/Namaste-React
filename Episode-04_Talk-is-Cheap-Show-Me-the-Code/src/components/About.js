import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("constructor (About Class)");
    this.state = {
      count1: 0,
      count2: 1,
    };
  }
  componentDidMount() {
    console.log("componentDidMount (About Class)");
  }
  render() {
    console.log("render (About Class)");
    const { count1, count2 } = this.state;
    function increment() {
      //console.log("Increment Count.", this);
      this.setState({
        count1: this.state.count1 + 1,
      });
      this.setState({
        count2: this.state.count2 + 1,
      });
    }
    return (
      <>
        <h1>About Us Page!!</h1>
        {/* <h2>count1: {count1}</h2>
        <button onClick={increment.bind(this)}>+</button> */}
        <UserClass
          name={"First "}
          location="Patna (Class)"
          aboutCount={count1}
        />
        <UserClass
          name={"Second "}
          location="Patna (Class)"
          aboutCount={count1}
        />
      </>
    );
  }
}

// const About = () => {
//   return (
//     <>
//       <h1>About Us Page!!</h1>
//       <User name={"Nidhi Kumari (Function)"} />
//       <UserClass name={"Nidhi Kumari (Class)"} location="Patna (Class)" />
//     </>
//   );
// };

export default About;
