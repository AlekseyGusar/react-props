import React from 'react';
import './App.css';
import First from './First';
const list = [
  'Animals',
  'Anime',
  'Anti-Malware',
  'Art Design',
  'Books',
  'Business',
  'Calendar',
  'Cloud Storage',
  'File Sharing',
  'Animals',
  'Continuous Integration',
  'Cryptocurrency'
];
const listLowerCased = list.map((item) => item.toLowerCase());
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {list: listLowerCased };
  }
  
  
  render() {
    
    return (
      <div>
        Some data:
        <ul className="no-bullets">
          <First list={this.state.list}></First>
        </ul>
      </div>
    );
  }
}
export default App;
