/* eslint-disable no-alert */
/* eslint-disable use-isnan */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React from 'react';
import './dateTime.css';
import axios from 'axios';
import { DatePickerComponent, TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import Button from '../../Button/Button.jsx';
import paymentHandlers from './paymenthandlers';
// import { disabled } from 'express/lib/application';

class DateTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      day: '',
      startTime: '',
      endTime: '',
      amountToPay: 'Amount to pay: 0 rupee',
      isBookSpaceDisable: false,
    };
  }

  getPrice = () => {
    if (this.state.startTime !== '' && this.state.endTime !== '') {
      const exactStartTime = new Date(this.state.startTime).getHours();
      // console.log('exactStartTime', exactStartTime);
      const exactEndTime = new Date(this.state.endTime).getHours();
      // console.log('exactStartTime', exactStartTime);
      // if(amountToPayValue !== NaN)

      const totalHours = exactEndTime - exactStartTime;
      const amountToPayValue = totalHours * this.props.price;
      const amountToPayValueStr = `Amount to pay: ${amountToPayValue} rupees`;
      this.setState({ amountToPay: amountToPayValueStr });
    }
  };

  initiatePayment = (paymentHandlers, onOrderCreateFailure) => {
    // console.log('this.state.startTime', this.state.startTime);
    if (!this.props.isLoggedIn) {
      alert('Please login to book space or Add review');
    } else {
      const { day, startTime, endTime } = this.state;
      if (day.length !== 0 && startTime.length !== 0 && endTime.length !== 0) {
        this.setState({ isBookSpaceDisable: true });
      } else {
        alert('Please select day, start time, end time to book space');
      }
    }

    axios
      .post('/api/order', {
        activityId: this.props.activityId,
        email: this.props.email,
        userName: this.props.userName,
        price: this.props.price,
        dateStr: this.state.day,
        startTimeStr: this.state.startTime,
        endTimeStr: this.state.endTime,
      })
      .then(
        (res) => {
          console.log('res.data.amount', res.data.amount);
          console.log('res amount type', typeof res.amount);
          const options = {
            key: process.env.REACT_APP_RZP_KEY_ID,
            amount: res.data.amount,
            currency: res.data.currency,
            order_id: res.data.rzpOrderId,
            theme: {
              color: '#e82953',
            },
            modal: {
              ondismiss: paymentHandlers.onDismiss || (() => {}),
              escape: false,
            },
            handler: (response) => {
              paymentHandlers.onSuccess &&
                paymentHandlers.onSuccess({
                  ...response,
                  id: res.orderId,
                  amount: res.amount,
                  currency: res.currency,
                });
            },
          };
          console.log('before rzp window open');
          const rzp1 = new window.Razorpay(options);
          rzp1.open();
        },
        (err) => {
          onOrderCreateFailure && onOrderCreateFailure(err);
        },
      );
  };

  handleDateChange = (event) => {
    this.setState({ day: event.target.value });
  };

  handleStartTimeChange = (event) => {
    this.setState({ startTime: event.target.value });
    this.getPrice();
  };

  handleEndTimeChange = (event) => {
    this.setState({ endTime: event.target.value });
    this.getPrice();
  };

  render() {
    return (
      <div class="date-time-pic">
        <div class="date-time-class">
          <DatePickerComponent
            id="datetimepicker"
            placeholder="Select a booking date "
            onChange={(e) => this.handleDateChange(e)}
          />
        </div>
        <div class="date-time-class">
          <TimePickerComponent
            id="datetimepicker"
            placeholder="Select booking start time "
            format="HH:mm"
            step={60}
            onChange={(e) => this.handleStartTimeChange(e)}
          />
        </div>
        <div class="date-time-class">
          <TimePickerComponent
            id="datetimepicker"
            placeholder="Select booking end time"
            format="HH:mm"
            step={60}
            onChange={(e) => this.handleEndTimeChange(e)}
            onkeyup={(e) => this.handleEnableDisableBtn(e)}
          />
        </div>
        <div class="date-time-class">
          <input
            type="text"
            id="amount-to-pay"
            name="fname"
            placeholder="Total amount to pay"
            value={this.state.amountToPay}
          ></input>
        </div>

        <button
          className="space-modify-btn"
          onClick={(paymentHandlers) => {
            this.initiatePayment(paymentHandlers, () => {});
          }}
          disabled={false}
        >
          Book Space
        </button>
      </div>
    );
  }
}

export default DateTime;
