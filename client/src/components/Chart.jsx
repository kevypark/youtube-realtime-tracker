import React from "react";
import { Line } from "react-chartjs-2";

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <Line data={this.props.chartSetup} style={{width: 50, height: 50}}/>
      </div>
    );
  }
}

export default Chart;
