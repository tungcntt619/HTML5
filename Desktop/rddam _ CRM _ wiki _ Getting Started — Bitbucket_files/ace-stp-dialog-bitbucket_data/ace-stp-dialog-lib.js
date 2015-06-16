!function(){var a,b;a=function(){var a={},b={};return a.getLocalStorage=function(){return window.localStorage},a.getSessionStorage=function(){return window.sessionStorage},a.getInternalStorage=function(){return b.getItem=function(a){return b[a]},b.setItem=function(a,c){b[a]=c},b.clear=function(){b={}},b},a.getStorage=function(){var b;try{var c=a.getLocalStorage();b="undefined"!=typeof c?c:a.getSessionStorage()}catch(d){}return"undefined"==typeof b&&(b=a.getInternalStorage()),b},a.isCORSRequest=function(a){var b=document.createElement("a");return b.href=a,b.host!==window.location.host},a.useXDomainRequest=function(b){return a.isCORSRequest(b)&&!!window.XDomainRequest&&(-1!==navigator.appVersion.indexOf("MSIE 8.")||-1!==navigator.appVersion.indexOf("MSIE 9."))},a.getCookieValue=function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return null},a}(),b=function(b){var c,d,e={},f="herment",g=100,h=5e3,i=1e3;return e.getAtlPath=function(){return a.getCookieValue("__atl_path")},e.getServerName=function(){var a;return"undefined"!=typeof document.location&&"undefined"!=typeof document.location.hostname&&(a=document.location.hostname),""===a&&(a="-"),a},e.getProductNameFromServerName=function(a){return"undefined"!=typeof a?a.replace(".com","").replace(".net","").replace(".org","").replace(".au","").replace(".io",""):"-"},e.getSubdomain=function(a){var b="-",c=a.match(/^([a-z0-9\.]*)[\-\.]{1}([a-z0-9]+)+\.([a-z]{2,6})$/i);if(c){var d=a.split(".");d=2===d[d.length-1].length?d.slice(0,d.length-3):d.slice(0,d.length-2),0!==d.length&&(b=d.join("."))}return b},e.generateRandomStorageKey=function(){var a=2,b=12,c=(Math.random()+"").slice(a,b),d=(Math.random()+"").slice(a,b);return c.concat(d)},e.ajaxPost=function(b,c){var d;if(a.useXDomainRequest(b))d=new window.XDomainRequest;else if(window.XMLHttpRequest)d=new XMLHttpRequest;else{if(!window.ActiveXObject)return;d=new window.ActiveXObject("Microsoft.XMLHTTP")}d.open("POST",b,!0),"undefined"!=typeof d.setRequestHeader&&(d.setRequestHeader("Content-Type","application/json"),d.setRequestHeader("Accept","application/json, text/javascript, */*;")),d.send(c)},e.parseConfig=function(a,b){var c,d,e,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x;if("undefined"==typeof a||"undefined"==typeof a.queue){var y=window.AJS=window.AJS||{};y.EventQueue=y.EventQueue||[],c=y.EventQueue}else c=a.queue;return d="undefined"==typeof a||"undefined"==typeof a.analyticsscheme?"https":a.analyticsscheme,e="undefined"==typeof a||"undefined"==typeof a.analyticsserver?"analytics.atlassian.com":a.analyticsserver,j="undefined"==typeof a||"undefined"==typeof a.analyticsurl?"/analytics/events":a.analyticsurl,k="undefined"==typeof a||"undefined"==typeof a.server?b.getServerName():a.server,l="undefined"==typeof a||"undefined"==typeof a.product?b.getProductNameFromServerName(k):a.product,"undefined"==typeof a||"undefined"==typeof a.subproduct?(m=b.getSubdomain(k),"undefined"==typeof m&&(m="-")):m=a.subproduct,n="undefined"==typeof a||"undefined"==typeof a.version?null:a.version,o="undefined"==typeof a||"undefined"==typeof a.session?null:a.session,p="undefined"==typeof a||"undefined"==typeof a.sen?null:a.sen,q="undefined"==typeof a||"undefined"==typeof a.sourceip?null:a.sourceip,r="undefined"==typeof a||"undefined"==typeof a.atlpath?b.getAtlPath():a.atlpath,s="undefined"==typeof a||"undefined"==typeof a.ajax?b.ajaxPost:a.ajax,t="undefined"==typeof a||"undefined"==typeof a.maxevents?g:a.maxevents,u="undefined"==typeof a||"undefined"==typeof a.storage_key?f+b.generateRandomStorageKey()+b.generateRandomStorageKey():a.storage_key,v="undefined"==typeof a||"undefined"==typeof a.user?"default":a.user,w="undefined"==typeof a||"undefined"==typeof a.publish_interval?h:a.publish_interval,x="undefined"==typeof a||"undefined"==typeof a.save_interval?i:a.save_interval,{queue:c,gasScheme:d,gasServer:e,gasUrl:j,serverName:k,productName:l,subProductName:m,version:n,session:o,sen:p,sourceIP:q,atlPath:r,post:s,maxevents:t,storage_key:u,user:v,publishInterval:w,saveInterval:x}},c=e.parseConfig(b,e),e.config=c,d=a.getStorage(),e.pushToServer=function(a,b){var d="undefined"!=typeof b?b:e.config.post,f=c.gasScheme+"://"+c.gasServer+c.gasUrl,g={events:a},h=JSON.stringify(g);d(f,h)},e.addEventsToArray=function(a,b,c){if("undefined"!=typeof c&&"undefined"!=typeof c.server&&"undefined"!=typeof c.product&&"undefined"!=typeof c.subproduct&&"undefined"!=typeof c.user)for(var d in a)if(a.hasOwnProperty(d)){var f=a[d];if(b.length>=e.config.maxevents)break;if(f.name&&f.properties){var g={name:f.name,properties:f.properties,serverTime:f.time||(new Date).getTime(),server:c.server,user:c.user,product:c.product,subproduct:c.subproduct,version:c.version,session:c.session,sen:c.sen,sourceIP:c.sourceIP,atlPath:c.atlPath};b.push(g)}}},e.publishFromQueueAndStorage=function(a){var b="undefined"!=typeof a?a:e.pushToServer,f=[];if(!(c.queue.length<1&&("undefined"==typeof d||d.length<1))){var g={server:c.serverName,user:c.user,product:c.productName,subproduct:c.subProductName,version:c.version,session:c.session,sen:c.sen,sourceIP:c.sourceIP,atlPath:c.atlPath};e.addEventsToArray(c.queue,f,g);var h=e.popEventsFromStorage();e.addEventsToArray(h,f,g),c.queue.length=0,f&&f.length&&b(f)}},e.serialiseEventsToString=function(a){return JSON.stringify(a)},e.deserialiseEvents=function(a){return JSON.parse(a)},e.storeEvents=function(a){if("undefined"!=typeof d){if(d[c.storage_key]){var b=e.deserialiseEvents(d[c.storage_key])||[];b.length<e.config.maxevents&&b.push.apply(b,a),a=b}try{d.setItem(c.storage_key,e.serialiseEventsToString(a))}catch(f){}}},e.popEventsFromStorage=function(){if("undefined"==typeof d)return[];if(d[c.storage_key]){var a=e.deserialiseEvents(d[c.storage_key]);return d[c.storage_key]=e.serialiseEventsToString([]),a}return[]},e.moveQueueToStorage=function(){0!==c.queue.length&&"undefined"!=typeof d&&(e.storeEvents(c.queue),c.queue.length=0)},e.start=function(){var a=Array.prototype.push;c.queue.push=function(b){b.time=(new Date).getTime(),a.call(c.queue,b)},e.publishFromQueueAndStorage(),setInterval(e.publishFromQueueAndStorage,c.publishInterval),setInterval(e.moveQueueToStorage,c.saveInterval)},"undefined"!=typeof window.addEventListener?window.addEventListener("unload",function(){e.moveQueueToStorage()}):window.attachEvent("onunload",function(){e.moveQueueToStorage()}),e},window["herment-gas-client"]=b,window.define&&window.define("herment",[],function(){return b})}();