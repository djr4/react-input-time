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

        if(this.props.onInit && typeof this.props.onInit === 'function') {
          this.props.onInit({
            timeDouble: this.toDouble(this.state.hours, this.state.minutes),
            timeString: this.toString(this.state.hours, this.state.minutes),
          })
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

  renderIcon() {
    const prop = this.props.iconLeft ? { left: 0 } : { right: 0 };
    return(
      <span style={{ position: 'absolute', top: 0, ...prop }}>
      <svg width="20px" height="20px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" class="svg-inline--fa fa-clock fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill={this.props.iconColor || '#aeaeae'} d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path></svg>
      </span>
    )
  }

  render() {
    const inputStyle = {
      outline: 'none',
      border: 'none',
      background: 'inherit',
      margin: 0,
      padding: 0,
      fontSize: 12,
      color: '#202c3d',
      width: 40,
      textAlign: 'center',
    }

    const inputLabelStyle = {
      display: 'inline',
      fontSize: 14,
      color: '#202c3d',
      marginRight: 8,
    }

    let inputWrapper = {};
    if(this.props.rect) {
      inputWrapper = {
        border: '1px solid #f4f4f4',
        padding: '8px 16px',
        borderRadius: 'none',
        display: 'inline',
      }
    } else {
      inputWrapper = {
        border: '1px solid #f4f4f4',
        padding: '8px 16px',
        borderRadius: 32,
        display: 'inline',
      }
    }

    const iconAdjustmentLeft = {
      paddingLeft: this.props.iconLeft ? 22 : 0,
    }

    const iconAdjustmentRight = {
      paddingRight: this.props.iconRight ? 22: 0,
    }

    return(
      <div style={{ position: 'relative'}}>
        {
          this.props.label ? <div style={inputLabelStyle}>{this.props.label}</div> : ''
        }
        <div
          style={this.props.componentStyle ? {...inputWrapper, ...this.props.componentStyle} : inputWrapper}
        >
        {
          this.props.iconLeft ? <span style={{ position: 'relative' }}>{this.renderIcon()}</span> : ''
        }
          <input
            style={this.props.inputStyle ? {...inputStyle, ...this.props.inputStyle, ...iconAdjustmentLeft} : {...inputStyle, ...iconAdjustmentLeft}}
            onBlur={(e) => this.handleBlur(e)}
            onFocus={(e) => this.handleFocus(e)}
            ref={this.inputHours}
            onChange={(e) => this.handleHoursChange(e)}
            maxLength={2}
            type="text"
            value={this.state.hours || ''} />
          <span style={{ color: '#aeaeae' }}>:</span>
          <input
            style={this.props.inputStyle ? {...inputStyle, ...this.props.inputStyle, ...iconAdjustmentRight} : {...inputStyle, ...iconAdjustmentRight}}
            onBlur={(e) => this.handleBlur(e, true)}
            onFocus={(e) => this.handleFocus(e)}
            ref={this.inputMinutes}
            onChange={(e) => this.handleMinutesChange(e)}
            maxLength={2}
            type="text"
            value={this.state.minutes || ''}
            onKeyDown={(e) => this.handleKeyDown(e)} />
        {
          this.props.iconRight ? <span style={{ position: 'relative' }}>{this.renderIcon()}</span> : ''
        }
        </div>
      </div>
    );
  }
}
