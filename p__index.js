(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{QeBL:function(e,t,a){"use strict";a.r(t);var n=a("k1fw"),d=a("q1tI"),r=a.n(d),i=a("MNGV"),o=a.n(i);a("vjVy");o.a.registerNode("test-node",{options:{size:[120,80],wrapperStyle:{lineWidth:1.2,radius:[3],fill:"#fff",stroke:"#2da9fa"}},draw(e,t){var a=this.options,d=a.size,r=a.wrapperStyle,i=t.addShape("rect",{name:"wrapper",draggable:!0,attrs:Object(n["a"])({x:0,y:-2,width:d[0],height:d[1]+2},r)});return i},afterDraw(e,t){var a=this.options,n=a.size;t.addShape("text",{name:"iconfont",draggable:!0,attrs:{x:n[0]/2,y:n[1]/2,fontFamily:"iconfont",fontSize:25,text:"\ue612",fill:"#0c0",textAlign:"center",textBaseline:"middle"}})}},"single-node"),t["default"]=()=>{var e=()=>{var e=new o.a.Graph({container:"mountNode",width:800,height:500,modes:{default:["drag-node","drag-canvas"]}});e.read({nodes:[{id:"node1",type:"test-node",x:100,y:200},{id:"node2",x:300,y:200}],edges:[{source:"node1",target:"node2"}]})};return r.a.useEffect(()=>e(),[]),r.a.createElement("div",{id:"mountNode"})}},vjVy:function(e,t,a){}}]);