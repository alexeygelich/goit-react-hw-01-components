(this["webpackJsonpgoit-react-hw-01-components_"]=this["webpackJsonpgoit-react-hw-01-components_"]||[]).push([[0],[,,,function(e,t,a){e.exports={profile:"Profile_profile__3dzvr",avatar:"Profile_avatar__aV4u5",description:"Profile_description__2GJPq",name:"Profile_name__2Psdw",tag:"Profile_tag__20iCl",location:"Profile_location__3GRdm"}},function(e,t,a){e.exports={variables:'"./variables.module.css"',"color-green":"green","color-red":"red",item:"FriendItem_item__3CJJx",avatar:"FriendItem_avatar__1qNS3",status:"FriendItem_status__33LhG",green:"FriendItem_green__e8nfm FriendItem_status__33LhG",red:"FriendItem_red__3kAWB FriendItem_status__33LhG"}},function(e,t,a){e.exports={stats:"Stats_stats__nJkGb",label:"Stats_label__3UoQV",quantity:"Stats_quantity__U0OKZ"}},function(e,t,a){e.exports={item:"StatsticItem_item__2tcpB",label:"StatsticItem_label__2A41F"}},function(e,t,a){e.exports={statistics:"Statistics_statistics__2QFok",title:"Statistics_title__3PVIg","stat-list":"Statistics_stat-list__3DM9T"}},,,function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://archilab.online/images/1/123.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://www.flaticon.com/svg/static/icons/svg/763/763704.svg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998671.svg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1623/1623681.svg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/2977/2977285.svg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://www.flaticon.com/svg/static/icons/svg/1998/1998749.svg","name":"Poly","isOnline":false,"id":1284}]')},function(e,t,a){e.exports={friendsList:"FriendList_friendsList__2hxSa"}},function(e,t,a){e.exports={transactionHistory:"TransactionHistory_transactionHistory__1k0Uk"}},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),i=a(9),r=a.n(i),d=(a(21),a(5)),o=a.n(d),l=a(2),b=a.n(l),u=function(e){var t=e.arr;return Object(c.jsx)("ul",{className:o.a.stats,children:Object.keys(t).map((function(e){return Object(c.jsxs)("li",{children:[Object(c.jsxs)("span",{className:o.a.label,children:[e," "]}),Object(c.jsx)("span",{className:o.a.quantity,children:t[e]})]},e)}))})},m=u;u.prototypes={arr:b.a.object.isRequired,el:b.a.arrayOf(b.a.string).isRequired};var p=a(3),j=a.n(p),f=function(e){var t=e.user;return Object(c.jsxs)("div",{className:j.a.profile,children:[Object(c.jsxs)("div",{className:j.a.description,children:[Object(c.jsx)("img",{src:t.avatar,alt:"user avatar",className:j.a.avatar}),Object(c.jsx)("p",{className:j.a.name,children:t.name}),Object(c.jsxs)("p",{className:j.a.tag,children:["@",t.tag]}),Object(c.jsx)("p",{className:j.a.location,children:t.location})]}),Object(c.jsx)(m,{arr:t.stats})]})},_=f;f.prototypes={user:b.a.shape({avatar:b.a.string.isRequired,name:b.a.string.isRequired,tag:b.a.string.isRequired,location:b.a.string.isRequired,stats:b.a.object.isRequired})};a(24);var h=a(10),y=a(6),O=a.n(y),x=function(e){var t=e.arr,a=255*Math.random(),n=255*Math.random(),s=255*Math.random(),i="rgb(".concat(a," ").concat(n," ").concat(s,")");return Object(c.jsxs)("li",{className:O.a.item,style:{backgroundColor:i},children:[Object(c.jsxs)("span",{className:O.a.label,children:[t.label," "]}),Object(c.jsxs)("span",{className:O.a.percentage,children:[t.percentage,"%"]})]})},v=a(7),g=a.n(v),w=function(e){var t=e.title,a=e.stats;return Object(c.jsxs)("section",{className:g.a.statistics,children:[t&&Object(c.jsx)("h2",{className:g.a.title,children:t}),Object(c.jsx)("ul",{className:g.a["stat-list"],children:a.map((function(e){return Object(c.jsx)(x,{arr:e},e.id)}))})]})},N=a(11),S=a(12),P=a(4),q=a.n(P),J=function(e){var t=e.arr;return Object(c.jsxs)("li",{className:q.a.item,children:[Object(c.jsx)("span",{className:t.isOnline?q.a.green:q.a.red,children:t.isOnline}),Object(c.jsx)("img",{className:q.a.avatar,src:t.avatar,alt:"",width:"48"}),Object(c.jsx)("p",{className:q.a.name,children:t.name})]})},L=a(13),U=a.n(L),k=function(e){var t=e.friends;return Object(c.jsx)("ul",{className:U.a.friendsList,children:t.map((function(e){return Object(c.jsx)(J,{arr:e},e.id)}))})},F=(a(25),function(e){var t=e.item;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.type}),Object(c.jsx)("td",{children:t.amount}),Object(c.jsx)("td",{children:t.currency})]})}),G=a(14),I=a.n(G),R=function(e){var t=e.items;return Object(c.jsxs)("table",{className:I.a.transactionHistory,children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Type"}),Object(c.jsx)("th",{children:"Amount"}),Object(c.jsx)("th",{children:"Currency"})]})}),Object(c.jsx)("tbody",{children:t.map((function(e){return Object(c.jsx)(F,{item:e},e.id)}))})]})},A=a(15);var M=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(_,{user:h}),Object(c.jsx)(w,{title:"UPLOAD STATS",stats:N}),Object(c.jsx)(k,{friends:S}),Object(c.jsx)(R,{items:A})]})};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(M,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.9129e682.chunk.js.map