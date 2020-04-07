   import React, {Component} from 'react';
   import Version from './components/version';
   import Records from './components/records';
   import AddName from './components/addName';
   import Purge from './components/purge';
   import QueuePurge from './components/queuePurge';
   import logo from './logo.svg';
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
          <div className="App-logo">
          <img src={logo} className="App-logo" alt="logo" />
          </div>
          <Version version={this.state.version} />
          <AddName />
          <Purge />
          <QueuePurge />
          <Records records={this.state.records} />
          
          
        </React.Fragment>
       );
     }
   }

   export default App;