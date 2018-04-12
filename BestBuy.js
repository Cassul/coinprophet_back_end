import React from 'react';

export default class BestBuy extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      invest: "1000",
      bestBuy: "",
      bestSell: "",
      profit: "",
      userProfit: "",
      buy: "",
      sell: ""
    };
  }
  componentDidMount(){
    fetch("https://bitarbitrage.herokuapp.com/allasks_allbids_allfees")
    .then(res => res.json())
    .then(res => {
      const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
      var bestBuy = "$" + numberWithCommas(res[3].toFixed(2)) + " on " + res[2];
      var bestSell = "$" + numberWithCommas(res[5].toFixed(2)) + " on " + res[4];
      this.setState({
        invest: "1000",
        bestBuy: bestBuy,
        bestSell: bestSell,
        profit: "$" + res[6].toFixed(2),
        buy: res[3],
        sell: res[5]
      });
    });
  }

  onClick(event) {
    var userProfit = Number(this.state.invest) / Number(this.state.buy) * Number(this.state.sell) - Number(this.state.invest);
    this.setState({
      userProfit: "$" + userProfit.toFixed(2)
    });
  }

  onChange(event){
    this.setState({
      invest: event.target.value
    });
  }

   render() {
    return (
      <div className="bestBuy">
        <div className="columnBB">
          <h1 className="bestBuyInput"><span>BUY LOW</span><b>  {this.state.bestBuy}</b></h1>
          <h1 className="bestBuyInput"><span>SELL HIGH</span><b>  {this.state.bestSell}</b></h1>
          <h1 className="bestBuyInput"><span className="profit">PROFIT</span><b> {this.state.profit}</b></h1>
        </div>
        <div className="columnBB">
          <div className="rowBB">
            <h1 className="inv"><b>INVEST IN THIS MARKET :</b></h1>
            <div className="invest">
              <input onChange={this.onChange} value={this.state.invest}/>
              <button onClick={this.onClick}>GO!</button>
            </div>
          </div>
          <div className="columnBB">
            <h1 className="profit"><b>YOUR PROFIT: </b></h1>
            <h1 className="profit"><b>{this.state.userProfit}</b></h1>
          </div>
        </div>
      </div>
    )}

}