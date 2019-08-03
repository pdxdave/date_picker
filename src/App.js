import React, {Component} from 'react';
import DatePicker from 'react-date-picker';
import './App.css';

class App extends Component {

  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })

  render() {
  return (
    <div className="App">
      
      <div>
        <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
      
    </div>
  );
}
}

export default App;
