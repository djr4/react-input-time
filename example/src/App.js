import React, { Component } from 'react'

import { InputTime } from 'input-time'

const moment = require('moment');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: null,
    }
  }

  componentDidMount() {
    setInterval(() => { this.setState({ now: moment().format('HH:mm') }); }, 2000);
  }

  render() {
    return <div style={{ margin: '64px auto', width: 600, }}>
      <h1>
        React Input Time Component
      </h1>
      <InputTime
        iconLeft
        onChange={(e) => { console.log(e); this.setState({ now: e.timeDouble })}}
        value={this.state.now}
        label={'Time Now? '}
      />
      <p>
        React Input time component is simple implementation of 24h format time input field. <i>OnChange</i> and <i>onInit</i> events are supported. Also you can change <i>componentStyle</i> and <i>inputStyle</i> to suit your needs. Find source code at <a href="https://github.com/djr4/react-input-time">github</a>.
      </p>
      <h3>Why another input time field for react?</h3>
      <p>
        Well to be honest I want really simple solution, nothing fancy. Nowdays every component seams to have too much functionality.
        I want European 24h format + some more control then standard input (type="time") html5 component.
      </p>
      <h3>Installation</h3>
      <pre>
        <code>
  {
    `
      npm install --save input-time
    `
  }
        </code>
      </pre>
      <h3>Usage</h3>
      <p>
        Open console to see output of <b>onChange</b> callback.
      </p>
      <pre>
        <code>
        {
          `
  import { InputTime } from 'input-time'

    <InputTime
      onChange={(e) => { console.log(e)}}
      value={'07:30'}
      label={'Opening hours'}]
      labelColor="green"
    />`
        }
        </code>
      </pre>
      <div style={{ display: 'flex'}}>
        <div><InputTime onChange={(e) => { console.log(e)}} iconRight value={`07:30`} label={`Opening hours`} labelColor="green" /></div>
        <div style={{ marginLeft: 32, }}><InputTime iconRight onChange={(e) => { console.log(e)}} value={`19:30`} label={`Closing hours`} labelColor="red" /></div>
      </div>
      <h3>Some predefined styles</h3>
      <p>Rounded component is default</p>
      <div style={{ marginTop: 8, }}><InputTime iconRight value={`19:30`} /></div>
      <p>if you add <b>rect</b> property to the component you get standard input look</p>
      <div><InputTime rect iconRight value={`20:30`}  /></div>
      <p style={{ fontSize: 12, marginTop: 32, padding: '8px 16px', background: '#ffedd1'}}>NOTE: by default icons are not shown. you should add <b>iconLeft</b> or <b>iconRight</b> property.</p>
      <h3>Custom Styling & Design related props</h3>
      <p>
        There are 2 properties you can manipulate and that's <b>componentStyle</b> and <b>inputStyle</b> for both props you pass object of css properties.
      </p>
      <p>
        You can change this component width by setting componentStyle <i>width</i> + inputStyle <i>width</i> property.
      </p>
      <pre>
        <code>
          {
          `
    <InputTime
      value={21.5}
      componentStyle={{ width: 45, }}
      inputStyle={{ width: 20, }}
    />
          `
          }
        </code>
      </pre>
      <div><InputTime value={21.5} componentStyle={{ width: 45, }} inputStyle={{ width: 20, }} /></div>
      <h5>Different styles</h5>
      <div style={{ marginTop: 32, }}>
        <p>You can add icon left or right inside component</p>
        <pre>
          <code>
          {
  `
  <InputTime
    iconLeft
    value={'22:14'}
    inputStyle={{ width: 85, }}
    componentStyle={{ width: 120 }}
  />
  `
          }
          </code>
        </pre>
        <div style={{ marginTop: 32, }}><InputTime iconLeft onChange={(e) => { console.log(e)}} value={0} componentStyle={{ width: 220 }} inputStyle={{ width: 85, }} /></div>
        <p>Let's try icon on the right with different color? blue?</p>
        <pre>
          <code>
  {
    `
    <InputTime
      iconRight
      iconColor='#4A9CF9'
      value={'23:59'}
      inputStyle={{ width: 85, fontWeight: 600 }}
    />
    `
  }
          </code>
        </pre>
        <div style={{ marginTop: 32, }}><InputTime iconRight iconColor="#4A9CF9" onChange={(e) => { console.log(e)}} value={`23:59`} componentStyle={{ width: 220 }} inputStyle={{ width: 85, fontWeight: 600 }} /></div>
        <div style={{ marginTop: 32, }}>
          <pre><code>
  {
    `
    <InputTime
      value={'21:50'}
      componentStyle={{ border: '2px solid red'}}
      inputStyle={{ width: 45 }} />
    `
  }
          </code></pre>

        <InputTime value={`21:50`} componentStyle={{ border: '2px solid red'}} />
        </div>
        <div style={{marginTop: 32,}}>
          <InputTime onChange={(e) => { console.log(e)}} value={`21:50`} componentStyle={{ border: '2px dashed #4A9CF9', borderRadius: 0, }} />
        </div>
        <div style={{marginTop: 32,}}>
          <InputTime onInit={(e) => console.log('initialized', e)} onChange={(e) => { console.log(e)}} value={`21:50`} componentStyle={{ border: '1px solid #dfe2e5', borderRadius: 0, }} />
        </div>

      </div>
    </div>
  }

}

export default App
