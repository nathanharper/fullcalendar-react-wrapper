import 'fullcalendar/dist/fullcalendar.min.css';
import $ from 'jquery';
import 'fullcalendar';
import React from 'react';
import PropTypes from 'prop-types';

class Fullcalendar extends React.Component {
    constructor(props) {
        super(props);
        this.getFullcalendarOptions = this.getFullcalendarOptions.bind(this);
    }

    getFullcalendarOptions() {
        let fullcalendarOptions = Object.assign({}, this.props);
        delete fullcalendarOptions.targetId;
        return fullcalendarOptions;
    }

    componentDidMount() {
        this.$target = $('#' + this.props.targetId);
        this.$target.fullCalendar(this.getFullcalendarOptions());
    }

    componentDidUpdate() {
        this.$target.fullCalendar('option', this.getFullcalendarOptions());
    }

    render() {
        return <div id={this.props.targetId} />;
    }
}

Fullcalendar.propTypes = {
    targetId: PropTypes.string.isRequired,
};

Fullcalendar.defaultProps = {
    targetId: 'Fullcalendar-React-Wrapper',
};

export default Fullcalendar;
