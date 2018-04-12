import React from 'react';
import _ from 'lodash';

// const initialState = {
//   nameOfExchange: "Loading",
//   volumeOfExchange: "Loading",
//   lastPriceOfExchange: "Loading"
// }

const ExchangesInfo = React.createClass({

  getInitialState() {
    return {
      nameOfExchange: "Loading",
      volumeOfExchange: "Loading",
      lastPriceOfExchange: "Loading"
    }
  },

  // componentWillMount(){
  //   this.setState(initialState);
  // },

  componentDidMount(){
    var newState = {};
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    setInterval(() => {
      var newState = {};
      fetch(this.props.url)
      .then(res => res.json())
      .then(res => {
        var volume = numberWithCommas(Number(res.volume[this.props.id]).toFixed(2));
        var price = numberWithCommas(Number(res.lastPrice[this.props.id]).toFixed(2));
        newState.nameOfExchange = res.names[this.props.id];
        newState.volumeOfExchange = volume;
        newState.lastPriceOfExchange = price;
        this.setState(newState)
      })
    }, 10000);
  },

  render() {
    return (
      <div>
        <h2>Name of exchange:</h2>
        <h1 className="nameOfExchange">{this.state.nameOfExchange}</h1>
        <h2>Last Price (BTC/USD): {this.state.lastPriceOfExchange}</h2>
        <h3>Volume: {this.state.volumeOfExchange}</h3>
      </div>
    );
  }
});


export default ExchangesInfo;

