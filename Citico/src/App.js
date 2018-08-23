import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
// import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Box from './components/Box/Box'

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          {/* <BurgerBuilder /> */}        <Box/>

        </Layout>
      </div>
    );
  }
}

export default App;
