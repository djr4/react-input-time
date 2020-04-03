import React from 'react'

import { InputTime } from 'input-time'
import 'input-time/dist/index.css'

const App = () => {
  return <div style={{ margin: '64px auto', width: 600, }}>
    <div style={{ display: 'flex'}}>
      <div><InputTime onChange={(e) => { console.log(e)}} value={`10:00`} label={`Opening hours`} inputStyle={{ width: 20, }} /></div>
      <div style={{ marginLeft: 32, }}><InputTime onChange={(e) => { console.log(e)}} value={`12:30`} label={`Closing hours`} inputStyle={{ width: 20, }} /></div>
    </div>
    <div style={{ marginTop: 32, }}>
      <div><InputTime onChange={(e) => { console.log(e)}} value={`16:25`} inputStyle={{ width: 20, }} /></div>
      <div style={{ marginTop: 32, }}><InputTime onChange={(e) => { console.log(e)}} value={`22:14`} inputStyle={{ width: 85, }} /></div>
      <div style={{ marginTop: 32, }}><InputTime onChange={(e) => { console.log(e)}} value={`23:59`} inputStyle={{ width: 85, fontWeight: 600 }} /></div>
      <div style={{ marginTop: 32, }}><InputTime onChange={(e) => { console.log(e)}} value={`21:50`} componentStyle={{ border: '2px solid red'}} inputStyle={{ width: 45 }} /></div>
      <div style={{ marginTop: 32, }}><InputTime onChange={(e) => { console.log(e)}} value={`21:50`} componentStyle={{ border: '2px dashed #4A9CF9', borderRadius: 0, }} inputStyle={{ width: 45 }} /></div>

    </div>
  </div>
}

export default App
