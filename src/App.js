import React from 'react';

class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    console.log('add');
  };

  sub = () => {
    console.log('sub');
  };

  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button>Add</button>
        <button>Sub</button>
      </div>
    )
  }
}

export default App;