(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(t,e,o){t.exports=o(59)},57:function(t,e,o){},59:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(23),c=o.n(r),l=o(14),i=o(6),s=o(7),d=o(9),p=o(8),u=o(10),m=o(61),h=o(62),f=o(60);function b(){return a.a.createElement("header",{style:g},a.a.createElement("h1",null," ToDo List"),a.a.createElement(f.a,{style:y,to:"/"},"Home")," ","|"," ",a.a.createElement(f.a,{style:y,to:"/about"},"About"))}var g={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},y={color:"#fff",textDecoration:"none"},E=function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:o.props.todo.completed?"line-through":"none"}},o}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t,e=this.props.todo,o=e.id,n=e.title;return t=this.props.todo.completed?a.a.createElement("input",{type:"checkbox",onChange:this.props.toggleComplete.bind(this,o),checked:!0}):a.a.createElement("input",{type:"checkbox",onChange:this.props.toggleComplete.bind(this,o)}),a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,t,n,a.a.createElement("button",{onClick:this.props.delTodo.bind(this,o),style:j},"x")))}}]),e}(n.Component),j={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},v=E,O=function(t){function e(){return Object(i.a)(this,e),Object(d.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return this.props.todos.map(function(e){return a.a.createElement(v,{key:e.id,todo:e,toggleComplete:t.props.toggleComplete,delTodo:t.props.delTodo})})}}]),e}(n.Component),x=o(24),C=function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).state={title:""},o.onSubmit=function(t){t.preventDefault(),o.props.addTodo(o.state.title),o.setState({title:""})},o.onChange=function(t){o.setState(Object(x.a)({},t.target.name,t.target.value))},o}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},a.a.createElement("input",{type:"text",name:"title",placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange,style:{flex:"10",padding:"10px"}}),a.a.createElement("input",{type:"submit",value:"ADD TODO",className:"btn",style:{flex:"1"}}))}}]),e}(n.Component);function k(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null,"This is the TodoList app v1.0.0."))}o(35);var T=o(12),S=o.n(T),w=(o(57),function(t){function e(){var t,o;Object(i.a)(this,e);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(o=Object(d.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(a)))).state={todos:[]},o.toggleComplete=function(t){o.setState({todos:o.state.todos.map(function(e){return e.id===t&&(e.completed=!e.completed),e})})},o.delTodo=function(t){S.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(t)).then(function(e){return o.setState({todos:Object(l.a)(o.state.todos.filter(function(e){return e.id!==t}))})})},o.addTodo=function(t){S.a.post("https://jsonplaceholder.typicode.com/todos",{title:t,completed:!1}).then(function(t){return o.setState({todos:[].concat(Object(l.a)(o.state.todos),[t.data])})})},o}return Object(u.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;S.a.get("https://jsonplaceholder.typicode.com/todos?_limit=20").then(function(e){return t.setState({todos:e.data})})}},{key:"render",value:function(){var t=this;return console.log(this.state.todos),a.a.createElement(m.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(b,null),a.a.createElement(h.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,{addTodo:t.addTodo}),a.a.createElement(O,{todos:t.state.todos,toggleComplete:t.toggleComplete,delTodo:t.delTodo}))}}),a.a.createElement(h.a,{path:"/about",component:k}))))}}]),e}(n.Component));c.a.render(a.a.createElement(w,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.c197b291.chunk.js.map