import React from "react";

function createContext(defaultValue) {
  class Provider extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: props.value !== undefined ? props.value : defaultValue,
      };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.value !== prevState.value) {
        return { value: nextProps.value };
      }
      return null;
    }

    render() {
      return (
        <Context.Provider value={this.state.value}>
          {this.props.children}
        </Context.Provider>
      );
    }
  }

  class Consumer extends React.Component {
    render() {
      return (
        <Context.Consumer>
          {(value) =>
            this.props.children(value !== undefined ? value : defaultValue)
          }
        </Context.Consumer>
      );
    }
  }

  const Context = React.createContext(defaultValue);

  return {
    Provider,
    Consumer,
  };
}

export default createContext;

export let age = 29;

export function setAge(newAge) {
  age = newAge;
}
