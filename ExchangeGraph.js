import React from 'react';
import {Bar} from 'react-chartjs-2';

const initialState = {
  labels: ['loading', 'loading', 'loading', 'loading', 'loading', 'loading', 'loading', 'loading', 'loading'],
  datasets: [
    {
      label: 'loading',
      backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    hoverBorderColor: 'rgba(255,99,132,1)',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  ]
};



const Graph = React.createClass({
  
	componentWillMount(){
		this.setState(initialState);
	},

	componentDidMount(){
    var newState = {...this.state};
      fetch(this.props.url)
      .then(res => res.json())
      .then(res => {
        newState.labels = res[0];
        newState.datasets[0].data = res[1];
        newState.datasets[0].label = "YOUR PROFIT IN USD";
        this.setState({
          ...newState
        })
      })
      setInterval(()=> {
        newState.datasets[0].data = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        this.setState({
          ...newState
        })
      }, 10000)
		setInterval(() => {
      fetch(this.props.url)
      .then(res => res.json())
      .then(res => {
        newState.labels = res[0];
        newState.datasets[0].data = res[1];
        newState.datasets[0].label = "YOUR PROFIT IN USD";
        this.setState({
          ...newState
        })
      })
		}, 10000);
	},
	render() {
		return (
			<Bar data={this.state} />
		);
	}
});


export default Graph;

