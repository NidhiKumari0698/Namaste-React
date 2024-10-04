import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "constructor (UserClass Class)");
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy",
        email: "Dummy",
        avatar_url: "Dummy",
      },
      count: 0,
    };
    this.intervalId;
  }
  async fetchUserData() {
    // const response = await fetch(`https://api.github.com/users/akshaymarch7`);
    // const responseJson = await response.json();
    // console.log("responseJson------------------>", responseJson);
    const obj = {
      name: "Dummy2",
      location: "Dummy2",
      email: "Dummy2",
      avatar_url: "Dummy2",
    };
    this.setState({
      userInfo: obj,
    });
  }

  componentDidMount() {
    console.log(this.props.name + "componentDidMount (UserClass Class)");
    this.intervalId = setInterval(() => {
      console.log("SETINTERVAL");
    }, 1000);
    console.log("this.intervalId----------->", this.intervalId);

    this.fetchUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      this.props.name + "componentDidUpdate (UserClass Class)",
      prevProps,
      prevState
    );
  }

  componentWillUnmount() {
    console.log("I am eloping!", this.intervalId);
    clearInterval(this.intervalId);
  }

  render() {
    console.log(this.props.name + "render (UserClass Class)", this);
    const { name, location, email, avatar_url } = this.state.userInfo;
    if (name === "Dummy") {
      return <h1>No Data Found!</h1>;
    }

    //console.log("this inside render method:::", this);
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {email}</h4>
      </div>
    );
  }
}

export default UserClass;
