import React from "react";
import {connect} from "react-redux";
import {fetchRates} from "../../Store/Actions/actions";
import DropdownMenu from "./Dropdown";

class DropdownContainer extends React.Component {

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
        this.props.fetchRatesById(145, createDate(startDate), createDate(endDate))
    }

    render() {
        return (
            <DropdownMenu fetchRates={this.props.fetchRatesById}/>
        )
    }
}






function mapDispatchToProps(dispatch) {
    return {
        fetchRatesById: (curId, startDate, endDate) => dispatch(fetchRates(curId, startDate, endDate))
    }
}


export default connect(null, mapDispatchToProps)(DropdownContainer )