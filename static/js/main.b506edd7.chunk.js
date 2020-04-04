(this["webpackJsonpinput-time-example"]=this["webpackJsonpinput-time-example"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(5);var a=n(0),l=n.n(a),o=n(3),i=n.n(o),s=n(1);class r extends a.Component{constructor(e){super(e),this.state={},this.props.value&&this.props.value.length>0&&this.props.value.split(":").length>1&&(this.state={hours:this.props.value.split(":")[0],minutes:this.props.value.split(":")[1]},this.props.onInit&&"function"===typeof this.props.onInit&&this.props.onInit({timeDouble:this.toDouble(this.state.hours,this.state.minutes),timeString:this.toString(this.state.hours,this.state.minutes)})),this.inputHours=l.a.createRef(),this.inputMinutes=l.a.createRef()}toDouble(e,t){return parseInt(e||0)+(t?parseInt(t)/60:0)}toString(e,t){const n=parseInt(e)<10?"0".concat(parseInt(e)):parseInt(e),a=parseInt(t)<10?"0".concat(parseInt(t)):parseInt(t);return"".concat(n,":").concat(a)}handleKeyDown(e){8===e.keyCode&&""===e.target.value&&setTimeout(()=>{this.inputHours.current.focus()})}handleHoursChange(e){e.target.value.length>1&&e.target.value<24?(this.inputMinutes.current.focus(),this.setState({hours:e.target.value}),this.props.onChange&&"function"===typeof this.props.onChange&&this.props.onChange({timeDouble:this.toDouble(e.target.value,this.state.minutes),timeString:this.toString(e.target.value,this.state.minutes)})):1==e.target.value.length&&e.target.value<3?(this.setState({hours:e.target.value}),this.props.onChange&&"function"===typeof this.props.onChange&&this.props.onChange({timeDouble:this.toDouble(e.target.value,this.state.minutes),timeString:this.toString(e.target.value,this.state.minutes)})):this.setState({hours:0})}handleMinutesChange(e){1==e.target.value.length&&e.target.value<6||2==e.target.value.length&&e.target.value<60?(this.setState({minutes:e.target.value}),this.props.onChange&&"function"===typeof this.props.onChange&&this.props.onChange({timeDouble:this.toDouble(this.state.hours,e.target.value),timeString:this.toString(this.state.hours,e.target.value)})):this.setState({minutes:0})}handleBlur(e,t){1==e.target.value.length&&(t?this.setState({minutes:"0".concat(this.state.minutes)}):this.setState({hours:"0".concat(this.state.hours)}))}handleFocus(e){e.persist(),setTimeout(()=>{e.target.select()})}render(){const e={outline:"none",border:"none",background:"inherit",margin:0,padding:0,fontSize:12,color:"#202c3d",width:45,textAlign:"center"},t={border:"1px solid #f4f4f4",padding:"8px 16px",borderRadius:32,display:"inline"};return l.a.createElement("div",{style:{position:"relative"}},this.props.label?l.a.createElement("div",{style:{display:"inline",fontSize:14,color:"#202c3d",marginRight:8}},this.props.label):"",l.a.createElement("div",{style:this.props.componentStyle?Object(s.a)({},t,{},this.props.componentStyle):t},l.a.createElement("input",{style:this.props.inputStyle?Object(s.a)({},e,{},this.props.inputStyle):e,onBlur:e=>this.handleBlur(e),onFocus:e=>this.handleFocus(e),ref:this.inputHours,onChange:e=>this.handleHoursChange(e),maxLength:2,type:"text",value:this.state.hours||""}),l.a.createElement("span",{style:{color:"#aeaeae"}},":"),l.a.createElement("input",{style:this.props.inputStyle?Object(s.a)({},e,{},this.props.inputStyle):e,onBlur:e=>this.handleBlur(e,!0),onFocus:e=>this.handleFocus(e),ref:this.inputMinutes,onChange:e=>this.handleMinutesChange(e),maxLength:2,type:"text",value:this.state.minutes||"",onKeyDown:e=>this.handleKeyDown(e)})))}}n(10);var u=()=>l.a.createElement("div",{style:{margin:"64px auto",width:600}},l.a.createElement("h1",null,"React Input Time Component"),l.a.createElement(r,{onChange:e=>{console.log(e)},value:"".concat((new Date).getHours(),":").concat((new Date).getMinutes()),label:"Time Now? ",inputStyle:{width:20}}),l.a.createElement("p",null,"React Input time component is simple implementation of 24h format time input field. ",l.a.createElement("i",null,"OnChange")," and ",l.a.createElement("i",null,"onInit")," events are supported. Also you can change ",l.a.createElement("i",null,"componentStyle")," and ",l.a.createElement("i",null,"inputStyle")," to suit your needs."),l.a.createElement("h3",null,"Why another input time field for react?"),l.a.createElement("p",null,'Well to be honest I want really simple solution, nothing fancy. Nowdays every component seams to have too much functionality. I want European 24h format + some more control then standard input (type="time") html5 component.'),l.a.createElement("p",null,"Open console to see output of ",l.a.createElement("b",null,"onChange")," callback."),l.a.createElement("pre",null,l.a.createElement("code",null,"\nimport { InputTime } from 'input-time'\n\n  <InputTime\n    onChange={(e) => { console.log(e)}}\n    value={'10:00'}\n    label={'Opening hours'}\n    inputStyle={{ width: 20, }}\n  />")),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",null,l.a.createElement(r,{onChange:e=>{console.log(e)},value:"10:00",label:"Opening hours",inputStyle:{width:20}})),l.a.createElement("div",{style:{marginLeft:32}},l.a.createElement(r,{onChange:e=>{console.log(e)},value:"12:30",label:"Closing hours",inputStyle:{width:20}}))),l.a.createElement("h3",null,"Styling"),l.a.createElement("p",null,"There are 2 properties you can manipulate and that's ",l.a.createElement("b",null,"componentStyle")," and ",l.a.createElement("b",null,"inputStyle")," for both props you pass object of css properties."),l.a.createElement("p",null,"You can change this component to be block element by overriding display property on ",l.a.createElement("i",null,"componentStyle")),l.a.createElement("pre",null,l.a.createElement("code",null,"\n  <InputTime\n    value={'21:30'}\n    componentStyle={{ display: 'block', width: 100, }}\n  />\n        ")),l.a.createElement("div",null,l.a.createElement(r,{value:"21:30",componentStyle:{display:"block",width:100}})),l.a.createElement("h5",null,"Different styles"),l.a.createElement("div",{style:{marginTop:32}},l.a.createElement("div",null,l.a.createElement(r,{onChange:e=>{console.log(e)},value:"16:25",inputStyle:{width:20}})),l.a.createElement("div",{style:{marginTop:32}},l.a.createElement(r,{onChange:e=>{console.log(e)},value:"22:14",inputStyle:{width:85}})),l.a.createElement("div",{style:{marginTop:32}},l.a.createElement(r,{onChange:e=>{console.log(e)},value:"23:59",inputStyle:{width:85,fontWeight:600}})),l.a.createElement("div",{style:{marginTop:32}},l.a.createElement("pre",null,l.a.createElement("code",null,"\n  <InputTime\n    value={'21:50'}\n    componentStyle={{ border: '2px solid red'}}\n    inputStyle={{ width: 45 }} />\n  ")),l.a.createElement(r,{value:"21:50",componentStyle:{border:"2px solid red"},inputStyle:{width:45}})),l.a.createElement("div",{style:{marginTop:32}},l.a.createElement(r,{onChange:e=>{console.log(e)},value:"21:50",componentStyle:{border:"2px dashed #4A9CF9",borderRadius:0},inputStyle:{width:45}})),l.a.createElement("div",{style:{marginTop:32,display:"flex"}},l.a.createElement(r,{onInit:e=>console.log("initialized",e),onChange:e=>{console.log(e)},value:"21:50",componentStyle:{border:"1px solid #dfe2e5",borderRadius:0},inputStyle:{width:45}}))));i.a.render(l.a.createElement(u,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.b506edd7.chunk.js.map