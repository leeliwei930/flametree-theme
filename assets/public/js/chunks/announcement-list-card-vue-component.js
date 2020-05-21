(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{41:function(e,t,a){"use strict";var n=a(8);a.n(n).a},42:function(e,t,a){(e.exports=a(2)(!1)).push([e.i,".announcement-card-list {\n  transition: 0.25s all;\n}\n.announcement-card-list:hover .featured-image {\n  transform: scale(1.2);\n}\n.announcement-card-list .featured-image {\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  height: 100%;\n  min-height: 35vh;\n  transition: 0.25s all;\n}\n.announcement-card-list .featured-image[lazy=loaded] {\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.announcement-card-list .featured-image[lazy=loading] {\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.announcement-card-list .featured-image[lazy=error] {\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.announcement-card-list .featured-image .featured-image-bg-overlay {\n  position: absolute;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n}\n.announcement-card-list.hoverable:hover {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n}",""])},8:function(e,t,a){var n=a(42);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(3)(n,r);n.locals&&(e.exports=n.locals)},91:function(e,t,a){"use strict";a.r(t);var n={props:{title:{type:String},category:{type:String},description:{type:String},author:{type:String},authorRole:{type:String},authorAvatarImage:{type:String},publishedOn:{type:String},featuredImageUrl:{type:String,default:null},dataFeaturedImageUrl:{type:String,default:null},hoverable:{type:Boolean,default:!0}},data:function(){return{imgObj:{src:null,loading:null}}},methods:{},created:function(){this.imgObj.src=this.dataFeaturedImageUrl,this.imgObj.loading=this.featuredImageUrl},mounted:function(){},updated:function(){},computed:{featuredImageOverlayStyle:function(){return"background-image:linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.8));\n            background-size:cover;\n            background-repeat:no-repeat"}}},r=(a(41),a(0)),i=Object(r.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"announcement-card-list shadow-sm bg-white my-2 rounded d-flex flex-row flex-wrap mx-auto p-0",class:{hoverable:e.hoverable}},[a("div",{staticClass:"col-12 col-md-4 p-0 overflow-hidden"},[""!==e.imgObj.src?a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:e.imgObj,expression:"imgObj",arg:"background-image"}],staticClass:"featured-image rounded d-flex flex-column align-items-center justify-content-center"},[a("div",{staticClass:"featured-image-bg-overlay",style:e.featuredImageOverlayStyle})]):a("div",{staticClass:"featured-image rounded d-flex flex-column align-items-center justify-content-center"},[e._m(0)])]),a("div",{staticClass:"col-12 col-md-8 p-3"},[a("div",{staticClass:"d-flex flex-column justify-content-start"},[a("h5",{staticClass:"post-title small"},[e._v(e._s(e.title))]),a("p",{staticClass:"post-published-at small"},[e._v("Posted On "+e._s(e.publishedOn))]),a("div",{staticClass:"d-flex flex-row justify-content-start align-items-center"},[a("img",{staticClass:"rounded-circle mr-3",attrs:{src:e.authorAvatarImage}}),a("div",{staticClass:"d-flex flex-column"},[a("strong",{staticClass:"post-author"},[e._v(e._s(e.author))]),a("small",[e._v(e._s(e.authorRole))])])]),a("p",{staticClass:"post-description"},[e._v(e._s(e.description))]),e._t("default")],2)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"d-flex flex-column align-items-center justify-content-center"},[t("i",{staticClass:"fas fa-image fa-3x text-muted my-3"}),t("p",{staticClass:"text-light-dark"},[this._v("Featured image is not available")])])}],!1,null,null,null);t.default=i.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvYW5ub3VuY2VtZW50cy9Bbm5vdW5jZW1lbnRMaXN0Q2FyZC52dWU/MzViNSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvYW5ub3VuY2VtZW50cy9Bbm5vdW5jZW1lbnRMaXN0Q2FyZC52dWU/NTE4OCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvYW5ub3VuY2VtZW50cy9Bbm5vdW5jZW1lbnRMaXN0Q2FyZC52dWU/OWM1ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvYW5ub3VuY2VtZW50cy9Bbm5vdW5jZW1lbnRMaXN0Q2FyZC52dWU/NTlkYSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvYW5ub3VuY2VtZW50cy9Bbm5vdW5jZW1lbnRMaXN0Q2FyZC52dWU/ZjUxYyIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL2Fubm91bmNlbWVudHMvQW5ub3VuY2VtZW50TGlzdENhcmQudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy92dWUvY29tcG9uZW50cy9hbm5vdW5jZW1lbnRzL0Fubm91bmNlbWVudExpc3RDYXJkLnZ1ZSJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicHVzaCIsImkiLCJjb250ZW50Iiwib3B0aW9ucyIsInRyYW5zZm9ybSIsInVuZGVmaW5lZCIsImxvY2FscyIsImNvbXBvbmVudCIsIl92bSIsInRoaXMiLCJfaCIsIiRjcmVhdGVFbGVtZW50IiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwiY2xhc3MiLCJob3ZlcmFibGUiLCJpbWdPYmoiLCJzcmMiLCJkaXJlY3RpdmVzIiwibmFtZSIsInJhd05hbWUiLCJ2YWx1ZSIsImV4cHJlc3Npb24iLCJhcmciLCJzdHlsZSIsIl9tIiwiX3YiLCJfcyIsInRpdGxlIiwicHVibGlzaGVkT24iLCJhdHRycyIsImF1dGhvckF2YXRhckltYWdlIiwiYXV0aG9yIiwiYXV0aG9yUm9sZSIsImRlc2NyaXB0aW9uIiwiX3QiXSwibWFwcGluZ3MiOiJ5RkFBQSxrQkFBb2QsRyxvQkNBMWNBLEVBQU9DLFFBQVUsRUFBUSxFQUFSLEVBQWtFLElBS3JGQyxLQUFLLENBQUNGLEVBQU9HLEVBQUksKzRCQUFnNUIsTSxrQkNKejZCLElBQUlDLEVBQVUsRUFBUSxJQUVBLGlCQUFaQSxJQUFzQkEsRUFBVSxDQUFDLENBQUNKLEVBQU9HLEVBQUlDLEVBQVMsTUFPaEUsSUFBSUMsRUFBVSxDQUFDLEtBQU0sRUFFckIsZUFQSUMsRUFRSixnQkFBcUJDLEdBRVIsRUFBUSxFQUFSLENBQXNFSCxFQUFTQyxHQUV6RkQsRUFBUUksU0FBUVIsRUFBT0MsUUFBVUcsRUFBUUksUyx1Q0NqQjVDLElDQWdPLEVDNEVoTyxDQUNFLE1BQUYsQ0FDSSxNQUFKLENBQ00sS0FBTixRQUVJLFNBQUosQ0FDTSxLQUFOLFFBRUksWUFBSixDQUNNLEtBQU4sUUFFSSxPQUFKLENBQ00sS0FBTixRQUVJLFdBQUosQ0FDTSxLQUFOLFFBRUksa0JBQUosQ0FDTSxLQUFOLFFBRUksWUFBSixDQUNNLEtBQU4sUUFFSSxpQkFBSixDQUNNLEtBQU4sT0FDTSxRQUFOLE1BRUkscUJBQUosQ0FDTSxLQUFOLE9BQ00sUUFBTixNQUVJLFVBQUosQ0FDTSxLQUFOLFFBQ00sU0FBTixJQUdFLEtBQUYsV0FDSSxNQUFKLENBQ00sT0FBTixDQUNRLElBQVIsS0FDUSxRQUFSLFFBSUUsUUFBRixHQUdFLFFBQUYsV0FDSSxLQUFKLHFDQUNJLEtBQUosc0NBRUUsUUFBRixhQUdFLFFBQUYsYUFHRSxTQUFGLENBQ0ksMEJBQUosV0FFTSxNQUFOLHdLLGVDaElJQyxFQUFZLFlBQ2QsRUhUVyxXQUFhLElBQUlDLEVBQUlDLEtBQVNDLEVBQUdGLEVBQUlHLGVBQW1CQyxFQUFHSixFQUFJSyxNQUFNRCxJQUFJRixFQUFHLE9BQU9FLEVBQUcsTUFBTSxDQUFDRSxZQUFZLCtGQUErRkMsTUFBTSxDQUFDLFVBQWNQLEVBQUlRLFlBQWEsQ0FBQ0osRUFBRyxNQUFNLENBQUNFLFlBQVksdUNBQXVDLENBQXFCLEtBQW5CTixFQUFJUyxPQUFPQyxJQUFhTixFQUFHLE1BQU0sQ0FBQ08sV0FBVyxDQUFDLENBQUNDLEtBQUssT0FBT0MsUUFBUSwwQkFBMEJDLE1BQU9kLEVBQVUsT0FBRWUsV0FBVyxTQUFTQyxJQUFJLHFCQUFxQlYsWUFBWSx1RkFBdUYsQ0FBQ0YsRUFBRyxNQUFNLENBQUNFLFlBQVksNEJBQTRCVyxNQUFPakIsRUFBNkIsOEJBQU1JLEVBQUcsTUFBTSxDQUFDRSxZQUFZLHVGQUF1RixDQUFDTixFQUFJa0IsR0FBRyxPQUFPZCxFQUFHLE1BQU0sQ0FBQ0UsWUFBWSx1QkFBdUIsQ0FBQ0YsRUFBRyxNQUFNLENBQUNFLFlBQVksNENBQTRDLENBQUNGLEVBQUcsS0FBSyxDQUFDRSxZQUFZLG9CQUFvQixDQUFDTixFQUFJbUIsR0FBR25CLEVBQUlvQixHQUFHcEIsRUFBSXFCLFVBQVVqQixFQUFHLElBQUksQ0FBQ0UsWUFBWSwyQkFBMkIsQ0FBQ04sRUFBSW1CLEdBQUcsYUFBYW5CLEVBQUlvQixHQUFHcEIsRUFBSXNCLGdCQUFnQmxCLEVBQUcsTUFBTSxDQUFDRSxZQUFZLDREQUE0RCxDQUFDRixFQUFHLE1BQU0sQ0FBQ0UsWUFBWSxzQkFBc0JpQixNQUFNLENBQUMsSUFBTXZCLEVBQUl3QixxQkFBcUJwQixFQUFHLE1BQU0sQ0FBQ0UsWUFBWSxzQkFBc0IsQ0FBQ0YsRUFBRyxTQUFTLENBQUNFLFlBQVksZUFBZSxDQUFDTixFQUFJbUIsR0FBR25CLEVBQUlvQixHQUFHcEIsRUFBSXlCLFdBQVdyQixFQUFHLFFBQVEsQ0FBQ0osRUFBSW1CLEdBQUduQixFQUFJb0IsR0FBR3BCLEVBQUkwQixtQkFBbUJ0QixFQUFHLElBQUksQ0FBQ0UsWUFBWSxvQkFBb0IsQ0FBQ04sRUFBSW1CLEdBQUduQixFQUFJb0IsR0FBR3BCLEVBQUkyQixnQkFBZ0IzQixFQUFJNEIsR0FBRyxZQUFZLFFBQzM3QyxDQUFDLFdBQWEsSUFBaUIxQixFQUFURCxLQUFnQkUsZUFBbUJDLEVBQW5DSCxLQUEwQ0ksTUFBTUQsSUFBSUYsRUFBRyxPQUFPRSxFQUFHLE1BQU0sQ0FBQ0UsWUFBWSxnRUFBZ0UsQ0FBQ0YsRUFBRyxJQUFJLENBQUNFLFlBQVksdUNBQXVDRixFQUFHLElBQUksQ0FBQ0UsWUFBWSxtQkFBbUIsQ0FBdlBMLEtBQTRQa0IsR0FBRywwQ0dXelMsRUFDQSxLQUNBLEtBQ0EsTUFJYSxVQUFBcEIsRSIsImZpbGUiOiJhc3NldHMvcHVibGljL2pzL2NodW5rcy9hbm5vdW5jZW1lbnQtbGlzdC1jYXJkLXZ1ZS1jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Bbm5vdW5jZW1lbnRMaXN0Q2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fubm91bmNlbWVudExpc3RDYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFubm91bmNlbWVudC1jYXJkLWxpc3Qge1xcbiAgdHJhbnNpdGlvbjogMC4yNXMgYWxsO1xcbn1cXG4uYW5ub3VuY2VtZW50LWNhcmQtbGlzdDpob3ZlciAuZmVhdHVyZWQtaW1hZ2Uge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG4uYW5ub3VuY2VtZW50LWNhcmQtbGlzdCAuZmVhdHVyZWQtaW1hZ2Uge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAzNXZoO1xcbiAgdHJhbnNpdGlvbjogMC4yNXMgYWxsO1xcbn1cXG4uYW5ub3VuY2VtZW50LWNhcmQtbGlzdCAuZmVhdHVyZWQtaW1hZ2VbbGF6eT1sb2FkZWRdIHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uYW5ub3VuY2VtZW50LWNhcmQtbGlzdCAuZmVhdHVyZWQtaW1hZ2VbbGF6eT1sb2FkaW5nXSB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuLmFubm91bmNlbWVudC1jYXJkLWxpc3QgLmZlYXR1cmVkLWltYWdlW2xhenk9ZXJyb3JdIHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uYW5ub3VuY2VtZW50LWNhcmQtbGlzdCAuZmVhdHVyZWQtaW1hZ2UgLmZlYXR1cmVkLWltYWdlLWJnLW92ZXJsYXkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uYW5ub3VuY2VtZW50LWNhcmQtbGlzdC5ob3ZlcmFibGU6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAxcmVtIDNyZW0gcmdiYSgwLCAwLCAwLCAwLjE3NSkgIWltcG9ydGFudDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQW5ub3VuY2VtZW50TGlzdENhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Bbm5vdW5jZW1lbnRMaXN0Q2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Bbm5vdW5jZW1lbnRMaXN0Q2FyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiYW5ub3VuY2VtZW50LWNhcmQtbGlzdCBzaGFkb3ctc20gYmctd2hpdGUgbXktMiByb3VuZGVkIGQtZmxleCBmbGV4LXJvdyBmbGV4LXdyYXAgbXgtYXV0byBwLTBcIixjbGFzczp7J2hvdmVyYWJsZScgOiBfdm0uaG92ZXJhYmxlIH19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb2wtMTIgY29sLW1kLTQgcC0wIG92ZXJmbG93LWhpZGRlblwifSxbKF92bS5pbWdPYmouc3JjICE9PSAnJyApP19jKCdkaXYnLHtkaXJlY3RpdmVzOlt7bmFtZTpcImxhenlcIixyYXdOYW1lOlwidi1sYXp5OmJhY2tncm91bmQtaW1hZ2VcIix2YWx1ZTooX3ZtLmltZ09iaiksZXhwcmVzc2lvbjpcImltZ09ialwiLGFyZzpcImJhY2tncm91bmQtaW1hZ2VcIn1dLHN0YXRpY0NsYXNzOlwiZmVhdHVyZWQtaW1hZ2Ugcm91bmRlZCBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImZlYXR1cmVkLWltYWdlLWJnLW92ZXJsYXlcIixzdHlsZTooX3ZtLmZlYXR1cmVkSW1hZ2VPdmVybGF5U3R5bGUpfSldKTpfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJmZWF0dXJlZC1pbWFnZSByb3VuZGVkIGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwifSxbX3ZtLl9tKDApXSldKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb2wtMTIgY29sLW1kLTggcC0zXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LXN0YXJ0XCJ9LFtfYygnaDUnLHtzdGF0aWNDbGFzczpcInBvc3QtdGl0bGUgc21hbGxcIn0sW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSxfYygncCcse3N0YXRpY0NsYXNzOlwicG9zdC1wdWJsaXNoZWQtYXQgc21hbGxcIn0sW192bS5fdihcIlBvc3RlZCBPbiBcIitfdm0uX3MoX3ZtLnB1Ymxpc2hlZE9uKSldKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LXN0YXJ0IGFsaWduLWl0ZW1zLWNlbnRlclwifSxbX2MoJ2ltZycse3N0YXRpY0NsYXNzOlwicm91bmRlZC1jaXJjbGUgbXItM1wiLGF0dHJzOntcInNyY1wiOl92bS5hdXRob3JBdmF0YXJJbWFnZX19KSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJkLWZsZXggZmxleC1jb2x1bW5cIn0sW19jKCdzdHJvbmcnLHtzdGF0aWNDbGFzczpcInBvc3QtYXV0aG9yXCJ9LFtfdm0uX3YoX3ZtLl9zKF92bS5hdXRob3IpKV0pLF9jKCdzbWFsbCcsW192bS5fdihfdm0uX3MoX3ZtLmF1dGhvclJvbGUpKV0pXSldKSxfYygncCcse3N0YXRpY0NsYXNzOlwicG9zdC1kZXNjcmlwdGlvblwifSxbX3ZtLl92KF92bS5fcyhfdm0uZGVzY3JpcHRpb24pKV0pLF92bS5fdChcImRlZmF1bHRcIildLDIpXSldKX1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIn0sW19jKCdpJyx7c3RhdGljQ2xhc3M6XCJmYXMgZmEtaW1hZ2UgZmEtM3ggdGV4dC1tdXRlZCBteS0zXCJ9KSxfYygncCcse3N0YXRpY0NsYXNzOlwidGV4dC1saWdodC1kYXJrXCJ9LFtfdm0uX3YoXCJGZWF0dXJlZCBpbWFnZSBpcyBub3QgYXZhaWxhYmxlXCIpXSldKX1dXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Fubm91bmNlbWVudExpc3RDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Bbm5vdW5jZW1lbnRMaXN0Q2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGUgbGFuZz1cInB1Z1wiPlxuICAgIC5hbm5vdW5jZW1lbnQtY2FyZC1saXN0LnNoYWRvdy1zbS5iZy13aGl0ZS5teS0yLnJvdW5kZWQuZC1mbGV4LmZsZXgtcm93LmZsZXgtd3JhcC5teC1hdXRvLnAtMChcbiAgICAgICAgOmNsYXNzPVwieydob3ZlcmFibGUnIDogaG92ZXJhYmxlIH1cIlxuICAgIClcbiAgICAgICAgLmNvbC0xMi5jb2wtbWQtNC5wLTAub3ZlcmZsb3ctaGlkZGVuXG4gICAgICAgICAgICAuZmVhdHVyZWQtaW1hZ2Uucm91bmRlZC5kLWZsZXguZmxleC1jb2x1bW4uYWxpZ24taXRlbXMtY2VudGVyLmp1c3RpZnktY29udGVudC1jZW50ZXIoIHYtbGF6eTpiYWNrZ3JvdW5kLWltYWdlPVwiaW1nT2JqXCIgdi1pZj1cImltZ09iai5zcmMgIT09ICcnIFwiKVxuICAgICAgICAgICAgICAgIC5mZWF0dXJlZC1pbWFnZS1iZy1vdmVybGF5KDpzdHlsZT1cImZlYXR1cmVkSW1hZ2VPdmVybGF5U3R5bGVcIilcbiAgICAgICAgICAgIC5mZWF0dXJlZC1pbWFnZS5yb3VuZGVkLmQtZmxleC5mbGV4LWNvbHVtbi5hbGlnbi1pdGVtcy1jZW50ZXIuanVzdGlmeS1jb250ZW50LWNlbnRlcih2LWVsc2UpXG4gICAgICAgICAgICAgICAgLmQtZmxleC5mbGV4LWNvbHVtbi5hbGlnbi1pdGVtcy1jZW50ZXIuanVzdGlmeS1jb250ZW50LWNlbnRlclxuICAgICAgICAgICAgICAgICAgICBpLmZhcy5mYS1pbWFnZS5mYS0zeC50ZXh0LW11dGVkLm15LTNcbiAgICAgICAgICAgICAgICAgICAgcC50ZXh0LWxpZ2h0LWRhcmsgRmVhdHVyZWQgaW1hZ2UgaXMgbm90IGF2YWlsYWJsZVxuICAgICAgICAuY29sLTEyLmNvbC1tZC04LnAtM1xuICAgICAgICAgICAgLmQtZmxleC5mbGV4LWNvbHVtbi5qdXN0aWZ5LWNvbnRlbnQtc3RhcnRcbiAgICAgICAgICAgICAgICBoNS5wb3N0LXRpdGxlLnNtYWxsIHt7IHRpdGxlIH19XG4gICAgICAgICAgICAgICAgcC5wb3N0LXB1Ymxpc2hlZC1hdC5zbWFsbCBQb3N0ZWQgT24ge3sgcHVibGlzaGVkT24gfX1cbiAgICAgICAgICAgICAgICAuZC1mbGV4LmZsZXgtcm93Lmp1c3RpZnktY29udGVudC1zdGFydC5hbGlnbi1pdGVtcy1jZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgaW1nLnJvdW5kZWQtY2lyY2xlLm1yLTMoOnNyYz1cImF1dGhvckF2YXRhckltYWdlXCIpXG4gICAgICAgICAgICAgICAgICAgIC5kLWZsZXguZmxleC1jb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9uZy5wb3N0LWF1dGhvciB7eyBhdXRob3IgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsIHt7IGF1dGhvclJvbGUgfX1cbiAgICAgICAgICAgICAgICBwLnBvc3QtZGVzY3JpcHRpb24ge3sgZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgICAgICBzbG90XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4gICAgLmFubm91bmNlbWVudC1jYXJkLWxpc3Qge1xuXG5cblxuICAgICAgICB0cmFuc2l0aW9uOiAwLjI1cyBhbGw7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAuZmVhdHVyZWQtaW1hZ2Uge1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZmVhdHVyZWQtaW1hZ2Uge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogMzV2aDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMjVzIGFsbDtcblxuICAgICAgICAgICAgJltsYXp5PWxvYWRlZF0ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICZbbGF6eT1sb2FkaW5nXSB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJltsYXp5PWVycm9yXSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mZWF0dXJlZC1pbWFnZS1iZy1vdmVybGF5IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgei1pbmRleDozO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgJi5ob3ZlcmFibGU6aG92ZXIge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcmVtIDNyZW0gcmdiYSgwLCAwLCAwLCAwLjE3NSkgIWltcG9ydGFudDtcblxuICAgICAgICB9XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPlxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH0sXG4gICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICB9LFxuICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICB9LFxuICAgICAgICBhdXRob3JSb2xlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgICAgfSxcbiAgICAgICAgYXV0aG9yQXZhdGFySW1hZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICB9LFxuICAgICAgICBwdWJsaXNoZWRPbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH0sXG4gICAgICAgIGZlYXR1cmVkSW1hZ2VVcmw6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YUZlYXR1cmVkSW1hZ2VVcmw6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXJhYmxlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW1nT2JqIDoge1xuICAgICAgICAgICAgICAgIHNyYzogbnVsbCxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcblxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5pbWdPYmouc3JjID0gdGhpcy5kYXRhRmVhdHVyZWRJbWFnZVVybDtcbiAgICAgICAgdGhpcy5pbWdPYmoubG9hZGluZyA9IHRoaXMuZmVhdHVyZWRJbWFnZVVybDtcbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKCl7XG5cbiAgICB9LFxuICAgIHVwZGF0ZWQ6IGZ1bmN0aW9uKCl7XG5cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGZlYXR1cmVkSW1hZ2VPdmVybGF5U3R5bGU6IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIHJldHVybiBgYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpLCByZ2JhKDAsIDAsIDAsIDAuOCkpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0YFxuXG5cblxuICAgICAgICB9XG4gICAgfVxufVxuXG48L3NjcmlwdD5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQW5ub3VuY2VtZW50TGlzdENhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNmNjA5YzFiJmxhbmc9cHVnJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Fubm91bmNlbWVudExpc3RDYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQW5ub3VuY2VtZW50TGlzdENhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0Fubm91bmNlbWVudExpc3RDYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==