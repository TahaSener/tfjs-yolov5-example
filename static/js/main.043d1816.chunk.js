(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{254:function(e,t,a){e.exports=a(255)},255:function(e,t,a){"use strict";a.r(t);var n=a(3),o=a(5),i=a(11),r=a(17),c=a(10),l=a(16),s=a(107),d=a.n(s),h=a(230),u=a.n(h),p=a(231),m=a.n(p),g=(a(262),a(301)),f=["elma","muz","portakal"],v=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,l=new Array(i),s=0;s<i;s++)l[s]=arguments[s];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={model:null,preview:"",predictions:[]},a.onDrop=function(e,t,n){a.setState({preview:e[0].preview||n[0]})},a.cropToCanvas=function(e,t,a){var n=e.naturalWidth,o=e.naturalHeight;a.clearRect(0,0,a.canvas.width,a.canvas.height),a.fillStyle="#000000",a.fillRect(0,0,t.width,t.height);var i=Math.min(t.width/e.naturalWidth,t.height/e.naturalHeight),r=Math.round(n*i),c=Math.round(o*i);a.drawImage(e,0,0,n,o,(t.width-r)/2,(t.height-c)/2,r,c)},a.onImageChange=function(e){var t=0,o=0,i=0,r=document.getElementById("canvas"),c=document.getElementById("dow");console.log(c);var l=r.getContext("2d");a.cropToCanvas(e.target,r,l);var s=a.state.model.inputs[0].shape.slice(1,3),d=Object(n.a)(s,2),h=d[0],u=d[1];console.log(h,u);var p=g.tidy(function(){return g.image.resizeBilinear(g.browser.fromPixels(r),[416,416]).div(255).expandDims(0)});a.state.model.executeAsync(p).then(function(e){var a="16px sans-serif";l.font=a,l.textBaseline="top";var s,d=Object(n.a)(e,4),h=d[0],u=d[1],p=d[2],m=d[3],v=h.dataSync(),w=u.dataSync(),y=p.dataSync(),b=m.dataSync()[0];for(g.dispose(e),s=0;s<b;++s){var j=v.slice(4*s,4*(s+1)),x=Object(n.a)(j,4),E=x[0],F=x[1],S=x[2],k=x[3];E*=r.width,S*=r.width,F*=r.height;var D=S-E,O=(k*=r.height)-F,z=f[y[s]],C=w[s].toFixed(2);if(console.log(C),C>.51){"portakal"==z&&t++,"muz"==z?i++:"elma"==z&&o++,c.innerHTML="Portakal: "+t+" Elma: "+o+" Muz: "+i,l.strokeStyle="#00FFFF",l.lineWidth=4,l.strokeRect(E,F,D,O),l.fillStyle="#00FFFF";var I=l.measureText(z+":"+C).width,M=parseInt(a,10);l.fillRect(E,F,I+4,M+4)}}for(s=0;s<b;++s){var B=v.slice(4*s,4*(s+1)),T=Object(n.a)(B,3),N=T[0],R=T[1];N*=r.width,R*=r.height;var H=f[y[s]],L=w[s].toFixed(2);L>.51&&(l.fillStyle="#000000",l.fillText(H+":"+L,N,R))}})},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.loadGraphModel("/web_model/model.json").then(function(t){e.setState({model:t})})}},{key:"render",value:function(){return d.a.createElement("div",{className:"Dropzone-page"},this.state.model?d.a.createElement(m.a,{className:"Dropzone",accept:"image/jpeg, image/png, .jpg, .jpeg, .png",multiple:!1,onDrop:this.onDrop},this.state.preview?d.a.createElement("img",{alt:"upload preview",onLoad:this.onImageChange,className:"Dropzone-img",src:this.state.preview}):"Choose or drop a file.",d.a.createElement("canvas",{id:"canvas",width:"640",height:"640"})):d.a.createElement("div",{className:"Dropzone"},"Loading model..."))}}]),t}(d.a.Component),w=document.getElementById("root");u.a.render(d.a.createElement(v,null),w)},262:function(e,t,a){},270:function(e,t){},271:function(e,t){},279:function(e,t){},289:function(e,t){},290:function(e,t){},291:function(e,t){},292:function(e,t){},300:function(e,t){}},[[254,2,1]]]);
//# sourceMappingURL=main.043d1816.chunk.js.map