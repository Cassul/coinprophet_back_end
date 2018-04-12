import React from 'react';
import ExchangesInfo from './ExchangesInfo';
import RandomizedDataLineExample from './ExchangeGraph';
import ExchangesCalculator from './ExchangesCalculator';
import BestBuy from './BestBuy';



export default class App extends React.Component {
	render() {
		return (
			<div className="flex">
        <div className="new_row">
          <div className="heading">
            <h1 className="header"><b>COINPROPHET</b></h1>
            <h2 className="h2">Calculate how much you can earn on a bitcoin arbitrage! Makers and takers fee included!</h2>
          </div>
          <div className="image1">
            <img src="https://i.imgur.com/GYXriNw.png" />
          </div>
        </div>
        <h2 className="description1"><b>Best BUY-LOW/SELL-HIGH pair right now</b></h2>
        <BestBuy />
        <h2 className="description1"><b>Compare the arbitrage opportunities for each exchange</b></h2>
          <div className="row">
            <div className="column">
              <ExchangesInfo url="https://bitarbitrage.herokuapp.com/" id="0" />
              <RandomizedDataLineExample name="binance" url="https://bitarbitrage.herokuapp.com/binance" />
              <a href="https://www.binance.com/">Trade now on BINANCE</a>
            </div>
            <div className="column">
              <ExchangesInfo url="https://bitarbitrage.herokuapp.com/" id="5" />   
              <RandomizedDataLineExample name="bitfinex" url="https://bitarbitrage.herokuapp.com/bitfinex" />
              <a href="https://www.bitfinex.com/">Trade now on BITFINEX</a>
            </div>
            <div className="column">
              <ExchangesInfo url="https://bitarbitrage.herokuapp.com/" id="1" />
              <RandomizedDataLineExample name="okex" url="https://bitarbitrage.herokuapp.com/okex" />
              <a href="https://www.okex.com/">Trade now on OKEX</a>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <ExchangesInfo url="https://bitarbitrage.herokuapp.com/" id="2" />
              <RandomizedDataLineExample name="hitbtc" url="https://bitarbitrage.herokuapp.com/hitbtc" />
              <a href="https://hitbtc.com/">Trade now on HITBTC</a>
            </div>
            <div className="column">
              <ExchangesInfo url="https://bitarbitrage.herokuapp.com/" id="3" />
              <RandomizedDataLineExample name="poloniex" url="https://bitarbitrage.herokuapp.com/poloniex" />
              <a href="https://poloniex.com/">Trade now on POLONIEX</a>
            </div>
            <div className="column">
              <ExchangesInfo url="https://bitarbitrage.herokuapp.com/" id="4" />
              <RandomizedDataLineExample name="bitmex" url="https://bitarbitrage.herokuapp.com/bitmex" />
              <a href="https://www.bitmex.com/">Trade now on BITMEX</a>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <ExchangesInfo url="https://bitarbitrage.herokuapp.com/" id="6" />
              <RandomizedDataLineExample name="gdax" url="https://bitarbitrage.herokuapp.com/gdax" />
              <a href="https://www.gdax.com/">Trade now on GDAX</a>
            </div>
            <div className="column">
              <ExchangesInfo url="https://bitarbitrage.herokuapp.com/" id="7" />
              <RandomizedDataLineExample name="kraken" url="https://bitarbitrage.herokuapp.com/kraken" />
              <a href="https://www.kraken.com/">Trade now on KRAKEN</a>
            </div>
            <div className="column">
              <ExchangesInfo url="https://bitarbitrage.herokuapp.com/" id="8" />
              <RandomizedDataLineExample name="bitflyer" url="https://bitarbitrage.herokuapp.com/bitflyer" />
              <a href="https://bitflyer.jp/">Trade now on BITFLYER</a>
            </div>
            </div>
            <div className="row">
              <ExchangesCalculator />
              <div className="column">
                <ExchangesInfo url="https://bitarbitrage.herokuapp.com/" id="9" />
                <RandomizedDataLineExample name="bitstamp" url="https://bitarbitrage.herokuapp.com/bitstamp" />
                <a href="https://www.bitstamp.net/">Trade now on BITSTAMP</a>
              </div>
            </div>
		  </div>
	);
}
}
