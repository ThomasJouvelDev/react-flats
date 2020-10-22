import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedFlatName: null };
  }

  switchSelectionFlat = (name, latf, lngf) => {
    this.setState({ selectedFlatName: name });
    this.props.switchFlatLoc({ lat:latf, lng:lngf });
  }

  render() {
    return (
      <div className="flat-list">
        {this.props.list.map((flat) => {
          return (
            <Flat
              key={flat.name}
              name={flat.name}
              imageUrl={flat.imageUrl}
              price={flat.price}
              priceCurrency={flat.priceCurrency}
              lat={flat.lat}
              lng={flat.lng}
              selectedFlat={this.switchSelectionFlat}
              selectedFlatName={this.state.selectedFlatName}
            />
          );
        })}
      </div>
    );
  }
}

export default FlatList;
