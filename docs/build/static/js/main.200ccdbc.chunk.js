(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(t,e,n){t.exports=n(59)},57:function(t,e,n){},59:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(23),c=n.n(r),l=n(14),i=n(6),s=n(7),d=n(9),u=n(8),p=n(10),m=n(61),f=n(62),h=n(60);function b(){return a.a.createElement("header",{style:g},a.a.createElement("h1",null," ToDo List"),a.a.createElement(h.a,{style:y,to:"/"},"Home")," ","|"," ",a.a.createElement(h.a,{style:y,to:"/about"},"About"))}var g={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},y={color:"#fff",textDecoration:"none"},j=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:n.props.todo.completed?"line-through":"none"}},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.props.todo,e=t.id,n=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.toggleComplete.bind(this,e)})," ",n,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,e),style:v},"x")))}}]),e}(o.Component),v={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},E=j,O=function(t){function e(){return Object(i.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return a.a.createElement(E,{key:e.id,todo:e,toggleComplete:t.props.toggleComplete,delTodo:t.props.delTodo})})}}]),e}(o.Component),x=n(24),C=function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},n.onSubmit=function(t){t.preventDefault(),n.props.addTodo(n.state.title),n.setState({title:""})},n.onChange=function(t){n.setState(Object(x.a)({},t.target.name,t.target.value))},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange,style:{flex:"10",padding:"10px"}}),a.a.createElement("input",{type:"submit",value:"Sumbit",className:"btn",style:{flex:"1"}}))}}]),e}(o.Component);function T(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the TodoList app v1.0.0."))}n(35);var k=n(12),S=n.n(k),w=(n(57),function(t){function e(){var t,n;Object(i.a)(this,e);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},n.toggleComplete=function(t){n.setState({todos:n.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})},n.delTodo=function(t){S.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(e){return n.setState({todos:Object(l.a)(n.state.todos.filter(function(e){return e.id!==t}))})})},n.addTodo=function(t){S.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then(function(t){return n.setState({todos:[].concat(Object(l.a)(n.state.todos),[t.data])})})},n}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;S.a.get("https://jsonplaceholder.typicode.com/todos?_limit=20").then(function(e){return t.setState({todos:e.data})})}},{key:"render",value:function(){var t=this;return console.log(this.state.todos),a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(b,null),a.a.createElement(f.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,{addTodo:t.addTodo}),a.a.createElement(O,{todos:t.state.todos,toggleComplete:t.toggleComplete,delTodo:t.delTodo}))}}),a.a.createElement(f.a,{path:"/about",component:T}))))}}]),e}(o.Component));c.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.200ccdbc.chunk.js.map