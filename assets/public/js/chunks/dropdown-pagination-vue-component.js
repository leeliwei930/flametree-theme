(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{12:function(t,e,a){var n=a(50);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a(3)(n,o);n.locals&&(t.exports=n.locals)},49:function(t,e,a){"use strict";var n=a(12);a.n(n).a},50:function(t,e,a){(t.exports=a(2)(!1)).push([t.i,"select.text-field {\n  -moz-border-radius: 3px;\n  --webkit-appearance: menulist-button;\n  border-radius: 3px;\n  letter-spacing: -0.04em;\n  border: 0;\n}",""])},98:function(t,e,a){"use strict";a.r(e);var n={props:{perPage:{type:String,default:"0"},currentPage:{type:String},prevPageUrl:{type:String,default:""},nextPageUrl:{type:String,default:""},pageParam:{type:String,default:""},total:{type:String,default:"0"}},data:function(){return{}},methods:{getPageUrl:function(t){return"".concat(window.location.origin).concat(window.location.pathname,"?").concat(this.pageParam,"=").concat(t)},redirectToPage:function(t){window.location.href=t.target.value},activePage:function(t){var e=window.location.origin,a=window.location.pathname,n="".concat(e).concat(a);return"".concat(n).concat(this.pageParam,"?=").concat(this.currentPage)==="".concat(n).concat(this.pageParam,"?=").concat(t)},fireChangedEvent:function(t){this.$emit("change",t)}},computed:{maxPages:function(){return"0"===this.total||"0"===this.perPage?0:Math.ceil(Number.parseInt(this.total)/Number.parseInt(this.perPage))}}},o=(a(49),a(0)),r=Object(o.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-field-control"},[a("label",[t._v("PAGES")]),a("select",{staticClass:"text-field",on:{input:t.fireChangedEvent}},[""!==t.prevPageUrl?a("option",{domProps:{value:t.prevPageUrl}},[t._v("Go to previous page")]):t._e(),t._l(t.maxPages,function(e){return[a("option",{domProps:{value:t.getPageUrl(e),selected:t.activePage(e)}},[t._v("Page "+t._s(e))])]}),""!==t.nextPageUrl?a("option",{domProps:{value:t.nextPageUrl}},[t._v("Go to next page")]):t._e()],2)])},[],!1,null,null,null);e.default=r.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9Ecm9wZG93blBhZ2luYXRpb24udnVlP2NmOTMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL3BhZ2luYXRpb24vRHJvcGRvd25QYWdpbmF0aW9uLnZ1ZT9hNjAzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy92dWUvY29tcG9uZW50cy9wYWdpbmF0aW9uL0Ryb3Bkb3duUGFnaW5hdGlvbi52dWU/NjM3ZCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9Ecm9wZG93blBhZ2luYXRpb24udnVlP2U2YzciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL3BhZ2luYXRpb24vRHJvcGRvd25QYWdpbmF0aW9uLnZ1ZT85ZTAyIiwid2VicGFjazovLy9hc3NldHMvanMvdnVlL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9Ecm9wZG93blBhZ2luYXRpb24udnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy92dWUvY29tcG9uZW50cy9wYWdpbmF0aW9uL0Ryb3Bkb3duUGFnaW5hdGlvbi52dWUiXSwibmFtZXMiOlsiY29udGVudCIsIm1vZHVsZSIsImkiLCJvcHRpb25zIiwidHJhbnNmb3JtIiwidW5kZWZpbmVkIiwibG9jYWxzIiwiZXhwb3J0cyIsInB1c2giLCJjb21wb25lbnQiLCJfdm0iLCJ0aGlzIiwiX2giLCIkY3JlYXRlRWxlbWVudCIsIl9jIiwiX3NlbGYiLCJzdGF0aWNDbGFzcyIsIl92Iiwib24iLCJmaXJlQ2hhbmdlZEV2ZW50IiwicHJldlBhZ2VVcmwiLCJkb21Qcm9wcyIsIl9lIiwiX2wiLCJwYWdlIiwiZ2V0UGFnZVVybCIsImFjdGl2ZVBhZ2UiLCJfcyIsIm5leHRQYWdlVXJsIl0sIm1hcHBpbmdzIjoiNEVBQ0EsSUFBSUEsRUFBVSxFQUFRLElBRUEsaUJBQVpBLElBQXNCQSxFQUFVLENBQUMsQ0FBQ0MsRUFBT0MsRUFBSUYsRUFBUyxNQU9oRSxJQUFJRyxFQUFVLENBQUMsS0FBTSxFQUVyQixlQVBJQyxFQVFKLGdCQUFxQkMsR0FFUixFQUFRLEVBQVIsQ0FBc0VMLEVBQVNHLEdBRXpGSCxFQUFRTSxTQUFRTCxFQUFPTSxRQUFVUCxFQUFRTSxTLGdDQ2pCNUMsbUJBQWtkLEcsb0JDQXhjTCxFQUFPTSxRQUFVLEVBQVEsRUFBUixFQUFrRSxJQUtyRkMsS0FBSyxDQUFDUCxFQUFPQyxFQUFJLCtKQUFnSyxNLHVDQ0x6TCxJQ0E4TixFQ3FCOU4sQ0FDRSxNQUFGLENBQ0ksUUFBSixDQUNNLEtBQU4sT0FDTSxRQUFOLEtBRUksWUFBSixDQUNNLEtBQU4sUUFFSSxZQUFKLENBQ00sS0FBTixPQUNNLFFBQU4sSUFFSSxZQUFKLENBQ00sS0FBTixPQUNNLFFBQU4sSUFFSSxVQUFKLENBQ00sS0FBTixPQUNNLFFBQU4sSUFFSSxNQUFKLENBQ00sS0FBTixPQUNNLFFBQU4sTUFJRSxLQUFGLFdBQ0ksTUFBSixJQUVFLFFBQUYsQ0FDSSxXQUFKLFlBQ00sTUFBTiw2R0FFSSxlQUFKLFlBRU0sT0FBTiw4QkFFSSxXQUFKLFlBQ00sSUFBTix5QkFDQSwyQkFDQSx5QkFFTSxNQUFOLHdIQU1JLGlCQW5CSixTQW1CQSxHQUNNLEtBQU4sb0JBR0UsU0FBRixDQUNJLFNBQUosV0FDTSxNQUFOLHFDQUNBLEVBRUEsd0UsZUN2RUlPLEVBQVksWUFDZCxFSFRXLFdBQWEsSUFBSUMsRUFBSUMsS0FBU0MsRUFBR0YsRUFBSUcsZUFBbUJDLEVBQUdKLEVBQUlLLE1BQU1ELElBQUlGLEVBQUcsT0FBT0UsRUFBRyxNQUFNLENBQUNFLFlBQVksc0JBQXNCLENBQUNGLEVBQUcsUUFBUSxDQUFDSixFQUFJTyxHQUFHLFdBQVdILEVBQUcsU0FBUyxDQUFDRSxZQUFZLGFBQWFFLEdBQUcsQ0FBQyxNQUFRUixFQUFJUyxtQkFBbUIsQ0FBc0IsS0FBcEJULEVBQUlVLFlBQW9CTixFQUFHLFNBQVMsQ0FBQ08sU0FBUyxDQUFDLE1BQVFYLEVBQUlVLGNBQWMsQ0FBQ1YsRUFBSU8sR0FBRyx5QkFBeUJQLEVBQUlZLEtBQUtaLEVBQUlhLEdBQUliLEVBQVksU0FBRSxTQUFTYyxHQUFNLE1BQU8sQ0FBQ1YsRUFBRyxTQUFTLENBQUNPLFNBQVMsQ0FBQyxNQUFRWCxFQUFJZSxXQUFXRCxHQUFNLFNBQVdkLEVBQUlnQixXQUFXRixLQUFRLENBQUNkLEVBQUlPLEdBQUcsUUFBUVAsRUFBSWlCLEdBQUdILFNBQWlDLEtBQXBCZCxFQUFJa0IsWUFBb0JkLEVBQUcsU0FBUyxDQUFDTyxTQUFTLENBQUMsTUFBUVgsRUFBSWtCLGNBQWMsQ0FBQ2xCLEVBQUlPLEdBQUcscUJBQXFCUCxFQUFJWSxNQUFNLE1BQzFtQixJR1dwQixFQUNBLEtBQ0EsS0FDQSxNQUlhLFVBQUFiLEUiLCJmaWxlIjoiYXNzZXRzL3B1YmxpYy9qcy9jaHVua3MvZHJvcGRvd24tcGFnaW5hdGlvbi12dWUtY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRHJvcGRvd25QYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRHJvcGRvd25QYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Ryb3Bkb3duUGFnaW5hdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRHJvcGRvd25QYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRHJvcGRvd25QYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwic2VsZWN0LnRleHQtZmllbGQge1xcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XFxuICAtLXdlYmtpdC1hcHBlYXJhbmNlOiBtZW51bGlzdC1idXR0b247XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDRlbTtcXG4gIGJvcmRlcjogMDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwidGV4dC1maWVsZC1jb250cm9sXCJ9LFtfYygnbGFiZWwnLFtfdm0uX3YoXCJQQUdFU1wiKV0pLF9jKCdzZWxlY3QnLHtzdGF0aWNDbGFzczpcInRleHQtZmllbGRcIixvbjp7XCJpbnB1dFwiOl92bS5maXJlQ2hhbmdlZEV2ZW50fX0sWyhfdm0ucHJldlBhZ2VVcmwgIT09ICcnKT9fYygnb3B0aW9uJyx7ZG9tUHJvcHM6e1widmFsdWVcIjpfdm0ucHJldlBhZ2VVcmx9fSxbX3ZtLl92KFwiR28gdG8gcHJldmlvdXMgcGFnZVwiKV0pOl92bS5fZSgpLF92bS5fbCgoX3ZtLm1heFBhZ2VzKSxmdW5jdGlvbihwYWdlKXtyZXR1cm4gW19jKCdvcHRpb24nLHtkb21Qcm9wczp7XCJ2YWx1ZVwiOl92bS5nZXRQYWdlVXJsKHBhZ2UpLFwic2VsZWN0ZWRcIjpfdm0uYWN0aXZlUGFnZShwYWdlKX19LFtfdm0uX3YoXCJQYWdlIFwiK192bS5fcyhwYWdlKSldKV19KSwoX3ZtLm5leHRQYWdlVXJsICE9PSAnJyk/X2MoJ29wdGlvbicse2RvbVByb3BzOntcInZhbHVlXCI6X3ZtLm5leHRQYWdlVXJsfX0sW192bS5fdihcIkdvIHRvIG5leHQgcGFnZVwiKV0pOl92bS5fZSgpXSwyKV0pfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Ryb3Bkb3duUGFnaW5hdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRHJvcGRvd25QYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZSBsYW5nPVwicHVnXCI+XG4gICAgLnRleHQtZmllbGQtY29udHJvbFxuICAgICAgICBsYWJlbCBQQUdFU1xuICAgICAgICBzZWxlY3QudGV4dC1maWVsZChAaW5wdXQ9XCJmaXJlQ2hhbmdlZEV2ZW50XCIgKVxuICAgICAgICAgICAgb3B0aW9uKHYtaWY9XCJwcmV2UGFnZVVybCAhPT0gJydcIiAgOnZhbHVlPVwicHJldlBhZ2VVcmxcIilcbiAgICAgICAgICAgICAgICB8IEdvIHRvIHByZXZpb3VzIHBhZ2VcbiAgICAgICAgICAgIHRlbXBsYXRlKHYtZm9yPVwicGFnZSBpbiBtYXhQYWdlc1wiKVxuICAgICAgICAgICAgICAgIG9wdGlvbig6dmFsdWU9XCJnZXRQYWdlVXJsKHBhZ2UpXCIgOnNlbGVjdGVkPVwiYWN0aXZlUGFnZShwYWdlKVwiKSBQYWdlIHt7IHBhZ2UgfX1cbiAgICAgICAgICAgIG9wdGlvbih2LWlmPVwibmV4dFBhZ2VVcmwgIT09ICcnXCIgOnZhbHVlPVwibmV4dFBhZ2VVcmxcIilcbiAgICAgICAgICAgICAgICB8IEdvIHRvIG5leHQgcGFnZVxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICAgIHNlbGVjdC50ZXh0LWZpZWxkIHtcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIC0td2Via2l0LWFwcGVhcmFuY2U6IG1lbnVsaXN0LWJ1dHRvbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLS4wNGVtO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPlxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIHBlclBhZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiMFwiXG4gICAgICAgIH0sXG4gICAgICAgIGN1cnJlbnRQYWdlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgICAgfSxcbiAgICAgICAgcHJldlBhZ2VVcmw6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dFBhZ2VVcmw6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwiXCJcbiAgICAgICAgfSxcbiAgICAgICAgcGFnZVBhcmFtOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIHRvdGFsOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiBcIjBcIlxuICAgICAgICB9LFxuXG4gICAgfSxcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7fVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXRQYWdlVXJsOiBmdW5jdGlvbiAocGFnZU51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59JHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9PyR7dGhpcy5wYWdlUGFyYW19PSR7cGFnZU51bWJlcn1gXG4gICAgICAgIH0sXG4gICAgICAgIHJlZGlyZWN0VG9QYWdlOiBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBhY3RpdmVQYWdlOiBmdW5jdGlvbiAocGFnZSkge1xuICAgICAgICAgICAgbGV0IG9yaWdpbiA9IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gICAgICAgICAgICBsZXQgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgICAgIGxldCBwcmVmaXggPSBgJHtvcmlnaW59JHtwYXRofWA7XG5cbiAgICAgICAgICAgIHJldHVybiBgJHtwcmVmaXh9JHt0aGlzLnBhZ2VQYXJhbX0/PSR7dGhpcy5jdXJyZW50UGFnZX1gID09PSBgJHtwcmVmaXh9JHt0aGlzLnBhZ2VQYXJhbX0/PSR7cGFnZX1gXG5cblxuICAgICAgICB9LFxuXG5cbiAgICAgICAgZmlyZUNoYW5nZWRFdmVudChlKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBlKTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIG1heFBhZ2VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50b3RhbCA9PT0gXCIwXCIgfHwgdGhpcy5wZXJQYWdlID09PSBcIjBcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKE51bWJlci5wYXJzZUludCh0aGlzLnRvdGFsKSAvIE51bWJlci5wYXJzZUludCh0aGlzLnBlclBhZ2UpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgfVxufVxuXG48L3NjcmlwdD5cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRHJvcGRvd25QYWdpbmF0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MjQyZTI2ZCZsYW5nPXB1ZyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ecm9wZG93blBhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ecm9wZG93blBhZ2luYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL0Ryb3Bkb3duUGFnaW5hdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=