(this.webpackJsonptec=this.webpackJsonptec||[]).push([[0],{207:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(30),c=a.n(i),l=(a(85),a(13)),o=a(14),r=a(16),m=a(15),u=a(12),h=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-lg "},s.a.createElement(u.b,{to:"nil",className:"navbar-brand "},"TEC CLUB"),s.a.createElement("div",null,s.a.createElement("ul",{className:"navbar-nav "},s.a.createElement("li",{className:"navbar-item"},s.a.createElement(u.b,{to:"/TRADING",className:"nav-link right"},"Stock Trade")),s.a.createElement("li",{className:"navbar-item"},s.a.createElement(u.b,{to:"/admin",className:"nav-link right"},"Admin"))))))}}]),a}(n.Component),d=a(43),b=a.n(d);a(92),a(96);b.a.initializeApp({apiKey:"AIzaSyCEnbaiBpyuKxQuCscAh9SfgX414EzjvFI",authDomain:"stock-trade-963bf.firebaseapp.com",databaseURL:"https://stock-trade-963bf.firebaseio.com/",projectId:"stock-trade-963bf",storageBucket:"stock-trade-963bf.appspot.com",messagingSenderId:"904285018709",appId:"1:904285018709:web:9a76419fc1cfa8997852dc",measurementId:"G-YKH08PQBPQ"});var v=b.a,p=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onChange=function(t){var a=e.state;a[t.target.name]=t.target.value,e.setState(a)},e.onSubmit=function(t){if(t.preventDefault(),"1324"==prompt("enter admin id")){var a=e.state,n=a.title,s=a.RETURN;e.ref.add({title:n,RETURN:s}).then((function(t){e.setState({title:"",RETURN:0}),e.props.history.push("/")})).catch((function(e){console.error("Error adding document: ",e)}))}else window.alert("YOU DONT HAVE ACCESSS")},e.ref=v.firestore().collection("stocks"),e.state={title:"",RETURN:0},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.RETURN;return s.a.createElement("div",{class:"container"},s.a.createElement("div",{class:"panel panel-default"},s.a.createElement("div",{class:"panel-heading"},s.a.createElement("h3",{class:"panel-title"},"ADD STOCK")),s.a.createElement("div",{class:"panel-body"},s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"title"},"Title:"),s.a.createElement("input",{type:"text",class:"form-control",name:"title",value:t,onChange:this.onChange,placeholder:"NAME"})),s.a.createElement("div",{class:"form-group"},s.a.createElement("label",{for:"author"},"RETURN %:"),s.a.createElement("input",{type:"text",class:"form-control",name:"RETURN",value:a,onChange:this.onChange,placeholder:"%"})),s.a.createElement("button",{type:"submit",class:"btn btn-success"},"Submit")))))}}]),a}(n.Component),f=a(44),E=a.n(f),k=a(76),S=a(6),T=(a(99),function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={time:{},seconds:90},e.timer=0,e.startTimer=e.startTimer.bind(Object(S.a)(e)),e.countDown=e.countDown.bind(Object(S.a)(e)),e}return Object(o.a)(a,[{key:"secondsToTime",value:function(e){var t=e%3600,a=t%60;return{h:Math.floor(e/3600),m:Math.floor(t/60),s:Math.ceil(a)}}},{key:"componentDidMount",value:function(){var e=this.secondsToTime(this.state.seconds);this.setState({time:e})}},{key:"startTimer",value:function(){0==this.timer&&this.state.seconds>0&&(this.timer=setInterval(this.countDown,1e3))}},{key:"countDown",value:function(){var e=this.state.seconds-1;this.setState({time:this.secondsToTime(e),seconds:e}),0==e&&clearInterval(this.timer)}},{key:"render",value:function(){return s.a.createElement("div",{className:"m-2"},this.startTimer(),this.state.time.m,"m : ",this.state.time.s,"s")}}]),a}(n.Component)),g=a(77);a(73);var C=function(e){for(var t=[],a=[],n=0;n<10;n++)t[n]=n+1,a[n]=200*Math.random();var i={labels:t,datasets:[{label:"Price",data:a,borderColor:["white"],backgroundColor:["blue"],pointBackgroundColor:"green",borderWidth:2,fill:!0,lineTension:.55}]};return s.a.createElement(g.a,{data:i,options:{title:{display:!0,fontColor:"white",text:"CAPITAL provided: ".concat(e.cap," by ").concat(e.name),fontSize:20}}})},N=(a(74),a(79)),O=a.n(N),y=function(e){Object(r.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).onCollectionUpdate=function(t){var a=[];t.forEach((function(e){var t=e.data(),n=t.title,s=t.RETURN;a.push({key:e.id,doc:e,title:n,RETURN:s})})),e.setState({stocks:a})},e.ref=v.firestore().collection("stocks").orderBy("title","asc"),e.unsubscribe=null,e.state={selectedOption:"none",RETURN:0,AMOUNT:0,invest:0,CAPITAL:1e4,isSellButton:!1,isInvestButton:!1,check:1,ch:!0,flag:!1,graph:!0,stocks:[]},e.onSell=e.onSell.bind(Object(S.a)(e)),e.onChangeInvest=e.onChangeInvest.bind(Object(S.a)(e)),e.onLaunchClicked=e.onLaunchClicked.bind(Object(S.a)(e)),e.formSubmit=e.formSubmit.bind(Object(S.a)(e)),e.getStock=e.getStock.bind(Object(S.a)(e)),e.graph=e.graph.bind(Object(S.a)(e)),e.onCheck=e.onCheck.bind(Object(S.a)(e)),e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.unsubscribe=this.ref.onSnapshot(this.onCollectionUpdate)}},{key:"getStock",value:function(e){var t=this;this.state.ch&&this.setState({graph:!0}),v.firestore().collection("stocks").doc(e).get().then((function(e){if(e.exists){var a=e.data();t.setState({key:e.id,selectedOption:a.title,RETURN:a.RETURN})}else console.log("No such document!")}))}},{key:"graph",value:function(){this.setState({graph:!1})}},{key:"onCheck",value:function(){this.setState({graph:!0})}},{key:"onSell",value:function(){var e=Object(k.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=this.state.selectedOption&&0!=this.state.invest){e.next=4;break}window.alert("Select a stock and invest to sell"),e.next=11;break;case 4:if(1!=this.state.check){e.next=7;break}return e.next=7,this.setState({AMOUNT:this.state.RETURN*this.state.invest,CAPITAL:this.state.CAPITAL+this.state.AMOUNT,check:2});case 7:if(!window.confirm("you are about to sell")){e.next=11;break}return e.next=10,this.setState({AMOUNT:this.state.RETURN*this.state.invest,CAPITAL:this.state.CAPITAL+this.state.AMOUNT,isSellButton:!0});case 10:console.log("hell",this.state.AMOUNT,this.state.invest,this.state.RETURN);case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"onChangeInvest",value:function(e){this.setState({invest:e.target.value})}},{key:"formSubmit",value:function(e){e.preventDefault(),console.log(this.state.selectedOption)}},{key:"onLaunchClicked",value:function(e){var t=this;e.preventDefault(),"none"==this.state.selectedOption?window.alert("Select a stock to invest"):this.state.invest>1&&this.state.invest<=this.state.CAPITAL?window.confirm("Investment can be made only once, click OK to proceed")&&(this.setState({isSellButton:!0,CAPITAL:this.state.CAPITAL-this.state.invest,isInvestButton:!0,ch:!1,flag:!0}),setTimeout((function(){return t.setState({isSellButton:!1,flag:!1})}),9e4)):(window.alert("Amount cannot be 0 or greater than the CAPITAL provided"),this.setState({invest:0}))}},{key:"render",value:function(){var e=this;return s.a.createElement(O.a,{sm:"600",md:"900",lg:"900",xl:"1300"},s.a.createElement("form",{onSubmit:this.formSubmit},s.a.createElement("div",{className:"app-row "},this.state.graph?s.a.createElement("div",null,s.a.createElement("div",{className:"app-row"},s.a.createElement("div",{className:"stocklist"},s.a.createElement("div",{className:"container"},s.a.createElement("h3",null,"STOCK LIST"),this.state.stocks.map((function(t){return s.a.createElement(u.b,{className:"app-col-5 app-col-lg-2 stock-card text-white",onClick:function(){e.getStock(t.key)}},t.title)}))))),s.a.createElement("div",{className:""},s.a.createElement("button",{disabled:this.state.isInvestButton,className:"search-button",type:"submit",onClick:this.graph},"SELECT STOCK"),s.a.createElement("div",{className:"card-graph"},s.a.createElement(C,{cap:this.state.CAPITAL,name:this.state.selectedOption})))):s.a.createElement("div",{className:" "},s.a.createElement("div",{className:"container"},s.a.createElement("h4",{className:"text-white m-2"},"STOCK INVESTMENT"),s.a.createElement("input",{className:"input1 ml-1 mt-2",type:"text",placeholder:"Enter the investment amount",onChange:this.onChangeInvest}),s.a.createElement("button",{disabled:this.state.isInvestButton,className:"btn btn-danger  m-2",type:"submit",onClick:this.onLaunchClicked},"Fix investment"),s.a.createElement("button",{disabled:this.state.isInvestButton,className:"btn btn-primary m-2",type:"submit",onClick:this.onCheck},"Select Stock"),s.a.createElement("p",{className:"card-head font-weight-bold"},"SELL YOUR STOCK TO GET RETURNS"),s.a.createElement("form",{onSubmit:this.onSell},s.a.createElement("div",{className:"card-calc ml-1"},s.a.createElement("p",null,"Selected STOCK is : ",s.a.createElement("b",null,this.state.selectedOption," ")," "),s.a.createElement("p",null,"Capital by ",this.state.selectedOption,": 10000/-"),s.a.createElement("p",null,"Active Amount: ",this.state.CAPITAL),s.a.createElement("div",{className:"time-card"},this.state.flag?s.a.createElement("div",{className:"m-2"},"Sell will be enabled after :",s.a.createElement(T,null)):s.a.createElement("div",null)),s.a.createElement("button",{disabled:this.state.isSellButton,className:" float-left btn bg-success  m-2",type:"submit"},"Sell"))))))))}}]),a}(n.Component),A=a(2);var R=function(){return s.a.createElement(u.a,null,s.a.createElement(h,null),s.a.createElement("div",null,s.a.createElement(A.a,{path:"/TRADING",exact:!0,component:y}),s.a.createElement(A.a,{path:"/admin",component:p})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,a){},80:function(e,t,a){e.exports=a(207)},85:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.e5381215.chunk.js.map