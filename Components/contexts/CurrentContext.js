import React, { createContext, Component } from 'react';

export const CurrentContext = createContext();

class CurrentContextProvider extends Component {
  state = {
    currentPage: 25
  }
  render() {
    return (
      <CurrentContextProvider value={{ ...this.state }}>
        {this.props.children}
      </CurrentContextProvider>
    )
  }
}

export default CurrentContextProvider;