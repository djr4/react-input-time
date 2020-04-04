import React from 'react'

import { InputTime } from 'input-time'
import 'input-time/dist/index.css'

const App = () => {
  return <div style={{ margin: '64px auto', width: 600, }}>
    <h1>
      React Input Time Component
    </h1>
    <InputTime
      onChange={(e) => { console.log(e)}}
      value={`${new Date().getHours()}:${new Date().getMinutes()}`}
      label={'Time Now? '}
      inputStyle={{ width: 20, }}
      />
    <p>
      React Input time component is simple implementation of 24h format time input field. <i>OnChange</i> and <i>onInit</i> events are supported. Also you can change <i>componentStyle</i> and <i>inputStyle</i> to suit your needs.
    </p>
    <h3>Why another input time field for react?</h3>
    <p>
      Well to be honest I want really simple solution, nothing fancy. Nowdays every component seams to have too much functionality.
      I want European 24h format + some more control then standard input (type="time") html5 component.
    </p>
    <p>
      Open console to see output of <b>onChange</b> callback.
    </p>
    <pre>
      <code>
      {
        `
  <InputTime
    onChange={(e) => { console.log(e)}}
    value={'10:00'}
    label={'Opening hours'}
    inputStyle={{ width: 20, }}
  />`
      }
      </code>
    </pre>
    <div style={{ display: 'flex'}}>
      <div><InputTime onChange={(e) => { console.log(e)}} value={`10:00`} label={`Opening hours`} inputStyle={{ width: 20, }} /></div>
      <div style={{ marginLeft: 32, }}><InputTime onChange={(e) => { console.log(e)}} value={`12:30`} label={`Closing hours`} inputStyle={{ width: 20, }} /></div>
    </div>
    <h3>Styling</h3>
    <p>
      There are 2 properties you can manipulate and that's <b>componentStyle</b> and <b>inputStyle</b> for both props you pass object of css properties.
    </p>
    <p>
      You can change this component to be block element by overriding display property on <i>componentStyle</i>
    </p>
    <pre>
      <code>
        {
        `
  <InputTime
    value={'21:30'}
    componentStyle={{ display: 'block', width: 100, }}
  />
        `
        }
      </code>
    </pre>
    <div><InputTime value={'21:30'} componentStyle={{ display: 'block', width: 100, }} /></div>
    <h5>Different styles</h5>
    <div style={{ marginTop: 32, }}>
      <div><InputTime onChange={(e) => { console.log(e)}} value={`16:25`} inputStyle={{ width: 20, }} /></div>
      <div style={{ marginTop: 32, }}><InputTime onChange={(e) => { console.log(e)}} value={`22:14`} inputStyle={{ width: 85, }} /></div>
      <div style={{ marginTop: 32, }}><InputTime onChange={(e) => { console.log(e)}} value={`23:59`} inputStyle={{ width: 85, fontWeight: 600 }} /></div>
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
        <InputTime value={`21:50`} componentStyle={{ border: '2px solid red'}} inputStyle={{ width: 45 }} />
      </div>
      <div style={{ marginTop: 32, }}><InputTime onChange={(e) => { console.log(e)}} value={`21:50`} componentStyle={{ border: '2px dashed #4A9CF9', borderRadius: 0, }} inputStyle={{ width: 45 }} /></div>
      <div style={{ marginTop: 32, display: 'flex' }}>
        <InputTime onInit={(e) => console.log('initialized', e)} onChange={(e) => { console.log(e)}} value={`21:50`} componentStyle={{ border: '1px solid #dfe2e5', borderRadius: 0, }} inputStyle={{ width: 45 }} />
      </div>

    </div>
  </div>
}

export default App
