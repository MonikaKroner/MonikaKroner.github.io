/*! Built with http://stenciljs.com */
App.loadBundle("q3beoss6",["exports","./chunk1.js"],function(t,e){var n=window.App.h,i=function(){function t(){this.unsubscribe=function(){},this.activeClass="link-active",this.exact=!1,this.custom="a",this.match=null}return t.prototype.computeMatch=function(t){return t||(t=this.activeRouter.get("location").pathname),e.matchPath(t,{path:this.urlMatch||this.url,exact:this.exact,strict:!0})},t.prototype.componentWillLoad=function(){var t=this;this.unsubscribe=this.activeRouter.subscribe(function(){t.match=t.computeMatch()}),this.match=this.computeMatch()},t.prototype.componentDidUnload=function(){this.unsubscribe()},t.prototype.handleClick=function(t){if(t.preventDefault(),this.activeRouter)return this.activeRouter.get("history").push(this.getUrl(this.url),{});console.warn('<stencil-route-link> wasn\'t passed an instance of the router as the "router" prop!')},t.prototype.getUrl=function(t){var e=this.activeRouter.get("root")||"/";return"/"==t.charAt(0)&&"/"==e.charAt(e.length-1)?e.slice(0,e.length-1)+t:e+t},t.prototype.render=function(){var t,e={class:(t={},t[this.activeClass]=null!==this.match,t),onClick:this.handleClick.bind(this)};return"a"===this.custom&&(e=Object.assign({},e,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex})),n(this.custom,Object.assign({},e),n("slot",null))},Object.defineProperty(t,"is",{get:function(){return"stencil-route-link"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{activeClass:{type:String,attr:"active-class"},activeRouter:{context:"activeRouter"},anchorRole:{type:String,attr:"anchor-role"},anchorTabIndex:{type:String,attr:"anchor-tab-index"},anchorTitle:{type:String,attr:"anchor-title"},custom:{type:String,attr:"custom"},exact:{type:Boolean,attr:"exact"},match:{state:!0},url:{type:String,attr:"url"},urlMatch:{type:"Any",attr:"url-match"}}},enumerable:!0,configurable:!0}),t}();t.StencilRouteLink=i,Object.defineProperty(t,"__esModule",{value:!0})});