import React, { Component } from 'react';

import flats from '../data/flat';
import FlatList from './flat_list';
import SimpleMap from './map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flatsList: flats,
      flatLocalisation: {
        lat: 45.737930,
        lng: 4.850910
      }
    };
  }

  switchFlatLoc = (loc) => {
    this.setState({ flatLocalisation: loc });
  }

  render() {
    return (
      <div>
        <FlatList switchFlatLoc={this.switchFlatLoc} list={this.state.flatsList} />
        <SimpleMap loc={this.state.flatLocalisation} />
      </div>
    );
  }
}

export default App;
