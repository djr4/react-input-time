import React, { Component } from 'react';
import styles from './styles.module.css';

export class InputTime extends Component {
  constructor(props) {
    super(props);

    this.state = {}
    if(this.props.value) {
      if(this.props.value.length > 0 && this.props.value.split(':').length > 1) {
        this.state = {
          hours: this.props.value.split(':')[0],
          minutes: this.props.value.split(':')[1],
        }
      }
    }
    this.inputHours = React.createRef();
    this.inputMinutes = React.createRef();
  }

  toDouble(hours, minutes) {
    return parseInt(hours ? hours : 0) + (minutes ? parseInt(minutes) / 60.0 : 0.0);
  }

  toString(hours, minutes) {
    const h = parseInt(hours) < 10 ? `0${parseInt(hours)}` : parseInt(hours);
    const m = parseInt(minutes) < 10 ? `0${parseInt(minutes)}` : parseInt(minutes);

    return `${h}:${m}`;
  }

  handleKeyDown(e) {
    if(e.keyCode === 8 && e.target.value === '') {
      setTimeout(() => { this.inputHours.current.focus(); })
    }
  }

  handleHoursChange(e) {
    if(e.target.value.length > 1 && e.target.value < 24) {
      this.inputMinutes.current.focus();

      this.setState({
        hours: e.target.value,
      })

      if(this.props.onChange && typeof this.props.onChange === 'function') {
        this.props.onChange({
          timeDouble: this.toDouble(e.target.value, this.state.minutes),
          timeString: this.toString(e.target.value, this.state.minutes),
        })
      }
    } else if(e.target.value.length == 1 && e.target.value < 3) {
      this.setState({
        hours: e.target.value,
      })

      if(this.props.onChange && typeof this.props.onChange === 'function') {
        this.props.onChange({
          timeDouble: this.toDouble(e.target.value, this.state.minutes),
          timeString: this.toString(e.target.value, this.state.minutes),
        })
      }
    } else {
      this.setState({
        hours: 0,
      })
    }
  }

  handleMinutesChange(e) {
    if(e.target.value.length == 1 && e.target.value < 6) {
      this.setState({
        minutes: e.target.value,
      })

      if(this.props.onChange && typeof this.props.onChange === 'function') {
        this.props.onChange({
          timeDouble: this.toDouble(this.state.hours, e.target.value),
          timeString: this.toString(this.state.hours, e.target.value),
        })
      }
    } else if(e.target.value.length == 2 && e.target.value < 60) {
      this.setState({
        minutes: e.target.value,
      })

      if(this.props.onChange && typeof this.props.onChange === 'function') {
        this.props.onChange({
          timeDouble: this.toDouble(this.state.hours, e.target.value),
          timeString: this.toString(this.state.hours, e.target.value),
        })
      }
    } else {
      this.setState({
        minutes: 0,
      })
    }
  }

  handleBlur(e, minutesBlured) {
    if(e.target.value.length == 1) {

      if(minutesBlured) {
        this.setState({
          minutes: `0${this.state.minutes}`
        })
      } else {
        this.setState({
          hours: `0${this.state.hours}`
        })
      }
    }
  }

  handleFocus(e) {
    e.persist();
    setTimeout(() => { e.target.select(); });
  }

  render() {
    return(
      <div className={styles.InputTime}>
        {
          this.props.label ? <div className={styles['inputTime--label']}>{this.props.label}</div> : ''
        }
        <div
          className={styles['InputTime--wrapper']}
          style={this.props.componentStyle ? this.props.componentStyle : null}
        >
          <input
            style={this.props.inputStyle ? this.props.inputStyle : null}
            onBlur={(e) => this.handleBlur(e)}
            onFocus={(e) => this.handleFocus(e)}
            ref={this.inputHours}
            onChange={(e) => this.handleHoursChange(e)}
            maxLength={2}
            type="text"
            value={this.state.hours || ''} />
          <span className={styles['inputTime--separator']}>:</span>
          <input
            style={this.props.inputStyle ? this.props.inputStyle : null}
            onBlur={(e) => this.handleBlur(e, true)}
            onFocus={(e) => this.handleFocus(e)}
            ref={this.inputMinutes}
            onChange={(e) => this.handleMinutesChange(e)}
            maxLength={2}
            type="text"
            value={this.state.minutes || ''}
            onKeyDown={(e) => this.handleKeyDown(e)} />
        </div>
      </div>
    );
  }
}
