(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{33:function(t,n,e){"use strict";var i=e(4);e.n(i).a},34:function(t,n,e){(t.exports=e(2)(!1)).push([t.i,'.video-thumbnail {\n  height: 15rem;\n  min-width: 45vh;\n  max-width: 45vh;\n}\n.video-thumbnail .rounded-card {\n  border-radius: 15pt;\n}\n.video-thumbnail .dark-overlay {\n  color: white;\n}\n.video-thumbnail .duration {\n  border-radius: 15pt;\n  border: 1pt solid white;\n  width: 100px;\n}\n.video-thumbnail .title {\n  font-family: "Nunito Light", sans-serif;\n  font-size: 14pt;\n}\n.video-thumbnail .description p {\n  font-family: "Nunito Light", sans-serif;\n  font-size: 12pt;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.video-thumbnail .action-fadeIn {\n  transition: all 0.5s;\n  opacity: 0;\n}\n.video-thumbnail:hover .action-fadeIn {\n  opacity: 1;\n  transform: translateY(-15px);\n}\n.video-thumbnail .has-hover-effect:hover {\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);\n}\n.video-thumbnail .has-hover-effect {\n  cursor: pointer;\n  transition: all 1s;\n}\n.video-thumbnail .currently-playing-indicator {\n  border-radius: 15pt;\n  width: 6em;\n  color: white;\n  opacity: 1;\n  transition: all 1s;\n  background-color: var(--primary-color-hex);\n}\n.video-thumbnail .currently-playing-indicator strong {\n  font-family: "Nunito Light", sans-serif;\n  font-size: 12pt;\n}',""])},4:function(t,n,e){var i=e(34);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(3)(i,o);i.locals&&(t.exports=i.locals)},85:function(t,n,e){"use strict";e.r(n);var i={props:{isPlaying:{type:Boolean,default:!1},enableHover:{type:Boolean,default:!0},featuredImageUrl:{type:String},title:{type:String},description:{type:String},duration:{type:Number},videoUrl:{type:String},embedId:{type:String},type:{type:String,validator:function(t){return-1!==["youtube","vimeo","video"].indexOf(t)}}},data:function(){return{showPlayIcon:!1,video:{}}},methods:{styleBuilder:function(){var t="";return this.enableHover&&(t+="has-hover-effect "),null!==this.backgroundCSS?t+=" dark-overlay":t+=" bg-white shadow",t},emitClickEvent:function(){this.$emit("click",this.video)},copyVideoObject:function(){Object.assign(this.video,{type:this.type,title:this.title,description:this.description,embed_id:this.embedId,featured_image_url:this.featuredImageUrl,video_url:this.videoUrl})}},created:function(){this.copyVideoObject()},mounted:function(){},updated:function(){},computed:{backgroundCSS:function(){return null!==this.featuredImageUrl?"background: url(' "+this.featuredImageUrl+"') ,linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));\n                        background-blend-mode:multiply;\n                        background-repeat:no-repeat;\n                        background-size:cover":null},formatReadableDuration:function(){return null!=this.duration?this.$moment.duration(this.duration,"seconds").format("hh:mm:ss"):"LIVE"},dynamicActionIcon:function(){return this.isPlaying?" fa-pause fa-3x":" fa-play fa-3x"}}},o=(e(33),e(0)),a=Object(o.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"video-thumbnail",on:{mouseover:function(n){t.showPlayIcon=!0},mouseleave:function(n){t.showPlayIcon=!1},click:function(n){return t.emitClickEvent()}}},[e("div",{staticClass:"d-flex flex-column justify-content-between p-3 w-100 h-100 rounded-card",class:t.styleBuilder(),style:t.backgroundCSS},[e("div",{staticClass:"d-flex flex-row justify-content-between"},[e("div",{staticClass:"duration p-2 d-flex justify-content-between align-items-center"},[e("i",{staticClass:"fas fa-video"}),e("strong",{staticClass:"ml-auto"},[t._v(t._s(t.formatReadableDuration))])]),t.isPlaying?e("div",{staticClass:"currently-playing-indicator text-uppercase p-2 d-flex justify-content-center align-items-center"},[e("strong",[t._v(" Playing")])]):t._e()]),e("div",{staticClass:"justify-content-center my-auto action-fadeIn d-flex"},[e("i",{staticClass:"fas",class:t.dynamicActionIcon})]),e("div",{staticClass:"d-flex flex-column justify-content-end"},[e("h3",{staticClass:"title"},[t._v(t._s(t.title))]),e("div",{staticClass:"description"},[e("p",[t._v(t._s(t.description))])])])])])},[],!1,null,null,null);n.default=a.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvbWVkaWEvVmlkZW9UaHVtYm5haWwudnVlPzg5MjMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL21lZGlhL1ZpZGVvVGh1bWJuYWlsLnZ1ZT81NjAyIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy92dWUvY29tcG9uZW50cy9tZWRpYS9WaWRlb1RodW1ibmFpbC52dWU/M2QwOSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvbWVkaWEvVmlkZW9UaHVtYm5haWwudnVlP2FmNTQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL21lZGlhL1ZpZGVvVGh1bWJuYWlsLnZ1ZT8xZmU2Iiwid2VicGFjazovLy9hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvbWVkaWEvVmlkZW9UaHVtYm5haWwudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy92dWUvY29tcG9uZW50cy9tZWRpYS9WaWRlb1RodW1ibmFpbC52dWUiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInB1c2giLCJpIiwiY29udGVudCIsIm9wdGlvbnMiLCJ0cmFuc2Zvcm0iLCJ1bmRlZmluZWQiLCJsb2NhbHMiLCJjb21wb25lbnQiLCJfdm0iLCJ0aGlzIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsIm9uIiwiJGV2ZW50Iiwic2hvd1BsYXlJY29uIiwiZW1pdENsaWNrRXZlbnQiLCJjbGFzcyIsInN0eWxlQnVpbGRlciIsInN0eWxlIiwiX3YiLCJfcyIsImZvcm1hdFJlYWRhYmxlRHVyYXRpb24iLCJfZSIsImR5bmFtaWNBY3Rpb25JY29uIiwidGl0bGUiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6IjBGQUFBLGtCQUE4YyxHLG9CQ0FwY0EsRUFBT0MsUUFBVSxFQUFRLEVBQVIsRUFBa0UsSUFLckZDLEtB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b21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWRlb1RodW1ibmFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZpZGVvVGh1bWJuYWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnZpZGVvLXRodW1ibmFpbCB7XFxuICBoZWlnaHQ6IDE1cmVtO1xcbiAgbWluLXdpZHRoOiA0NXZoO1xcbiAgbWF4LXdpZHRoOiA0NXZoO1xcbn1cXG4udmlkZW8tdGh1bWJuYWlsIC5yb3VuZGVkLWNhcmQge1xcbiAgYm9yZGVyLXJhZGl1czogMTVwdDtcXG59XFxuLnZpZGVvLXRodW1ibmFpbCAuZGFyay1vdmVybGF5IHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnZpZGVvLXRodW1ibmFpbCAuZHVyYXRpb24ge1xcbiAgYm9yZGVyLXJhZGl1czogMTVwdDtcXG4gIGJvcmRlcjogMXB0IHNvbGlkIHdoaXRlO1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG4udmlkZW8tdGh1bWJuYWlsIC50aXRsZSB7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0byBMaWdodFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHQ7XFxufVxcbi52aWRlby10aHVtYm5haWwgLmRlc2NyaXB0aW9uIHAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG8gTGlnaHRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB0O1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4udmlkZW8tdGh1bWJuYWlsIC5hY3Rpb24tZmFkZUluIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuLnZpZGVvLXRodW1ibmFpbDpob3ZlciAuYWN0aW9uLWZhZGVJbiB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcXG59XFxuLnZpZGVvLXRodW1ibmFpbCAuaGFzLWhvdmVyLWVmZmVjdDpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDFyZW0gM3JlbSByZ2JhKDAsIDAsIDAsIDAuMTc1KTtcXG59XFxuLnZpZGVvLXRodW1ibmFpbCAuaGFzLWhvdmVyLWVmZmVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxufVxcbi52aWRlby10aHVtYm5haWwgLmN1cnJlbnRseS1wbGF5aW5nLWluZGljYXRvciB7XFxuICBib3JkZXItcmFkaXVzOiAxNXB0O1xcbiAgd2lkdGg6IDZlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLWhleCk7XFxufVxcbi52aWRlby10aHVtYm5haWwgLmN1cnJlbnRseS1wbGF5aW5nLWluZGljYXRvciBzdHJvbmcge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOdW5pdG8gTGlnaHRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB0O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWRlb1RodW1ibmFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZpZGVvVGh1bWJuYWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZpZGVvVGh1bWJuYWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJ2aWRlby10aHVtYm5haWxcIixvbjp7XCJtb3VzZW92ZXJcIjpmdW5jdGlvbigkZXZlbnQpe192bS5zaG93UGxheUljb24gPSB0cnVlfSxcIm1vdXNlbGVhdmVcIjpmdW5jdGlvbigkZXZlbnQpe192bS5zaG93UGxheUljb24gPSBmYWxzZX0sXCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7cmV0dXJuIF92bS5lbWl0Q2xpY2tFdmVudCgpfX19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWJldHdlZW4gcC0zIHctMTAwIGgtMTAwIHJvdW5kZWQtY2FyZFwiLGNsYXNzOl92bS5zdHlsZUJ1aWxkZXIoKSxzdHlsZTooX3ZtLmJhY2tncm91bmRDU1MpfSxbX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJkdXJhdGlvbiBwLTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwifSxbX2MoJ2knLHtzdGF0aWNDbGFzczpcImZhcyBmYS12aWRlb1wifSksX2MoJ3N0cm9uZycse3N0YXRpY0NsYXNzOlwibWwtYXV0b1wifSxbX3ZtLl92KF92bS5fcyhfdm0uZm9ybWF0UmVhZGFibGVEdXJhdGlvbikpXSldKSwoX3ZtLmlzUGxheWluZyk/X2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiY3VycmVudGx5LXBsYXlpbmctaW5kaWNhdG9yIHRleHQtdXBwZXJjYXNlIHAtMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIn0sW19jKCdzdHJvbmcnLFtfdm0uX3YoXCIgUGxheWluZ1wiKV0pXSk6X3ZtLl9lKCldKSxfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG15LWF1dG8gYWN0aW9uLWZhZGVJbiBkLWZsZXhcIn0sW19jKCdpJyx7c3RhdGljQ2xhc3M6XCJmYXNcIixjbGFzczpfdm0uZHluYW1pY0FjdGlvbkljb259KV0pLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtZW5kXCJ9LFtfYygnaDMnLHtzdGF0aWNDbGFzczpcInRpdGxlXCJ9LFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiZGVzY3JpcHRpb25cIn0sW19jKCdwJyxbX3ZtLl92KF92bS5fcyhfdm0uZGVzY3JpcHRpb24pKV0pXSldKV0pXSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlkZW9UaHVtYm5haWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZpZGVvVGh1bWJuYWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZSBsYW5nPVwicHVnXCI+XG4gICAgLnZpZGVvLXRodW1ibmFpbChAbW91c2VvdmVyPVwic2hvd1BsYXlJY29uID0gdHJ1ZVwiIEBtb3VzZWxlYXZlPVwic2hvd1BsYXlJY29uID0gZmFsc2VcIiB2LW9uOmNsaWNrPVwiZW1pdENsaWNrRXZlbnQoKVwiKVxuICAgICAgICAuZC1mbGV4LmZsZXgtY29sdW1uLmp1c3RpZnktY29udGVudC1iZXR3ZWVuLnAtMy53LTEwMC5oLTEwMC5yb3VuZGVkLWNhcmQoOnN0eWxlPVwiYmFja2dyb3VuZENTU1wiICwgOmNsYXNzPVwic3R5bGVCdWlsZGVyKClcIiApXG4gICAgICAgICAgICAgICAgLmQtZmxleC5mbGV4LXJvdy5qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblxuICAgICAgICAgICAgICAgICAgICAuZHVyYXRpb24ucC0yLmQtZmxleC5qdXN0aWZ5LWNvbnRlbnQtYmV0d2Vlbi5hbGlnbi1pdGVtcy1jZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGkuZmFzLmZhLXZpZGVvXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJvbmcubWwtYXV0b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwge3tmb3JtYXRSZWFkYWJsZUR1cmF0aW9ufX1cbiAgICAgICAgICAgICAgICAgICAgLmN1cnJlbnRseS1wbGF5aW5nLWluZGljYXRvci50ZXh0LXVwcGVyY2FzZS5wLTIuZC1mbGV4Lmp1c3RpZnktY29udGVudC1jZW50ZXIuYWxpZ24taXRlbXMtY2VudGVyKHYtaWY9XCJpc1BsYXlpbmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9uZyAgUGxheWluZ1xuICAgICAgICAgICAgICAgIC5qdXN0aWZ5LWNvbnRlbnQtY2VudGVyLm15LWF1dG8uYWN0aW9uLWZhZGVJbi5kLWZsZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIGkuZmFzKDpjbGFzcz1cImR5bmFtaWNBY3Rpb25JY29uXCIpXG4gICAgICAgICAgICAgICAgLmQtZmxleC5mbGV4LWNvbHVtbi5qdXN0aWZ5LWNvbnRlbnQtZW5kXG4gICAgICAgICAgICAgICAgICAgIGgzLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICB8IHt7dGl0bGV9fVxuICAgICAgICAgICAgICAgICAgICAuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHAge3tkZXNjcmlwdGlvbn19XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cbiAgICAudmlkZW8tdGh1bWJuYWlsICB7XG4gICAgICAgIGhlaWdodDogMTVyZW07XG4gICAgICAgIG1pbi13aWR0aDogNDV2aDtcbiAgICAgICAgbWF4LXdpZHRoOiA0NXZoO1xuICAgIH1cblxuICAgIC52aWRlby10aHVtYm5haWwgLnJvdW5kZWQtY2FyZCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHQ7XG5cbiAgICB9XG4gICAgLnZpZGVvLXRodW1ibmFpbCAuZGFyay1vdmVybGF5e1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICB9XG5cbiAgICAudmlkZW8tdGh1bWJuYWlsIC5kdXJhdGlvbiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHQ7XG4gICAgICAgIGJvcmRlcjoxcHQgc29saWQgd2hpdGU7XG4gICAgICAgIHdpZHRoOjEwMHB4O1xuXG4gICAgfVxuXG4gICAgLnZpZGVvLXRodW1ibmFpbCAudGl0bGUge1xuICAgICAgICBmb250LWZhbWlseTogJ051bml0byBMaWdodCcgLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6MTRwdDtcblxuICAgIH1cblxuICAgIC52aWRlby10aHVtYm5haWwgLmRlc2NyaXB0aW9uIHAge1xuICAgICAgICBmb250LWZhbWlseTogJ051bml0byBMaWdodCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZToxMnB0O1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgIH1cbiAgICAudmlkZW8tdGh1bWJuYWlsIC5hY3Rpb24tZmFkZUluIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIC52aWRlby10aHVtYm5haWw6aG92ZXIge1xuICAgICAgICAuYWN0aW9uLWZhZGVJbiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC52aWRlby10aHVtYm5haWwgLmhhcy1ob3Zlci1lZmZlY3Q6aG92ZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwIDFyZW0gM3JlbSByZ2JhKDAsMCwwLC4xNzUpIDtcblxuXG4gICAgfVxuXG4gICAgLnZpZGVvLXRodW1ibmFpbCAuaGFzLWhvdmVyLWVmZmVjdCB7XG4gICAgICAgIGN1cnNvcjpwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG4gICAgfVxuXG4gICAgLnZpZGVvLXRodW1ibmFpbCAuY3VycmVudGx5LXBsYXlpbmctaW5kaWNhdG9yIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVwdDtcbiAgICAgICAgd2lkdGg6NmVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAxcztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvci1oZXgpO1xuICAgIH1cblxuICAgIC52aWRlby10aHVtYm5haWwgLmN1cnJlbnRseS1wbGF5aW5nLWluZGljYXRvciBzdHJvbmcge1xuICAgICAgICBmb250LWZhbWlseTogJ051bml0byBMaWdodCcgLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6MTJwdDtcblxuICAgIH1cblxuXG5cbjwvc3R5bGU+XG48c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIj5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBpc1BsYXlpbmc6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBlbmFibGVIb3Zlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZmVhdHVyZWRJbWFnZVVybDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgICAgfSxcbiAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICB9LFxuICAgICAgICBkdXJhdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICAgIH0sXG4gICAgICAgIHZpZGVvVXJsOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgICAgfSxcbiAgICAgICAgZW1iZWRJZDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24odHlwZVZhbCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsneW91dHViZScgLCAndmltZW8nICwgJ3ZpZGVvJyBdLmluZGV4T2YodHlwZVZhbCkgIT09IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvd1BsYXlJY29uOiBmYWxzZSxcbiAgICAgICAgICAgIHZpZGVvOiB7fVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHN0eWxlQnVpbGRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGxldCBzdHlsZUNsYXNzID0gXCJcIjtcbiAgICAgICAgICAgIGlmKHRoaXMuZW5hYmxlSG92ZXIpe1xuICAgICAgICAgICAgICAgIHN0eWxlQ2xhc3MgKz0gXCJoYXMtaG92ZXItZWZmZWN0IFwiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMuYmFja2dyb3VuZENTUyAhPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgc3R5bGVDbGFzcyArPSBcIiBkYXJrLW92ZXJsYXlcIlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZUNsYXNzICs9IFwiIGJnLXdoaXRlIHNoYWRvd1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3R5bGVDbGFzcztcbiAgICAgICAgfSxcbiAgICAgICAgZW1pdENsaWNrRXZlbnQ6IGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJyAsIHRoaXMudmlkZW8pO1xuICAgICAgICB9LFxuICAgICAgICBjb3B5VmlkZW9PYmplY3Q6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMudmlkZW8sIHtcbiAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgZW1iZWRfaWQgOiB0aGlzLmVtYmVkSWQsXG4gICAgICAgICAgICAgICAgZmVhdHVyZWRfaW1hZ2VfdXJsOiB0aGlzLmZlYXR1cmVkSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgdmlkZW9fdXJsIDogdGhpcy52aWRlb1VybCxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuY29weVZpZGVvT2JqZWN0KCk7XG5cbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uKCl7XG5cbiAgICB9LFxuICAgIHVwZGF0ZWQ6IGZ1bmN0aW9uKCl7XG5cbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGJhY2tncm91bmRDU1M6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZih0aGlzLmZlYXR1cmVkSW1hZ2VVcmwgIT09IG51bGwpe1xuICAgICAgICAgICAgICAgIHJldHVybiBgYmFja2dyb3VuZDogdXJsKCcgYCsgdGhpcy5mZWF0dXJlZEltYWdlVXJsICsgYCcpICxsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwwLjUpLCByZ2JhKDAsMCwwLDAuNSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOm11bHRpcGx5O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyYFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdFJlYWRhYmxlRHVyYXRpb246IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZih0aGlzLmR1cmF0aW9uICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRtb21lbnQuZHVyYXRpb24odGhpcy5kdXJhdGlvbiwgJ3NlY29uZHMnKS5mb3JtYXQoXCJoaDptbTpzc1wiKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYExJVkVgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcbiAgICAgICAgZHluYW1pY0FjdGlvbkljb24gOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYodGhpcy5pc1BsYXlpbmcpe1xuICAgICAgICAgICAgICAgIHJldHVybiAnIGZhLXBhdXNlIGZhLTN4J1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyBmYS1wbGF5IGZhLTN4J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgfVxufVxuXG48L3NjcmlwdD5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVmlkZW9UaHVtYm5haWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkODFhMDRjJmxhbmc9cHVnJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1ZpZGVvVGh1bWJuYWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVmlkZW9UaHVtYm5haWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL1ZpZGVvVGh1bWJuYWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==