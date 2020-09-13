import React from "react";
import Rates from "./Rates";
import {connect} from "react-redux";
import {fetchRates} from "../../Store/Actions/actions";

class RatesContainer extends React.Component {


    render() {
        return (
            <Rates
                rates={this.props.rates}
                fetchRates={this.props.fetchRatesById}
            />
        )
    }
}



function mapStateToProps(state) {
    return {
        rates: state.common.rates
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchRatesById: (curId, startDate, endDate) => dispatch(fetchRates(curId, startDate, endDate))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RatesContainer)