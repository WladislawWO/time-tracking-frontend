"use strict";(self.webpackChunklev_time_tracking_frontend=self.webpackChunklev_time_tracking_frontend||[]).push([[418],{8684:function(t,e,n){n.d(e,{Z:function(){return l}});var i=n(4569),r=n.n(i),a=n(9085),o=r().create({baseURL:"http://localhost:8080/api/v1/",responseType:"json",headers:{common:{Accept:"application/json"}}});o.interceptors.response.use(null,(function(){a.Am.error("Network error")}));var l=o},6050:function(t,e,n){n.d(e,{a:function(){return i}});var i={time:"time",timeList:"timeList",total:"total",routineList:"routineList",routine:"routine",todoList:"todoList"}},306:function(t,e,n){n.d(e,{Z:function(){return l}});n(2791);var i=n(1694),r=n.n(i),a={button:"style_button__pEfPR",danger:"style_danger__eOlmJ",secondary:"style_secondary__aFgOV"},o=n(184);function l(t){var e=t.children,n=t.styles,i=t.variant,l=t.onClick,s=t.type;return(0,o.jsx)("button",{className:r()(a.button,n,a[i]),onClick:l,type:s||"button",children:e})}},3442:function(t,e,n){n.d(e,{Z:function(){return d}});var i=n(1413),r=n(5987),a=n(2791),o=n(1694),l=n.n(o),s={input:"style_input__A36eO",label:"style_label__UJZuU"},u=n(184),c=["styles","containerStyles","variant","onChange","label"],d=(0,a.forwardRef)((function(t,e){var n=t.styles,a=t.containerStyles,o=t.variant,d=t.onChange,v=t.label,m=(0,r.Z)(t,c);return(0,u.jsxs)("div",{className:l()(s.inputConatiner,a),children:[v&&(0,u.jsx)("div",{className:s.label,children:v}),(0,u.jsx)("input",(0,i.Z)((0,i.Z)({},m),{},{ref:e,className:l()(s.input,n,s[o]),onChange:d}))]})}))},8418:function(t,e,n){n.r(e),n.d(e,{default:function(){return N}});var i=n(1413),r=n(306),a=n(3442),o=n(2791),l=n(9683),s=n(6152),u=n(184);s.kL.register(s.uw,s.f$,s.od,s.jn,s.Dx,s.u,s.De);var c={layout:{padding:25},scales:{y:{ticks:{color:"rgb(255, 255, 255, 0.7)"},grid:{color:"rgb(255, 255, 255, 0.5)"}},x:{ticks:{color:"rgb(255, 255, 255, 0.7)"},grid:{color:"rgb(255, 255, 255, 0.5)"}}},plugins:{legend:{display:!1},title:{display:!1}}};function d(t){var e=t.bgColor,n=t.gradient,i=t.labels,r=t.values,a=(0,o.useMemo)((function(){return{id:"custom_canvas_background_color",beforeDraw:function(t){var e=t.canvas.getContext("2d");e.save(),e.globalCompositeOperation="destination-over";var i=e.createLinearGradient(0,0,90,250);i.addColorStop(0,n[0]),i.addColorStop(1,n[1]),e.fillStyle=i,e.fillRect(0,0,t.width,t.height),e.restore()}}}),[e,n]),s=(0,o.useMemo)((function(){return{labels:i,datasets:[{label:"Dataset 1",data:r,color:"rgb(255, 255, 255)",borderColor:"rgb(255, 255, 255)",backgroundColor:"rgba(255, 255, 255, 1)"}]}}),[i,r]);return(0,u.jsx)(l.x1,{options:c,data:s,plugins:[a]})}var v=n(3792),m=n(2982),f=n(885),g=n(1933),_=n(9271),b=n(1134),p=n(6050),y=n(1688),h=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],C="style_chartContainer__OMcfA",Z="style_title__Pgg1y",j="style_name__9DqSJ",x="style_timeDetailsContainer__MKNTC",k="style_containerInput__HnbFn",L="style_timeForm__5j3lv",S="style_button__CzF0s";var N=function(){var t=function(){var t,e,n=(0,_.UO)(),i="total"===n.id,r=(0,g.useQuery)(p.a.total,i?y.C.getTotal:function(){return y.C.getTime(n.id)}),a=r.isLoading,l=r.data,s=r.remove,u=(0,b.cI)(),c=u.register,d=u.handleSubmit,v=u.setValue,C=(i?null===l||void 0===l?void 0:l.data:null===l||void 0===l||null===(t=l.data)||void 0===t?void 0:t.time)||[],Z=(null===C||void 0===C?void 0:C.map((function(t){var e=t.date.split("-"),n=(0,f.Z)(e,2),i=n[0],r=n[1];return"".concat(i," ").concat(h[r])})))||[],j=(null===C||void 0===C?void 0:C.map((function(t){return t.time})))||[];return(0,o.useEffect)((function(){null!==l&&void 0!==l&&l.data&&v("minTime",l.data.minTime||0)}),[null===l||void 0===l?void 0:l.data]),(0,o.useEffect)((function(){return function(){return s()}}),[]),{register:c,handleSubmit:d,isLoading:a||a,title:i?"total":null===l||void 0===l||null===(e=l.data)||void 0===e?void 0:e.name,labels:["0","0"].concat((0,m.Z)(Z),["0","0"]),values:[0,0].concat((0,m.Z)(j),[0,0])}}(),e=t.labels,n=t.values,l=t.title,s=t.isLoading,c=t.register,N=t.handleSubmit;return s?(0,u.jsx)(v.Z,{}):(0,u.jsxs)("div",{className:x,children:[(0,u.jsxs)("div",{className:Z,children:["Time details for",(0,u.jsx)("div",{className:j,children:l})]}),(0,u.jsx)("div",{className:C,children:(0,u.jsx)(d,{title:"chart",bgColor:"#ff4d4d",labels:e,values:n,gradient:["#29901e","#77c91a"]})}),(0,u.jsx)("div",{className:L,children:(0,u.jsxs)("form",{onSubmit:N((function(t){return console.log(t)})),children:[(0,u.jsx)(a.Z,(0,i.Z)((0,i.Z)({},c("minTime")),{},{containerStyles:k,label:"Minimum time"})),(0,u.jsx)(r.Z,{type:"submit",styles:S,children:"Save"})]})})]})}},1688:function(t,e,n){n.d(e,{C:function(){return o}});var i=n(5671),r=n(3144),a=n(8684),o=new(function(){function t(){(0,i.Z)(this,t)}return(0,r.Z)(t,[{key:"addTime",value:function(t){var e=t._id,n=t.time,i=t.date;return a.Z.post("time/add-time",{_id:e,time:n,date:i}).then((function(t){return t}))}},{key:"getTimeList",value:function(){return a.Z.get("time/time-list").then((function(t){return t}))}},{key:"getTime",value:function(t){return a.Z.get("time/".concat(t)).then((function(t){return t}))}},{key:"getTotal",value:function(){return a.Z.get("time/total").then((function(t){return t}))}}]),t}())}}]);
//# sourceMappingURL=418.8c289f1a.chunk.js.map