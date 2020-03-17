
//
// import SidebarMenuItem from '@components/mega-menu/SidebarMenuItem';
// import MenuItem from '@components/mega-menu/MenuItem';
//
// import VideoGallery from "@components/media/VideoGallery.vue";
// import VideoPlayer from "@components/media/VideoPlayer.vue"
// import VideoPlaylist from "@components/media/VideoPlaylist.vue";
// import VideoThumbnail from "@components/media/VideoThumbnail.vue";
//
import Carousel from "@components/carousels/Carousel.vue";
import Slide from "@components/carousels/Slide.vue";
//
// import ProducerCard from "@components/producers/ProducerCard.vue";
// import AnnouncementBasicCard from "@components/announcements/AnnouncementBasicCard";
// import AnnouncementListCard from "@components/announcements/AnnouncementListCard";
// import TileCard from "@components/cards/TileCard";
// import EventCard from "@components/cards/EventCard";
// import Calendar from "@components/cards/Calendar";
// import MegaFooter from "@components/mega-footer/MegaFooter";
// import MegaFooterHeader from "@components/mega-footer/MegaFooterHeader";
// import MegaFooterItem from "@components/mega-footer/MegaFooterItem";
//
// // import SocialButton from "@components/social-bars/SocialButton";
// import Hero from "@components/hero/Hero.vue";
//
// import DropdownPagination from "@components/pagination/DropdownPagination";
//
// import UploadAvatar from "@components/avatarfield/UploadAvatar";
//
// import Accordian from "@components/accordian/Accordian";
// import AccordianView from "@components/accordian/AccordianView";




export default {
    MegaMenu: () => import(/* webpackChunkName: "mega-menu-vue-component" */ "@components/mega-menu/MegaMenu"),
    MenuItem: () => import(/* webpackChunkName: "menu-item-vue-component" */ "@components/mega-menu/MenuItem" ),
    SidebarMenuItem: () => import(/* webpackChunkName: "sidebar-menu-item-vue-component" */ "@components/mega-menu/SidebarMenuItem" ),

    VideoThumbnail: () => import(/* webpackChunkName: "video-thumbnail-vue-component" */ "@components/media/VideoThumbnail"),
    VideoPlayer: () => import(/* webpackChunkName: "video-player-vue-component" */ "@components/media/VideoPlayer"),
    VideoPlaylist: () => import (/* webpackChunkName: "video-playlist-vue-component" */"@components/media/VideoPlaylist"),
    VideoGallery: () => import (/* webpackChunkName: "video-gallery-vue-component" */"@components/media/VideoGallery"),

    Carousel,
    Slide,

    ProducerCard: () => import(/*webpackChunkName: "producer-card-vue-component"*/ "@components/producers/ProducerCard"),
    AnnouncementBasicCard: () => import(/*webpackChunkName: "announcement-basic-card-vue-component"*/ "@components/announcements/AnnouncementBasicCard"),
    AnnouncementListCard: () => import (/*webpackChunkName: "announcement-list-card-vue-component"*/"@components/announcements/AnnouncementListCard"),

    MegaFooter: () => import(/*webpackChunkName: "mega-footer-vue-component"*/"@components/mega-footer/MegaFooter"),
    MegaFooterHeader: () => import (/*webpackChunkName: "mega-footer-header-vue-component"*/"@components/mega-footer/MegaFooterHeader"),
    MegaFooterItem: () => import (/*webpackChunkName: "mega-footer-item-vue-component"*/"@components/mega-footer/MegaFooterItem"),

    Hero: () => import (/*webpackChunkName: "mega-footer-item-vue-component"*/ "@components/hero/Hero.vue"),
    SocialButton: () => import(/*webpackChunkName: "social-button-vue-component" */"@components/social-bars/SocialButton"),
    DropdownPagination: () => import(/*webpackChunkName: "dropdown-pagination-vue-component" */"@components/pagination/DropdownPagination"),
    'accordion' : () => import(/*webpackChunkName: "accordion-vue-component" */ "@components/accordian/Accordian"),
    'accordion-view' : () => import(/*webpackChunkName: "accordion-view-vue-component" */ "@components/accordian/AccordianView"),
    UploadAvatar: () => import(/*webpackChunkName: "upload-avatar-vue-component" */ "@components/avatarfield/UploadAvatar"),
    TileCard: () => import(/*webpackChunkName: "tile-card-vue-component" */ "@components/cards/TileCard"),
    Accordian: () => import(/*webpackChunkName: "accordion-vue-component" */ "@components/accordian/Accordian"),
    AccordianView:  () => import(/*webpackChunkName: "accordion-view-vue-component" */ "@components/accordian/AccordianView"),

    EventCard: () =>  import(/*webpackChunkName: "tile-card-vue-component" */ "@components/cards/EventCard"),
    Calendar:  () => import(/*webpackChunkName: "tile-card-vue-component" */ "@components/cards/Calendar"),
};

