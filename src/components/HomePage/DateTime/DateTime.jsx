/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
import './dateTime.css';
import { DatePickerComponent, TimePickerComponent } from '@syncfusion/ej2-react-calendars';

class DateTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: '',
      startTime: '',
      endTime: '',
    };
  }

  handleDateChange = (event) => {
    this.setState({ day: event.target.value });
    // eslint-disable-next-line no-console
    console.log(this.state.day);
  };

  handleStartTimeChange = (event) => {
    this.setState({ startTime: event.target.value });
    // eslint-disable-next-line no-console
    console.log(this.state.startTime);
  };

  handleEndTimeChange = (event) => {
    this.setState({ endTime: event.target.value });
    // eslint-disable-next-line no-console
    console.log(this.state.endTime);
  };

  render() {
    return (
      <div class="date-time-pic">
        <DatePickerComponent
          id="datetimepicker"
          placeholder="Select a date and time"
          onChange={(e) => this.handleDateChange(e)}
        />
        <TimePickerComponent
          id="datetimepicker"
          placeholder="Select a start time"
          format="HH:mm"
          step={60}
          onChange={(e) => this.handleStartTimeChange(e)}
        />
        <TimePickerComponent
          id="datetimepicker"
          placeholder="Select end time"
          format="HH:mm"
          step={60}
          onChange={(e) => this.handleEndTimeChange(e)}
        />
      </div>
    );
  }
}

export default DateTime;
