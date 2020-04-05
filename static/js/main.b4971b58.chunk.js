(this["webpackJsonpinput-time-example"]=this["webpackJsonpinput-time-example"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(5);var a=n(0),l=n.n(a),o=n(3),i=n.n(o),r=n(1);class s extends a.Component{constructor(e){super(e),this.state={},this.props.value&&this.props.value.length>0&&this.props.value.split(":").length>1&&(this.state={hours:this.props.value.split(":")[0],minutes:this.props.value.split(":")[1]},this.props.onInit&&"function"===typeof this.props.onInit&&this.props.onInit({timeDouble:this.toDouble(this.state.hours,this.state.minutes),timeString:this.toString(this.state.hours,this.state.minutes)})),this.inputHours=l.a.createRef(),this.inputMinutes=l.a.createRef()}toDouble(e,t){return parseInt(e||0)+(t?parseInt(t)/60:0)}toString(e,t){const n=parseInt(e)<10?"0".concat(parseInt(e)):parseInt(e),a=parseInt(t)<10?"0".concat(parseInt(t)):parseInt(t);return"".concat(n,":").concat(a)}handleKeyDown(e){8===e.keyCode&&""===e.target.value&&setTimeout(()=>{this.inputHours.current.focus()})}handleHoursChange(e){e.target.value.length>1&&e.target.value<24?(this.inputMinutes.current.focus(),this.setState({hours:e.target.value}),this.props.onChange&&"function"===typeof this.props.onChange&&this.props.onChange({timeDouble:this.toDouble(e.target.value,this.state.minutes),timeString:this.toString(e.target.value,this.state.minutes)})):1==e.target.value.length&&e.target.value<3?(this.setState({hours:e.target.value}),this.props.onChange&&"function"===typeof this.props.onChange&&this.props.onChange({timeDouble:this.toDouble(e.target.value,this.state.minutes),timeString:this.toString(e.target.value,this.state.minutes)})):this.setState({hours:0})}handleMinutesChange(e){1==e.target.value.length&&e.target.value<6||2==e.target.value.length&&e.target.value<60?(this.setState({minutes:e.target.value}),this.props.onChange&&"function"===typeof this.props.onChange&&this.props.onChange({timeDouble:this.toDouble(this.state.hours,e.target.value),timeString:this.toString(this.state.hours,e.target.value)})):this.setState({minutes:0})}handleBlur(e,t){1==e.target.value.length&&(t?this.setState({minutes:"0".concat(this.state.minutes)}):this.setState({hours:"0".concat(this.state.hours)}))}handleFocus(e){e.persist(),setTimeout(()=>{e.target.select()})}renderIcon(){const e=this.props.iconLeft?{left:0}:{right:0};return l.a.createElement("span",{style:Object(r.a)({position:"absolute",top:0},e)},l.a.createElement("svg",{width:"20px",height:"20px","aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"clock",className:"svg-inline--fa fa-clock fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l.a.createElement("path",{fill:this.props.iconColor||"#aeaeae",d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"})))}render(){const e={outline:"none",border:"none",background:"inherit",margin:0,padding:0,fontSize:12,color:"#202c3d",width:30,textAlign:"center"},t={display:"block",fontSize:14,color:this.props.labelColor?this.props.labelColor:"#202c3d",marginRight:8,marginTop:10};let n={};n=this.props.rect?{border:"1px solid #f4f4f4",padding:"8px 16px",borderRadius:"none",display:"block"}:{border:"1px solid #f4f4f4",padding:"8px 16px",borderRadius:32,display:"block",width:this.props.iconLeft||this.props.iconRight?90:65};const a={paddingLeft:this.props.iconLeft?22:0},o={paddingRight:this.props.iconRight?22:0};return l.a.createElement("div",{style:{display:"flex",position:"relative"}},this.props.label?l.a.createElement("div",{style:t},this.props.label):"",l.a.createElement("div",{style:this.props.componentStyle?Object(r.a)({},n,{},this.props.componentStyle):n},this.props.iconLeft?l.a.createElement("span",{style:{position:"relative"}},this.renderIcon()):"",l.a.createElement("input",{style:this.props.inputStyle?Object(r.a)({},e,{},this.props.inputStyle,{},a):Object(r.a)({},e,{},a),onBlur:e=>this.handleBlur(e),onFocus:e=>this.handleFocus(e),ref:this.inputHours,onChange:e=>this.handleHoursChange(e),maxLength:2,type:"text",value:this.state.hours||""}),l.a.createElement("span",{style:{color:"#aeaeae"}},":"),l.a.createElement("input",{style:this.props.inputStyle?Object(r.a)({},e,{},this.props.inputStyle,{},o):Object(r.a)({},e,{},o),onBlur:e=>this.handleBlur(e,!0),onFocus:e=>this.handleFocus(e),ref:this.inputMinutes,onChange:e=>this.handleMinutesChange(e),maxLength:2,type:"text",value:this.state.minutes||"",onKeyDown:e=>this.handleKeyDown(e)}),this.props.iconRight?l.a.createElement("span",{style:{position:"relative"}},this.renderIcon()):""))}}n(10);var p=()=>l.a.createElement("div",{style:{margin:"64px auto",width:600}},l.a.createElement("h1",null,"React Input Time Component"),l.a.createElement(s,{iconLeft:!0,onChange:e=>{console.log(e)},value:"".concat((new Date).getHours(),":").concat((new Date).getMinutes()<10?"0".concat((new Date).getMinutes()):(new Date).getMinutes()),label:"Time Now? "}),l.a.createElement("p",null,"React Input time component is simple implementation of 24h format time input field. ",l.a.createElement("i",null,"OnChange")," and ",l.a.createElement("i",null,"onInit")," events are supported. Also you can change ",l.a.createElement("i",null,"componentStyle")," and ",l.a.createElement("i",null,"inputStyle")," to suit your needs. Find source code at ",l.a.createElement("a",{href:"https://github.com/djr4/react-input-time"},"github"),"."),l.a.createElement("h3",null,"Why another input time field for react?"),l.a.createElement("p",null,'Well to be honest I want really simple solution, nothing fancy. Nowdays every component seams to have too much functionality. I want European 24h format + some more control then standard input (type="time") html5 component.'),l.a.createElement("h3",null,"Installation"),l.a.createElement("pre",null,l.a.createElement("code",null,"\n    npm install --save input-time\n  ")),l.a.createElement("h3",null,"Usage"),l.a.createElement("p",null,"Open console to see output of ",l.a.createElement("b",null,"onChange")," callback."),l.a.createElement("pre",null,l.a.createElement("code",null,"\nimport { InputTime } from 'input-time'\n\n  <InputTime\n    onChange={(e) => { console.log(e)}}\n    value={'10:00'}\n    label={'Opening hours'}]\n    labelColor=\"green\"\n  />")),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",null,l.a.createElement(s,{onChange:e=>{console.log(e)},iconRight:!0,value:"07:00",label:"Opening hours",labelColor:"green"})),l.a.createElement("div",{style:{marginLeft:32}},l.a.createElement(s,{iconRight:!0,onChange:e=>{console.log(e)},value:"19:30",label:"Closing hours",labelColor:"red"}))),l.a.createElement("h3",null,"Some predefined styles"),l.a.createElement("p",null,"Rounded component is default"),l.a.createElement("div",{style:{marginTop:8}},l.a.createElement(s,{iconRight:!0,value:"19:30"})),l.a.createElement("p",null,"if you add ",l.a.createElement("b",null,"rect")," property to the component you get standard input look"),l.a.createElement("div",null,l.a.createElement(s,{rect:!0,iconRight:!0,value:"20:30"})),l.a.createElement("p",{style:{fontSize:12,marginTop:32,padding:"8px 16px",background:"#ffedd1"}},"NOTE: by default icons are not shown. you should add ",l.a.createElement("b",null,"iconLeft")," or ",l.a.createElement("b",null,"iconRight")," property."),l.a.createElement("h3",null,"Custom Styling & Design related props"),l.a.createElement("p",null,"There are 2 properties you can manipulate and that's ",l.a.createElement("b",null,"componentStyle")," and ",l.a.createElement("b",null,"inputStyle")," for both props you pass object of css properties."),l.a.createElement("p",null,"You can change this component width by setting componentStyle ",l.a.createElement("i",null,"width")," + inputStyle ",l.a.createElement("i",null,"width")," property."),l.a.createElement("pre",null,l.a.createElement("code",null,"\n  <InputTime\n    value={'21:30'}\n    componentStyle={{ width: 45, }}\n    inputStyle={{ width: 20, }}\n  />\n        ")),l.a.createElement("div",null,l.a.createElement(s,{value:"21:30",componentStyle:{width:45},inputStyle:{width:20}})),l.a.createElement("h5",null,"Different styles"),l.a.createElement("div",{style:{marginTop:32}},l.a.createElement("p",null,"You can add icon left or right inside component"),l.a.createElement("pre",null,l.a.createElement("code",null,"\n<InputTime\n  iconLeft\n  value={'22:14'}\n  inputStyle={{ width: 85, }}\n  componentStyle={{ width: 120 }}\n/>\n")),l.a.createElement("div",{style:{marginTop:32}},l.a.createElement(s,{iconLeft:!0,onChange:e=>{console.log(e)},value:"22:14",componentStyle:{width:220},inputStyle:{width:85}})),l.a.createElement("p",null,"Let's try icon on the right with different color? blue?"),l.a.createElement("pre",null,l.a.createElement("code",null,"\n  <InputTime\n    iconRight\n    iconColor='#4A9CF9'\n    value={'23:59'}\n    inputStyle={{ width: 85, fontWeight: 600 }}\n  />\n  ")),l.a.createElement("div",{style:{marginTop:32}},l.a.createElement(s,{iconRight:!0,iconColor:"#4A9CF9",onChange:e=>{console.log(e)},value:"23:59",componentStyle:{width:220},inputStyle:{width:85,fontWeight:600}})),l.a.createElement("div",{style:{marginTop:32}},l.a.createElement("pre",null,l.a.createElement("code",null,"\n  <InputTime\n    value={'21:50'}\n    componentStyle={{ border: '2px solid red'}}\n    inputStyle={{ width: 45 }} />\n  ")),l.a.createElement(s,{value:"21:50",componentStyle:{border:"2px solid red"}})),l.a.createElement("div",{style:{marginTop:32}},l.a.createElement(s,{onChange:e=>{console.log(e)},value:"21:50",componentStyle:{border:"2px dashed #4A9CF9",borderRadius:0}})),l.a.createElement("div",{style:{marginTop:32}},l.a.createElement(s,{onInit:e=>console.log("initialized",e),onChange:e=>{console.log(e)},value:"21:50",componentStyle:{border:"1px solid #dfe2e5",borderRadius:0}}))));i.a.render(l.a.createElement(p,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.b4971b58.chunk.js.map