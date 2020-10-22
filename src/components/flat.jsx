import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Flat extends Component {
  handleFlatClick = () => {
    this.props.selectedFlat(this.props.name, this.props.lat, this.props.lng);
  }

  render() {
    return (
      <div
        onClick={this.handleFlatClick}
        className={`card ${this.props.selectedFlatName == this.props.name ? "selected" : ""}`}
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.imageUrl})` }}
      >
        <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" />
      </div>
    );
  }
}

export default Flat;
