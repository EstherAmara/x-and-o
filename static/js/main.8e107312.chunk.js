(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],{14:function(e,t,r){},8:function(e,t,r){e.exports=r(9)},9:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(2),s=r(4),u=r(3),i=r(7),c=r(0),o=r.n(c),l=r(6),m=r.n(l),d=(r(14),function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(i.a)(t[r],3),n=a[0],s=a[1],u=a[2];if(e[n]&&e[n]===e[s]&&e[n]===e[u])return e[n]}return null}),h=function(e){return o.a.createElement("button",{className:"square",onClick:e.onClick},e.value)},v=function(e){Object(s.a)(r,e);var t=Object(u.a)(r);function r(){return Object(a.a)(this,r),t.apply(this,arguments)}return Object(n.a)(r,[{key:"renderSquare",value:function(e){var t=this;return o.a.createElement(h,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),o.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),o.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),r}(c.Component),p=function(e){Object(s.a)(r,e);var t=Object(u.a)(r);function r(e){var n;return Object(a.a)(this,r),(n=t.call(this,e)).handleClick=function(e){var t=n.state.history.slice(0,n.state.stepNumber+1),r=t[t.length-1].squares.slice();d(r)||r[e]||(r[e]=n.state.xIsNext?"X":"O",n.setState({history:t.concat([{squares:r}]),xIsNext:!n.state.xIsNext,stepNumber:t.length}))},n.jumpTo=function(e){n.setState({stepNumber:e,xIsNext:e%2===0})},n.state={history:[{squares:Array(9).fill(null)}],xIsNext:!0,stepNumber:0},n}return Object(n.a)(r,[{key:"render",value:function(){var e=this,t=this.state.history,r=t[this.state.stepNumber],a=d(r.squares),n=t.map((function(t,r){var a=r?"Go to move #"+r:"Go to game start";return o.a.createElement("li",{key:r},o.a.createElement("button",{onClick:function(){return e.jumpTo(r)}},a))})),s=a?"Winner: "+a:"Next player: "+(this.state.xIsNext?"X":"O");return o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement(v,{squares:r.squares,onClick:function(t){return e.handleClick(t)}})),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",null," ",s," "),o.a.createElement("ol",null," ",n," ")))}}]),r}(c.Component);m.a.render(o.a.createElement(p,null),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.8e107312.chunk.js.map