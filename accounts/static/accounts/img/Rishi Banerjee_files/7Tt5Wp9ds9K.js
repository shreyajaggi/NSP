if (self.CavalryLogger) { CavalryLogger.start_js(["M80b+"]); }

__d("UFINativeSupportButton.react",["cx","fbt","Arbiter","BootloadedComponent.react","Bootloader","FocusRelocator.react","JSResource","LayerTabIsolation","Link.react","React","SubscriptionsHandler","VideoTipJarTypedLogger","XUIContextualDialog.react","XUISpinner.react","gkx"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=320;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={flyoutShown:!1,renderFlyout:null,showNux:!1},this.$7=function(a){this.$3=a}.bind(this),this.$9=function(){this.$1=this.state.flyoutShown}.bind(this),this.$6=function(){this.setState({flyoutShown:!1})}.bind(this),this.$12=function(){b("Bootloader").loadModules(["SimpleNUXMessage","SimpleNUXMessageTypes"],function(a,b){a.markMessageSeenByUser(b.GAMES_NATIVE_SUPPORT_GLYPH)},"UFINativeSupportButton.react"),this.setState({showNux:!1})}.bind(this),this.$8=function(){__p&&__p();this.state.showNux&&this.$12();new(b("VideoTipJarTypedLogger"))().setEvent("native_support_glyph_clicked").setVideoID(this.props.videoID).log();if(this.state.renderFlyout!==null){this.$1||(this.props.onSupportFlyoutShow&&this.props.onSupportFlyoutShow(),this.setState({flyoutShown:!0}));return}this.setState(function(a){return{flyoutShown:!0}});var a=b("Bootloader").loadModules(["NativeSupportFlyout.react"],function(a){this.setState({renderFlyout:function(){return b("React").createElement(a,{onExit:this.$6,shown:this.state.flyoutShown,showNux:!1,targetID:this.props.targetID,targetName:this.props.targetName,videoID:this.props.videoID})}.bind(this)}),this.props.onSupportFlyoutShow&&this.props.onSupportFlyoutShow()}.bind(this),"UFINativeSupportButton.react");this.$4.addSubscriptions(a)}.bind(this),c}a.prototype.componentDidMount=function(){b("gkx")("AT6iaOrHqkMioS1KjvrDPoSqce9X8MXugDoCUJ9PMSefYQy4FE8MdAZqs30Me6ITTRqG5OMaJ9dmmdtgHi0hiyaq")&&b("Bootloader").loadModules(["SimpleNUXMessage","SimpleNUXMessageTypes"],function(a,b){a=a.hasUserSeenMessage(b.GAMES_NATIVE_SUPPORT_GLYPH);this.setState({showNux:!a})}.bind(this),"UFINativeSupportButton.react"),this.$4=new(b("SubscriptionsHandler"))(),this.$5=b("Arbiter").subscribe("page_transition",function(){return this.$6()}.bind(this))};a.prototype.componentWillUnmount=function(){this.$5&&this.$5.unsubscribe(),this.$4&&this.$4.release(),delete this.$4};a.prototype.render=function(){var a=h._("Send stars to {target_name}",[h._param("target_name",this.props.targetName)]);return b("React").createElement(b("FocusRelocator.react"),{from:this.$3,to:this.refs.icon},b("React").createElement(b("Link.react"),{"aria-label":a,className:"_r1a _1sj_ UFICommentSupportButton","data-hover":"tooltip","data-tooltip-alignh":"center","data-tooltip-content":a,linkRef:this.$7,onClick:this.$8,onMouseDown:this.$9,role:"button"},b("React").createElement("div",{ref:function(a){return this.$2=a}.bind(this),className:"_2wdv"}),this.$10(),this.$11()))};a.prototype.$10=function(){return!this.state.showNux||!b("gkx")("AT6iaOrHqkMioS1KjvrDPoSqce9X8MXugDoCUJ9PMSefYQy4FE8MdAZqs30Me6ITTRqG5OMaJ9dmmdtgHi0hiyaq")?null:b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("XUIAmbientNUX.react").__setRef("UFINativeSupportButton.react"),bootloadPlaceholder:b("React").createElement("div",null),contextRef:function(){return this.$2}.bind(this),shown:this.state.showNux,position:"above",alignment:"right",onCloseButtonClick:this.$12},h._("New! Support your favorite streamers with Stars."))};a.prototype.$11=function(){return b("React").createElement(b("XUIContextualDialog.react"),{alignment:"right",behaviors:{LayerTabIsolation:b("LayerTabIsolation")},className:"_3v1n",contextRef:function(){return this.$3}.bind(this),label:h._("Send Stars"),onBlur:this.$6,onToggle:function(a){!a&&this.state.flyoutShown&&this.$6()}.bind(this),position:"above",shown:this.state.flyoutShown,hasActionableContext:!0,width:j},this.state.renderFlyout==null||!this.state.flyoutShown?b("React").createElement("div",{className:"_xte"},b("React").createElement(b("XUISpinner.react"),{size:"large"})):this.state.renderFlyout())};e.exports=a}),null);
__d("GamerGraphUserActionsTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:GamerGraphUserActionsLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:GamerGraphUserActionsLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:GamerGraphUserActionsLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setContainerGameIds=function(a){this.$1.container_game_ids=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setContainerID=function(a){this.$1.container_id=a;return this};a.prototype.setCount=function(a){this.$1.count=a;return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setGameID=function(a){this.$1.game_id=a;return this};a.prototype.setMaxTime=function(a){this.$1.max_time=a;return this};a.prototype.setMinInterval=function(a){this.$1.min_interval=a;return this};a.prototype.setMinTime=function(a){this.$1.min_time=a;return this};a.prototype.setP50Time=function(a){this.$1.p50_time=a;return this};a.prototype.setSeconds=function(a){this.$1.seconds=a;return this};a.prototype.setStarTableValue=function(a){this.$1.star_table_value=a;return this};a.prototype.setTargetID=function(a){this.$1.target_id=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setVideoType=function(a){this.$1.video_type=a;return this};a.prototype.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};var g={container_game_ids:!0,container_id:!0,count:!0,event:!0,game_id:!0,max_time:!0,min_interval:!0,min_time:!0,p50_time:!0,seconds:!0,star_table_value:!0,target_id:!0,vc:!0,video_type:!0};e.exports=a}),null);
__d("VideoNotificationDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("ExplicitRegistrationReactDispatcher"))({strict:!0})}),null);
__d("VideoNotificationActions",["React","VideoNotificationDispatcher"],(function(a,b,c,d,e,f){"use strict";var g={SEND_NOTIFICATION:"SEND_NOTIFICATION",REMOVE_NOTIFICATION:"REMOVE_NOTIFICATION"};e.exports={VideoNotificationActionTypes:g,sendNotification:function(a,c){b("VideoNotificationDispatcher").dispatch({videoPlayerController:a,videoPlayerID:a.getVideoPlayerID(),type:g.SEND_NOTIFICATION,notificationElement:c})},removeNotification:function(a,c){b("VideoNotificationDispatcher").dispatch({videoPlayerID:a,type:g.REMOVE_NOTIFICATION,notificationIndex:c})}}}),null);
__d("VideoNotificationReduceStore",["FluxReduceStore","immutable","React","VideoNotificationActions","VideoNotificationDispatcher"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h,i=b("VideoNotificationActions").VideoNotificationActionTypes;g=babelHelpers.inherits(j,b("immutable").Record({components:b("immutable").Map(),notificationCount:0}));g&&g.prototype;function j(){g.apply(this,arguments)}h=babelHelpers.inherits(a,b("FluxReduceStore"));h&&h.prototype;a.prototype.getInitialState=function(){return new j()};a.prototype.$VideoNotificationReduceStore1=function(a,c){var d=a.components.get(c.videoPlayerID,b("immutable").OrderedMap()),e=a.notificationCount;e={notificationIndex:e,videoPlayerID:c.videoPlayerID,notif:b("React").cloneElement(c.notificationElement,{key:"notification_"+e})};d=d.set(a.notificationCount,e);e=a.components.set(c.videoPlayerID,d);return new j({components:e,notificationCount:a.notificationCount+1})};a.prototype.$VideoNotificationReduceStore2=function(a,b){var c=a.components.get(b.videoPlayerID);if(!c)return a;c=c.remove(b.notificationIndex);b=a.components.set(b.videoPlayerID,c);return new j({components:b,notificationCount:a.notificationCount})};a.prototype.reduce=function(a,b){switch(b.type){case i.SEND_NOTIFICATION:return this.$VideoNotificationReduceStore1(a,b);case i.REMOVE_NOTIFICATION:return this.$VideoNotificationReduceStore2(a,b);default:return a}};a.prototype.getCurrentNotification=function(a){var b=this.getState();b=b.components.get(a.getVideoPlayerID());return!b||b.isEmpty()?null:b.first()};function a(){h.apply(this,arguments)}a.__moduleID=e.id;e.exports=new a(b("VideoNotificationDispatcher"))}),null);
__d("VideoWithNotificationQueue.react",["cx","FluxContainer","FluxStore","React","VideoNotificationActions","VideoNotificationDispatcher","VideoNotificationReduceStore"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i,j=b("VideoNotificationActions").removeNotification;d=babelHelpers.inherits(a,b("React").PureComponent);h=d&&d.prototype;function a(a){h.constructor.call(this,a),this.state={currentNotification:null},b("VideoNotificationDispatcher").explicitlyRegisterStores([b("VideoNotificationReduceStore")])}a.getStores=function(){return[b("VideoNotificationReduceStore")]};a.calculateState=function(a,c){var d=b("VideoNotificationReduceStore").getCurrentNotification(c.videoController);if(!d)return{currentNotification:null};a=function(){j(d.videoPlayerID,d.notificationIndex)};return{currentNotification:b("React").cloneElement(d.notif,{onRemove:a,videoPlayerID:d.videoPlayerID})}};a.prototype.render=function(){return b("React").createElement("div",{className:"_jwg"},b("React").createElement("div",{className:"_jwh"},this.state.currentNotification))};var k=b("FluxContainer").create(a,{withProps:!0});i=babelHelpers.inherits(c,b("React").PureComponent);i&&i.prototype;c.prototype.render=function(){return b("React").createElement(k,this.props)};function c(){i.apply(this,arguments)}e.exports=c}),null);
__d("Video.react",["React","ReactDOM"],(function(a,b,c,d,e,f){__p&&__p();var g;c=b("React").PropTypes;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.componentDidMount=function(){"use strict";var a=b("ReactDOM").findDOMNode(this.refs.video);this.props.paused&&a&&a.pause&&a.pause()};a.prototype.UNSAFE_componentWillUpdate=function(a,c){"use strict";c=b("ReactDOM").findDOMNode(this.refs.video);a.playbackRate&&(c.playbackRate=a.playbackRate);a.paused!=this.props.paused&&c&&(a.paused&&c.pause?c.pause():c.play&&c.play())};a.prototype.render=function(){"use strict";return b("React").createElement("video",babelHelpers["extends"]({},this.props,{ref:"video"}))};function a(){"use strict";g.apply(this,arguments)}a.propTypes={autoPlay:c.bool,paused:c.bool,controls:c.bool,height:c.oneOfType([c.string,c.number]),loop:c.bool,muted:c.bool,onAbort:c.func,onCanPlay:c.func,onCanPlayThrough:c.func,onDurationChange:c.func,onEmptied:c.func,onEncrypted:c.func,onEnded:c.func,onError:c.func,onLoadedData:c.func,onLoadedMetadata:c.func,onLoadStart:c.func,onPause:c.func,onPlay:c.func,onPlaying:c.func,onProgress:c.func,onRateChange:c.func,onSeeked:c.func,onSeeking:c.func,onStalled:c.func,onSuspend:c.func,onTimeUpdate:c.func,onVolumeChange:c.func,onWaiting:c.func,playbackRate:c.number,poster:c.string,src:c.string.isRequired,width:c.oneOfType([c.string,c.number])};e.exports=a}),null);