import React from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onExchangeBuyChange = this.onExchangeBuyChange.bind(this);
    this.onExchangeSellChange = this.onExchangeSellChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      exchangeBuy: "",
      userInput: "",
      exchangeSell: "",
      outputProfit: "",
      outputAmountOfBitcoins: ""
    };
  }


  onInputChange(event) {
    this.setState({
    userInput: event.target.value
    });
  }

  onExchangeBuyChange(event) {
    this.setState({
      exchangeBuy: event.target.value
    });
  }

  onExchangeSellChange(event) {
    this.setState({
      exchangeSell: event.target.value
    });
  }

  handleClick (event) {
    fetch("https://bitarbitrage.herokuapp.com/allasks_allbids_allfees")
    .then (res => res.json())
    .then (res => {
      let outputAmountOfBitcoins = this.state.userInput / res[0][this.state.exchangeBuy];
      let outputProfit = this.state.userInput - outputAmountOfBitcoins * res[1][this.state.exchangeSell];
     this.setState({
      outputProfit: outputProfit.toFixed(2),
      outputAmountOfBitcoins: outputAmountOfBitcoins.toFixed(2)
     });
    });
  }

  render() {
    return (
      <div className="calculator">
        <div className="column_of_selects">
          <div className="select1">
            <p>Select exhcange to buy Bitcoins</p>
            <select className="exchangeBuy" onChange={this.onExchangeBuyChange}>
              <option>choose exhcange</option>
              <option>binance</option>
              <option>okex</option>
              <option>hitbtc</option>
              <option>poloniex</option>
              <option>bitmex</option>
              <option>bitfinex</option>
              <option>gdax</option>
              <option>kraken</option>
              <option>bitflyer</option>
              <option>bitstamp</option>
            </select>
          </div>
          <div className="select2">
            <p>Select exhcange to sell Bitcoins</p>
            <select className="exchangeSell" onChange={this.onExchangeSellChange}>
              <option>choose exhcange</option>
              <option>binance</option>
              <option>okex</option>
              <option>hitbtc</option>
              <option>poloniex</option>
              <option>bitmex</option>
              <option>bitfinex</option>
              <option>gdax</option>
              <option>kraken</option>
              <option>bitflyer</option>
              <option>bitstamp</option>
            </select>
          </div>
        </div>
          <div className="row">
            <img className="image2" src="https://i.imgur.com/Nur0yYU.png"/>
          </div>
          <div className="column_of_btc">
            <input placeholder="amount of money you would like to change" className="amountOfMoney" onChange={this.onInputChange} />
            <button className="amountOfMoney" onClick={this.handleClick}>calculate possible profit</button>
            <p>amount of bitcoins you can buy BTC</p>
            <input value={this.state.outputAmountOfBitcoins} />
            <p>your profit USD</p>
            <input value={this.state.outputProfit} />
        </div>
      </div>
    );
  }
};



