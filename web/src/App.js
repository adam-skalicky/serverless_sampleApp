   // src/App.js

   import React, {Component} from 'react';
   import Version from './components/version';
   import Endpoints from './endpoints.json'

   class App extends Component {
    state = {
      version: {}
    }
    componentDidMount() {
      fetch(Endpoints.version.GET)
      .then(res => res.json())
      .then((data) => {
        this.setState({ version: data })
      })
      .catch(console.log)
    }
     render () {
       return (
        <React.Fragment>
          <Version version={this.state.version} />
        </React.Fragment>
       );
     }
   }

   export default App;