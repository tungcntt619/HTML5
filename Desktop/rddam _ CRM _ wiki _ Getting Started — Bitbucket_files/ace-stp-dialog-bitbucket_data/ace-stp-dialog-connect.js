var ace=ace||{};ace.stp=ace.stp||{},ace.stp.Initializer=function(a){"use strict";var b=!1;a(function(){GAS_CONFIG.server="production",GAS_CONFIG.user=ace.stp.Helpers.getParameterByName("username"),ace.stp.Dialog.init({gasConfig:GAS_CONFIG}),ace.stp.Cache.getMessageFromCache().notify||ace.stp.Notification.sendMessageNotification(ace.stp.NotificationTypes.help),AP.require(["touch_point"],function(a){a.on("show",function(){b=ace.stp.Cache.getMessageFromCache().notify,ace.stp.Dialog.dialogOpened()}),a.on("hide",function(){b&&ace.stp.Notification.sendMessageNotification(ace.stp.NotificationTypes.dismissedMessage),ace.stp.Dialog.dialogClosed()})})})}($);var ace=ace||{};ace.stp=ace.stp||{},ace.stp.Notification=function(){"use strict";function a(a){var c=ace.stp.NotificationClasses[a],e=b(a);AP.require(["touch_point"],function(a){a.setIconClass(d+c),a.cacheIconClass(d+e)})}function b(a){return a===ace.stp.NotificationTypes.newMessage?ace.stp.NotificationClasses.message:a===ace.stp.NotificationTypes.dismissedMessage?ace.stp.NotificationClasses.help:ace.stp.NotificationClasses[a]}function c(a){}var d="aui-icon aui-icon-small ";return{sendFeatureMessageLoaded:c,sendMessageNotification:a}}(),this.ace=this.ace||{},this.ace.templates=this.ace.templates||{},this.ace.templates["default"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,b,c,d){var e,f=this.lambda,g=this.escapeExpression;return'<style>\n    #ace-stp-body .ace-stp-heading {\n        padding-left: 20px;\n    }\n\n    .ace-stp-heading {\n        font-size: 20px;\n        position: relative;\n        padding-top: 20px;\n        padding-bottom: 20px;\n        margin-top: 0px;\n    }\n\n    .ace-stp-message-minor {\n        border-top: 1px solid #CCC;\n        height: 56px;\n        width: 100%;\n        display: table;\n    }\n\n    .ace-stp-message-minor a {\n        display: table-cell;\n        vertical-align: middle;\n        padding-left: 20px;\n    }\n\n    #ace-stp-message-feature {\n        border-top: 1px solid #CCC;\n        height: 150px;\n        width:  610px;\n        padding: 20px 19px 20px 20px;\n        display: table;\n    }\n\n    #ace-stp-message-feature h1 {\n        display:inline-block;\n        font-weight:bold;\n        font-size: 16px;\n        margin-top: 0;\n        cursor: pointer;\n    }\n\n    #ace-stp-message-feature p {\n        width: 330px;\n        height: 90px;\n    }\n\n    #ace-stp-message-feature img {\n        float: right;\n        cursor: pointer;\n    }\n\n    .new-indicator {\n        position: relative;\n        top: -2px;\n        left: 10px;\n    }\n</style>\n\n<h1 class="ace-stp-heading">Learn</h1>\n<div id="ace-stp-message-feature">\n    <img data-ace-trigger-click="ace-stp-message-feature-link" id="ace-stp-message-feature-image" width="260px" height="150px" src="'+g(f(null!=(e=null!=a?a.feature:a)?e.img:e,a))+'" />\n    <h1 data-ace-trigger-click="ace-stp-message-feature-link">'+g(f(null!=(e=null!=a?a.feature:a)?e.heading:e,a))+'</h1>\n    <span data-ace-unread class="aui-lozenge aui-lozenge-current new-indicator">NEW</span>\n    <p>'+g(f(null!=(e=null!=a?a.feature:a)?e.message:e,a))+' </p>\n    <a id="ace-stp-message-feature-link" class="aui-button aui-button-primary" target="_blank" href="'+g(f(null!=(e=null!=a?a.feature:a)?e.link:e,a))+'" data-ace-click-event="ace.stp.click.major">\n        '+g(f(null!=(e=null!=a?a.feature:a)?e.button:e,a))+'\n    </a>\n</div>\n<div class="ace-stp-message-minor">\n    <a id="ace-stp-message-minor-1" target="_blank" href="'+g(f(null!=(e=null!=a?a.minor1:a)?e.link:e,a))+'" data-ace-click-event="ace.stp.click.minor">\n        '+g(f(null!=(e=null!=a?a.minor1:a)?e.message:e,a))+'\n    </a>\n</div>\n<div class="ace-stp-message-minor">\n    <a id="ace-stp-message-minor-2" target="_blank" href="'+g(f(null!=(e=null!=a?a.minor2:a)?e.link:e,a))+'" data-ace-click-event="ace.stp.click.minor">\n        '+g(f(null!=(e=null!=a?a.minor2:a)?e.message:e,a))+"\n    </a>\n</div>"},useData:!0});var ACE_STP_FEATURE_MSG_DIV_ID="ace-stp-message-feature",ACE_STP_FEATURE_MSG_LINK_ID="ace-stp-message-feature-link",ACE_STP_FEATURE_MSG_LINK_TARGET="ace-stp-link",ACE_STP_MINOR_MSG_LINK_1_ID="ace-stp-message-minor-1",ACE_STP_MINOR_MSG_LINK_2_ID="ace-stp-message-minor-2",ACE_STP_SEARCH_FORM_ID="ace-stp-search-form",BANNER_REGEX=/bannerid=(.*)&amp;campaignid/,CAMPAIGN_REGEX=/campaignid=(.*)&amp;zoneid/,ace=ace||{};ace.stp=ace.stp||{},ace.stp.Util=function(){"use strict";function a(){return ace.stp.Cookie.getCookieUrl(c,b)}var b=ACE_HOST+ACE_PATH+"?zoneid="+ACE_ZONE,c="ace.stp.dialog.jira.ace.url";return{getAceUrl:a}}();var ace=ace||{};ace.stp=ace.stp||{},ace.stp.Cache=function(){"use strict";function a(){e=new ace.stp.StorageManager.instance(f,g)}function b(){var a=JSON.parse(e.getItem(SM_KEY));return null===a&&(a={timestamp:null,html:null,beacon:null,notify:!1}),a}function c(a){e.setItem(SM_KEY,JSON.stringify(a))}function d(){e.removeItem(SM_KEY)}var e,f="com.atlassian",g="ace";return{init:a,getMessageFromCache:b,setMessageInCache:c,removeMessageFromCache:d}}();var ace=ace||{};ace.stp=ace.stp||{},ace.stp.Dialog=function(a){"use strict";function b(a){a||(a={poll:!1,gasConfig:{}}),ace.stp.GAS.init(a.gasConfig),ace.stp.Cache.init();var b=ace.stp.Cache.getMessageFromCache();l(b),b.notify&&ace.stp.Notification.sendMessageNotification(ace.stp.NotificationTypes.message);var c=(new Date).getTime();h(b,c)?i(b,c):n(b),a.poll&&g()}function c(){k(),f()}function d(){j(),r=0}function e(){r++}function f(){var b=null,c=ace.stp.Cache.getMessageFromCache();if(null!==c.html&&null!==c.beacon){b=c.beacon.replace(/(referer=).*(&amp;)/,"$1"+encodeURIComponent(document.URL)+"$2"),b=b.replace(/(cb=).*(')/,"$1"+Math.floor(99999999999*Math.random())+"$2");var d=a(b);a("#"+ACE_STP_FEATURE_MSG_DIV_ID).append(d)}c.notify===!0&&(c.notify=!1,ace.stp.Cache.setMessageInCache(c))}function g(){setInterval(function(){var a=ace.stp.Cache.getMessageFromCache(),b=(new Date).getTime();h(a,b)&&i(a,b)},q)}function h(a,b){return null===a.timestamp||b-a.timestamp>p}function i(b,c){a.ajax({url:ace.stp.Util.getAceUrl(),dataType:"jsonp",contentType:"application/json",success:function(a){b.timestamp=c;var d=ace.stp.MessageParser.parse(a);null!==d&&d.html!==b.html&&(b.html=d.html,b.beacon=d.beacon,b.notify=!0,l(b),ace.stp.Notification.sendMessageNotification(ace.stp.NotificationTypes.newMessage),m()),ace.stp.Cache.setMessageInCache(b),n(b)},error:function(a,b,c){console.log("ACE STP - Could not get banner from ACE: "+c)}})}function j(){ace.stp.GAS.fireEvent(ace.stp.AnalyticEventTypes.closeStp,{numClicks:r})}function k(){var a=ace.stp.Cache.getMessageFromCache(),b="none";a.notify&&(b="default"),ace.stp.GAS.fireEvent(ace.stp.AnalyticEventTypes.openStp,{notification:b})}function l(a){var b,c;a.beacon&&(b=CAMPAIGN_REGEX.exec(a.beacon)[1],c=BANNER_REGEX.exec(a.beacon)[1]),ace.stp.GAS.isEnabled()?ace.stp.GAS.setCampaignAndBannerIds(b,c):ace.stp.Analytics&&ace.stp.Analytics.setCampaignAndBannerIds(b,c)}function m(){ace.stp.GAS.isEnabled()?ace.stp.GAS.fireEvent(ace.stp.AnalyticEventTypes.delivery):ace.stp.Analytics&&ace.stp.Analytics.fireEvent(ace.stp.AnalyticEventTypes.delivery)}function n(b){var c=DEFAULT_MESSAGE;if(b.html&&b.beacon){var d=ace.stp.MessageParser.data(b.html);d&&(c.feature=d,ace.stp.Notification.sendFeatureMessageLoaded(b))}a("#ace-stp-body").html(ace.templates["default"](c)),ace.stp.Message.postProcess(b)}var o=36e5,p=24*o,q=o,r=0;return{init:b,dialogOpened:c,dialogClosed:d,increaseClickCount:e,sendAceImpression:f}}($);var ace=ace||{};ace.stp=ace.stp||{},ace.stp.Message=function(a){"use strict";function b(a){e(),d(),a.notify||c(),ace.stp.LookAndFeel&&ace.stp.LookAndFeel.processLookAndFeel()}function c(){a("[data-ace-unread]").each(function(){a(this).remove()})}function d(){a("[data-ace-trigger-click]").each(function(){var b=this.getAttribute("data-ace-trigger-click"),c=a("#"+b);0!==c.length&&a(this).on("click",function(){c[0].click()})})}function e(){a("[data-ace-click-event]").each(function(){var b=this.getAttribute("data-ace-click-event"),c=this.getAttribute("id");a(this).on("click",function(){ace.stp.GAS.isEnabled()?(ace.stp.Dialog.increaseClickCount(),ace.stp.GAS.fireEvent(b,{domId:c})):ace.stp.Analytics&&ace.stp.Analytics.fireEvent(b,{domId:c})})})}return{postProcess:b}}($);var ace=ace||{};ace.stp=ace.stp||{},ace.stp.MessageParser=function(a){"use strict";function b(b){if(void 0===b.html||null===b.html||""===b.html)return null;try{var c=d(b.html),g=c[1],h=a(c[0]),i=e(h);return f(i.link,i.messageLink),{html:i.message[0].outerHTML,beacon:g}}catch(j){return null}}function c(b){var c=a(b),d=c.find("img#ace-stp-message-feature-image");if(0===d.length)return null;var e=c.find("a#ace-stp-message-feature-link");if(0===e.length)return null;var f=c.find("h1");if(0===f.length)return null;var g=c.find("p");if(0===g.length)return null;var h=c.find("a#ace-stp-message-feature-link");return 0===h.length?null:{img:d.attr("src"),link:e.attr("href"),heading:f.text(),message:g.text(),button:h.text()}}function d(a){var b="<div id='beacon_",c=a.split(b);if(2!==c.length)throw"No beacon or message in response";return c[1]=b+c[1],c}function e(a){var b=a.filter('a[target="'+ACE_STP_FEATURE_MSG_LINK_TARGET+'"]');if(0===b.length)throw"No link in response";var c=a.filter("div#"+ACE_STP_FEATURE_MSG_DIV_ID);if(0===c.length)throw"No message in response";var d=a.find("a#"+ACE_STP_FEATURE_MSG_LINK_ID);if(0===d.length)throw"No message link in response";return{link:b,message:c,messageLink:d}}function f(a,b){var c=a.attr("href").replace(/_cb=[A-Za-z0-9]+_/,"");b.attr("href",c)}return{parse:b,data:c}}($);var ace=ace||{};ace.stp=ace.stp||{},ace.stp.GAS=function(){"use strict";function a(a){if(h(a)){var b=window["herment-gas-client"],c=b(e(a));c.start(),j=!0,k.properties=$.extend(k.properties,a.properties)}}function b(){return j}function c(a,b){k.properties.bannerId=b,k.properties.campaignId=a}function d(a,b){j&&i.push(g(a,b))}function e(a){var b={queue:i,server:a.server,user:a.user,product:a.product,subproduct:a.subproduct};a.version&&(b.version=a.version);var c=ace.stp.Cookie.readCookie("ace.stp.dialog.gas.scheme");c&&(b.analyticsscheme=c);var d=ace.stp.Cookie.readCookie("ace.stp.dialog.gas.server");d&&(b.analyticsserver=d);var e=ace.stp.Cookie.readCookie("ace.stp.dialog.gas.publishInterval");return e&&!isNaN(e)&&(b.publish_interval=+e),b}function f(){return(new Date).getTime()}function g(a,b){var c={};return c.name=a,c.serverTime=f(),c.properties=b,$.extend(!0,c,k)}function h(a){return a&&a.server&&a.user}var i=[],j=!1,k={properties:{zoneId:ACE_ZONE}};return{init:a,fireEvent:d,setCampaignAndBannerIds:c,isEnabled:b}}();var ace=ace||{};ace.stp=ace.stp||{},ace.stp.Guid=function(){"use strict";function a(){return Math.guid()}function b(){return Math.guid().replace(/-/g,"")}return{guid:a,guidNoDashes:b}}();var ace=ace||{};ace.stp=ace.stp||{},ace.stp.MessageTypes={stpInitialized:"stp initialized",analyticsEvent:"analytics event",dialogOpened:"dialog opened",dialogClosed:"dialog closed",messageNotification:"message notification",featureLoaded:"feature loaded",lookAndFeel:"look and feel",atlPathEstablished:"atlPathEstablished"},ace.stp.NotificationTypes={help:"help",message:"message",newMessage:"newMessage",dismissedMessage:"dismissedMessage"},ace.stp.NotificationClasses={help:"ace-stp-icon-help",message:"ace-stp-icon-message",newMessage:"ace-stp-icon-message-new",dismissedMessage:"ace-stp-icon-message-dismiss"},ace.stp.AnalyticEventTypes={majorClick:"ace.stp.click.major",minorClick:"ace.stp.click.minor",delivery:"ace.stp.delivery",search:"ace.stp.search",openStp:"ace.stp.open",openIcon:"ace.stp.open.icon",closeStp:"ace.stp.close"},ace.stp.AppTypes={JIRA:"JIRA",CONFLUENCE:"CONFLUENCE",HIPCHATOSX:"HIPCHATOSX",HIPCHATWEB:"HIPCHATWEB",BITBUCKET:"BITBUCKET"};var ace=ace||{};ace.stp=ace.stp||{},ace.stp.StorageManager=function(){"use strict";var a="#",b=/\d+#/,c=function(a,b){this.prefix=a,this.id=b,this.namespace=this.prefix+"."+this.id;try{this.localStorageSupported="localStorage"in window&&null!==window.localStorage}catch(c){}};return c.prototype={getPrefix:function(b){var c=1e3*(b||0);return c?+new Date+c+a:""},getItem:function(a){if(!this.localStorageSupported)return null;var c=localStorage.getItem(this.namespace+"."+a),d=b.exec(c);return d===!0&&(c=c.replace(d[0],""),+new Date>d[0].replace("#",""))?(localStorage.removeItem(this.namespace+"."+a),null):c},contains:function(a){return!!this.getItem(a)},setItem:function(a,b,c){this.localStorageSupported&&(b=this.getPrefix(c)+b,localStorage.setItem(this.namespace+"."+a,b))},removeItem:function(a){this.localStorageSupported&&localStorage.removeItem(this.namespace+"."+a)}},{instance:c}}();var ace=ace||{};ace.stp=ace.stp||{},ace.stp.Cookie=function(){"use strict";function a(a,c){var d=b(a);return null!==d?d:c}function b(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "===e.charAt(0);)e=e.substring(1,e.length);if(0===e.indexOf(b))return e.substring(b.length,e.length)}return null}function c(a,b,c,d){var e="";if(c){var f=new Date;f.setTime(f.getTime()+24*c*60*60*1e3),e="; expires="+f.toGMTString()}var g=a+"="+b+e+"; path=/;",h=window.location.hostname;if("localhost"!==h&&d===!0){var i=h.split(".");if(i.length>1){var j=i[i.length-1],k=i[i.length-2];(isNaN(j)||isNaN(k))&&(h="."+k+"."+j)}g+=" domain="+h+";"}document.cookie=g}return{getCookieUrl:a,readCookie:b,writeCookie:c}}();var ace=ace||{};ace.stp=ace.stp||{},ace.stp.Helpers=function(){"use strict";function a(a){if("complete"===document.readyState)a();else if(window.addEventListener)window.addEventListener("load",a,!1);else if(window.attachEvent)window.attachEvent("onload",a);else{var b=window.onload;window.onload=function(){b&&b(),a()}}}function b(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(location.search);return null===c?"":decodeURIComponent(c[1].replace(/\+/g," "))}function c(){return window.location.origin?window.location.origin:window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")}function d(a,b){return-1!==a.indexOf(b,a.length-b.length)}return{addLoadEvent:a,getParameterByName:b,getBaseUrl:c,endsWith:d}}();