   // src/App.js

   import React, {Component} from 'react';
   import Version from './components/version';
   import Records from './components/records';

   import Endpoints from './endpoints.json'
   import './App.css';
   class App extends Component {
    state = {
      version: {},
      records: []
    }
    componentDidMount() {
      fetch(Endpoints.version.GET)
      .then(res => res.json())
      .then((data) => {
        this.setState({ version: data })
      })
      .catch(console.log)
      fetch(Endpoints.returnTableContents.GET)
      .then(res => res.json())
      .then((data) => {
        this.setState({ records: data })
      })
      .catch(console.log)
    }
     render () {
       return (
        <React.Fragment>
          <Records records={this.state.records} />
          <Version version={this.state.version} />
        </React.Fragment>
       );
     }
   }

   export default App;