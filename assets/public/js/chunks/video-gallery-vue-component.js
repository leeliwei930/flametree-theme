(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{26:function(e,t,a){"use strict";function r(){return!!(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i))}a.d(t,"a",function(){return r})},88:function(e,t,a){"use strict";a.r(t);var r=a(26),i={props:{autoplay:{type:Boolean,default:!1},playlistName:{type:String,default:"Playlist"},defaultVideo:{type:String}},data:function(){return{player:null,playerState:{currentPlaying:null,isPaused:!1,setCurrentPlaying:function(e){this.playVideo(e)}.bind(this)}}},methods:{registerPlayerInstance:function(e){this.player=e,this.autoplay&&!Object(r.a)()&&this.player.play()},playVideo:function(e){this.playerState.currentPlaying=e,this.updatePlayerSource(e),this.player.play()},updatePlayerSource:function(e){null!=this.player&&("video"!==e.type?this.player.source={type:"video",title:e.title,sources:[{src:e.embed_id,provider:e.type}]}:this.player.source={type:"video",title:e.title,sources:[{src:e.video_url,type:"video/mp4"}]})},loadDefaultVideo:function(){this.playerState.currentPlaying=JSON.parse(this.defaultVideo)}},created:function(){},mounted:function(){this.loadDefaultVideo()},updated:function(){}},l=a(0),n=Object(l.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex flex-column"},[a("div",{staticClass:"col-12 align-self-stretch align-self-lg-center col-lg-6"},[null!=e.playerState.currentPlaying?[a("video-player",{ref:"plyr-video-"+e.playerState.currentPlaying.id,attrs:{autoplay:e.autoplay,id:e.playerState.currentPlaying.id,"embed-id":e.playerState.currentPlaying.embed_id,source:e.playerState.currentPlaying.type,"video-url":e.playerState.currentPlaying.video_url,"poster-url":e.playerState.currentPlaying.featured_image_url},on:{ready:e.registerPlayerInstance}})]:e._e()],2),a("video-playlist",{attrs:{title:e.playlistName}},[e._t("default",null,{playerState:e.playerState})],2)],1)},[],!1,null,null,null);t.default=n.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbW9iaWxlLWRldGVjdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy92dWUvY29tcG9uZW50cy9tZWRpYS9WaWRlb0dhbGxlcnkudnVlPzdjODEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL21lZGlhL1ZpZGVvR2FsbGVyeS52dWU/MmYxNCIsIndlYnBhY2s6Ly8vYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL21lZGlhL1ZpZGVvR2FsbGVyeS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3Z1ZS9jb21wb25lbnRzL21lZGlhL1ZpZGVvR2FsbGVyeS52dWUiXSwibmFtZXMiOlsiaXNNb2JpbGUiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJtYXRjaCIsImNvbXBvbmVudCIsIl92bSIsInRoaXMiLCJfaCIsIiRjcmVhdGVFbGVtZW50IiwiX2MiLCJfc2VsZiIsInN0YXRpY0NsYXNzIiwicGxheWVyU3RhdGUiLCJjdXJyZW50UGxheWluZyIsInJlZiIsImlkIiwiYXR0cnMiLCJhdXRvcGxheSIsImVtYmVkX2lkIiwidHlwZSIsInZpZGVvX3VybCIsImZlYXR1cmVkX2ltYWdlX3VybCIsIm9uIiwicmVnaXN0ZXJQbGF5ZXJJbnN0YW5jZSIsIl9lIiwicGxheWxpc3ROYW1lIiwiX3QiXSwibWFwcGluZ3MiOiIwRkFBZSxTQUFTQSxJQUVwQixTQUFJQyxVQUFVQyxVQUFVQyxNQUFNLGFBQ3ZCRixVQUFVQyxVQUFVQyxNQUFNLFdBQzFCRixVQUFVQyxVQUFVQyxNQUFNLFlBQzFCRixVQUFVQyxVQUFVQyxNQUFNLFVBQzFCRixVQUFVQyxVQUFVQyxNQUFNLFVBQzFCRixVQUFVQyxVQUFVQyxNQUFNLGdCQUMxQkYsVUFBVUMsVUFBVUMsTUFBTSxtQkFSckMsaUMsdUNDQUEsSSxRQ0F3TixFQ3NCeE4sQ0FFRSxNQUFGLENBQ0ksU0FBSixDQUNNLEtBQU4sUUFDTSxTQUFOLEdBRUksYUFBSixDQUNNLEtBQU4sT0FDTSxRQUFOLFlBRUksYUFBSixDQUNNLEtBQU4sU0FHRSxLQUFGLFdBQ0ksTUFBSixDQUNNLE9BQU4sS0FDTSxZQUFOLENBQ1EsZUFBUixLQUNRLFVBQVIsRUFDUSxrQkFBUixZQUNVLEtBQVYsY0FDQSxjQUlFLFFBQUYsQ0FDSSx1QkFBSixZQUNNLEtBQU4sU0FDQSwrQkFDUSxLQUFSLGVBR0ksVUFQSixTQU9BLEdBRU0sS0FBTiw2QkFDTSxLQUFOLHNCQUNNLEtBQU4sZUFFSSxtQkFBSixZQUNBLG9CQUNBLGlCQUVVLEtBQVYsZUFDWSxLQUFaLFFBQ1ksTUFBWixRQUNZLFFBQVosQ0FDQSxDQUNjLElBQWQsV0FDYyxTQUFkLFVBS1UsS0FBVixlQUNZLEtBQVosUUFDWSxNQUFaLFFBQ1ksUUFBWixDQUNBLENBQ2MsSUFBZCxZQUNjLEtBQWQsaUJBT0ksaUJBekNKLFdBMENNLEtBQU4sMkRBSUUsUUFBRixhQUVFLFFBQUYsV0FDSSxLQUFKLG9CQUdFLFFBQUYsYyxPQzlGSUMsRUFBWSxZQUNkLEVIUlcsV0FBYSxJQUFJQyxFQUFJQyxLQUFTQyxFQUFHRixFQUFJRyxlQUFtQkMsRUFBR0osRUFBSUssTUFBTUQsSUFBSUYsRUFBRyxPQUFPRSxFQUFHLE1BQU0sQ0FBQ0UsWUFBWSxzQkFBc0IsQ0FBQ0YsRUFBRyxNQUFNLENBQUNFLFlBQVksMkRBQTJELENBQW9DLE1BQWxDTixFQUFJTyxZQUFZQyxlQUF3QixDQUFDSixFQUFHLGVBQWUsQ0FBQ0ssSUFBSSxjQUFjVCxFQUFJTyxZQUFZQyxlQUFlRSxHQUFHQyxNQUFNLENBQUMsU0FBV1gsRUFBSVksU0FBUyxHQUFLWixFQUFJTyxZQUFZQyxlQUFlRSxHQUFHLFdBQVdWLEVBQUlPLFlBQVlDLGVBQWVLLFNBQVMsT0FBU2IsRUFBSU8sWUFBWUMsZUFBZU0sS0FBSyxZQUFZZCxFQUFJTyxZQUFZQyxlQUFlTyxVQUFVLGFBQWFmLEVBQUlPLFlBQVlDLGVBQWVRLG9CQUFvQkMsR0FBRyxDQUFDLE1BQVFqQixFQUFJa0IsMkJBQTJCbEIsRUFBSW1CLE1BQU0sR0FBR2YsRUFBRyxpQkFBaUIsQ0FBQ08sTUFBTSxDQUFDLE1BQVFYLEVBQUlvQixlQUFlLENBQUNwQixFQUFJcUIsR0FBRyxVQUFVLEtBQUssQ0FBQyxZQUFjckIsRUFBSU8sZUFBZSxJQUFJLElBQ2p3QixJR1VwQixFQUNBLEtBQ0EsS0FDQSxNQUlhLFVBQUFSLEUiLCJmaWxlIjoiYXNzZXRzL3B1YmxpYy9qcy9jaHVua3MvdmlkZW8tZ2FsbGVyeS12dWUtY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNNb2JpbGUoKXtcblxuICAgIGlmKCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpXG4gICAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL3dlYk9TL2kpXG4gICAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKVxuICAgICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGFkL2kpXG4gICAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQb2QvaSlcbiAgICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQmxhY2tCZXJyeS9pKVxuICAgICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9XaW5kb3dzIFBob25lL2kpXG4gICAgKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG59XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO3JldHVybiBfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJkLWZsZXggZmxleC1jb2x1bW5cIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImNvbC0xMiBhbGlnbi1zZWxmLXN0cmV0Y2ggYWxpZ24tc2VsZi1sZy1jZW50ZXIgY29sLWxnLTZcIn0sWyhfdm0ucGxheWVyU3RhdGUuY3VycmVudFBsYXlpbmcgIT0gbnVsbCk/W19jKCd2aWRlby1wbGF5ZXInLHtyZWY6J3BseXItdmlkZW8tJytfdm0ucGxheWVyU3RhdGUuY3VycmVudFBsYXlpbmcuaWQsYXR0cnM6e1wiYXV0b3BsYXlcIjpfdm0uYXV0b3BsYXksXCJpZFwiOl92bS5wbGF5ZXJTdGF0ZS5jdXJyZW50UGxheWluZy5pZCxcImVtYmVkLWlkXCI6X3ZtLnBsYXllclN0YXRlLmN1cnJlbnRQbGF5aW5nLmVtYmVkX2lkLFwic291cmNlXCI6X3ZtLnBsYXllclN0YXRlLmN1cnJlbnRQbGF5aW5nLnR5cGUsXCJ2aWRlby11cmxcIjpfdm0ucGxheWVyU3RhdGUuY3VycmVudFBsYXlpbmcudmlkZW9fdXJsLFwicG9zdGVyLXVybFwiOl92bS5wbGF5ZXJTdGF0ZS5jdXJyZW50UGxheWluZy5mZWF0dXJlZF9pbWFnZV91cmx9LG9uOntcInJlYWR5XCI6X3ZtLnJlZ2lzdGVyUGxheWVySW5zdGFuY2V9fSldOl92bS5fZSgpXSwyKSxfYygndmlkZW8tcGxheWxpc3QnLHthdHRyczp7XCJ0aXRsZVwiOl92bS5wbGF5bGlzdE5hbWV9fSxbX3ZtLl90KFwiZGVmYXVsdFwiLG51bGwse1wicGxheWVyU3RhdGVcIjpfdm0ucGxheWVyU3RhdGV9KV0sMildLDEpfVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1ZpZGVvR2FsbGVyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlkZW9HYWxsZXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZSBsYW5nPVwicHVnXCI+XG4uZC1mbGV4LmZsZXgtY29sdW1uXG4gICAgLmNvbC0xMi5hbGlnbi1zZWxmLXN0cmV0Y2guYWxpZ24tc2VsZi1sZy1jZW50ZXIuY29sLWxnLTZcbiAgICAgICAgdGVtcGxhdGUodi1pZj1cInBsYXllclN0YXRlLmN1cnJlbnRQbGF5aW5nICE9IG51bGxcIilcbiAgICAgICAgICAgIHZpZGVvLXBsYXllcig6YXV0b3BsYXk9XCJhdXRvcGxheVwiXG4gICAgICAgICAgICAgICAgOmlkPVwicGxheWVyU3RhdGUuY3VycmVudFBsYXlpbmcuaWRcIlxuICAgICAgICAgICAgICAgIDplbWJlZC1pZD1cInBsYXllclN0YXRlLmN1cnJlbnRQbGF5aW5nLmVtYmVkX2lkXCIgOnNvdXJjZT1cInBsYXllclN0YXRlLmN1cnJlbnRQbGF5aW5nLnR5cGVcIiBAcmVhZHk9XCJyZWdpc3RlclBsYXllckluc3RhbmNlXCJcbiAgICAgICAgICAgICAgICA6cmVmPVwiJ3BseXItdmlkZW8tJytwbGF5ZXJTdGF0ZS5jdXJyZW50UGxheWluZy5pZFwiIDp2aWRlby11cmw9XCJwbGF5ZXJTdGF0ZS5jdXJyZW50UGxheWluZy52aWRlb191cmxcIlxuICAgICAgICAgICAgICAgIDpwb3N0ZXItdXJsPVwicGxheWVyU3RhdGUuY3VycmVudFBsYXlpbmcuZmVhdHVyZWRfaW1hZ2VfdXJsXCJcbiAgICAgICAgICAgIClcblxuICAgIHZpZGVvLXBsYXlsaXN0KDp0aXRsZT1cInBsYXlsaXN0TmFtZVwiKVxuICAgICAgICBzbG90KDpwbGF5ZXJTdGF0ZT1cInBsYXllclN0YXRlXCIpXG5cblxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuXG48L3N0eWxlPlxuPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+XG5cbmltcG9ydCBpc01vYmlsZSBmcm9tIFwiLi4vLi4vLi4vbW9iaWxlLWRldGVjdG9yXCI7XG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBwcm9wczoge1xuICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHBsYXlsaXN0TmFtZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogXCJQbGF5bGlzdFwiXG4gICAgICAgIH0sXG4gICAgICAgIGRlZmF1bHRWaWRlbzoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwbGF5ZXI6IG51bGwsXG4gICAgICAgICAgICBwbGF5ZXJTdGF0ZTp7XG4gICAgICAgICAgICAgICAgY3VycmVudFBsYXlpbmc6IG51bGwsXG4gICAgICAgICAgICAgICAgaXNQYXVzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQbGF5aW5nOiBmdW5jdGlvbih2aWRlbyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheVZpZGVvKHZpZGVvKVxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHJlZ2lzdGVyUGxheWVySW5zdGFuY2U6IGZ1bmN0aW9uKHBsYXllcil7XG4gICAgICAgICAgICB0aGlzLnBsYXllciA9IHBsYXllcjtcbiAgICAgICAgICAgIGlmKHRoaXMuYXV0b3BsYXkgJiYgIWlzTW9iaWxlKCkpe1xuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcGxheVZpZGVvKHZpZGVvT2JqKXtcblxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTdGF0ZS5jdXJyZW50UGxheWluZyA9IHZpZGVvT2JqO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQbGF5ZXJTb3VyY2UodmlkZW9PYmopXG4gICAgICAgICAgICB0aGlzLnBsYXllci5wbGF5KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVBsYXllclNvdXJjZTogZnVuY3Rpb24odmlkZW9PYmope1xuICAgICAgICAgICAgaWYodGhpcy5wbGF5ZXIgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgaWYodmlkZW9PYmoudHlwZSAhPT0gJ3ZpZGVvJylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNvdXJjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd2aWRlbycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdmlkZW9PYmoudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHZpZGVvT2JqLmVtYmVkX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm92aWRlcjogdmlkZW9PYmoudHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNvdXJjZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd2aWRlbycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdmlkZW9PYmoudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHZpZGVvT2JqLnZpZGVvX3VybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ2aWRlby9tcDRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbG9hZERlZmF1bHRWaWRlbygpe1xuICAgICAgICAgICAgdGhpcy5wbGF5ZXJTdGF0ZS5jdXJyZW50UGxheWluZyA9IEpTT04ucGFyc2UodGhpcy5kZWZhdWx0VmlkZW8pO1xuICAgICAgICB9XG5cbiAgICB9LFxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uKCl7XG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLmxvYWREZWZhdWx0VmlkZW8oKTtcblxuICAgIH0sXG4gICAgdXBkYXRlZDogZnVuY3Rpb24oKXtcblxuICAgIH1cbn1cblxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1ZpZGVvR2FsbGVyeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODU4OGZlZTQmbGFuZz1wdWcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVmlkZW9HYWxsZXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVmlkZW9HYWxsZXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==