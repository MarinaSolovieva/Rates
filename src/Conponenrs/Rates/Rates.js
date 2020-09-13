import React, {Component} from "react";
import Chart from "react-apexcharts";
import DropdownMenu from "../Dropdown/Dropdown";
import "./Rates.css"

class Rates extends Component {

    state = {
        options: {
            chart: {id: "basic-bar"},
            xaxis: {
                categories: []
            }
        },
        series: [
            {
                name: "series-1",
                data: []
            }
        ]
    };



    componentDidMount() {
        function createDate(date) {
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            return `${year}-${month}-${day}`;
        }

        const endDate = new Date();
        const startDate = new Date();
        startDate.setDate(endDate.getDate() - 6);
        this.props.fetchRates(145, createDate(startDate), createDate(endDate))

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.rates !== prevProps.rates) {
            const newSeries = [];

            this.state.series.forEach(s => {
                const data = this.props.rates.map(rate => {
                    return rate.Cur_OfficialRate
                });
                newSeries.push({data, name: s.name})
            })

            const data1 = this.props.rates.map(rate => {
                return rate.Date

            });

            // const result = Object.entries(this.state.options)
            //
            // const data1 = this.props.rates.map(rate => {
            //     return rate.Date
            // });
            //
            // result[1] = []
            //
            // console.log(result)


            this.setState((prevState) => {
                return {
                    series: newSeries,


                }
            })
        }
    }


    render() {
        console.log(this.props)
        console.log(this.state)

        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="line"
                            width="500"
                        />
                    </div>
                </div>
                <DropdownMenu
                    fetchRates={this.props.fetchRates}
                />
            </div>
        );
    }
}

export default Rates;


// let Rates = ({rates}) => {
//     console.log(rates)
//
//
//     // rates.forEach(rate => graph.series[0].data.push(rate.Cur_OfficialRate));
//     // rates.forEach(rate => graph.options.xaxis.categories.push(rate.Date));
//     console.log(graph)
//     return (
//         <div className="app">
//             <div className="row">
//                 <div className="mixed-chart">
//                     <Chart
//                         options={graph.options}
//                         series={graph.series}
//                         type="bar"
//                         width="500"
//                     />
//                 </div>
//             </div>
//         </div>
//
//     );
// };
//
//
// export default Rates;
