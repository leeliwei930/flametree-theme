
import Carousel from "@components/carousels/Carousel.vue";
import Slide from "@components/carousels/Slide.vue";



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
    TrainingCard: () => import(/*webpackChunkName: "training-card-vue-component" */ "@components/cards/TrainingCard"),
    MegaFooter: () => import(/*webpackChunkName: "mega-footer-vue-component"*/"@components/mega-footer/MegaFooter"),
    MegaFooterHeader: () => import (/*webpackChunkName: "mega-footer-header-vue-component"*/"@components/mega-footer/MegaFooterHeader"),
    MegaFooterItem: () => import (/*webpackChunkName: "mega-footer-item-vue-component"*/"@components/mega-footer/MegaFooterItem"),

    Hero: () => import (/*webpackChunkName: "hero-vue-component"*/ "@components/hero/Hero.vue"),
    SocialButton: () => import(/*webpackChunkName: "social-button-vue-component" */"@components/social-bars/SocialButton"),
    DropdownPagination: () => import(/*webpackChunkName: "dropdown-pagination-vue-component" */"@components/pagination/DropdownPagination"),
    'accordion' : () => import(/*webpackChunkName: "accordion-vue-component" */ "@components/accordian/Accordian"),
    'accordion-view' : () => import(/*webpackChunkName: "accordion-view-vue-component" */ "@components/accordian/AccordianView"),
    UploadAvatar: () => import(/*webpackChunkName: "upload-avatar-vue-component" */ "@components/avatarfield/UploadAvatar"),
    TileCard: () => import(/*webpackChunkName: "tile-card-vue-component" */ "@components/cards/TileCard"),
    Accordian: () => import(/*webpackChunkName: "accordion-vue-component" */ "@components/accordian/Accordian"),
    AccordianView:  () => import(/*webpackChunkName: "accordion-view-vue-component" */ "@components/accordian/AccordianView"),

    EventCard: () =>  import(/*webpackChunkName: "event-card-vue-component" */ "@components/cards/EventCard"),
    ProductCard: () =>  import(/*webpackChunkName: "product-card-vue-component" */ "@components/cards/ProductCard"),

    Calendar:  () => import(/*webpackChunkName: "calendar-card-vue-component" */ "@components/cards/Calendar"),
    ListView:  () => import(/*webpackChunkName: "list-view-vue-component" */ "@components/listview/ListView"),
    List:  () => import(/*webpackChunkName: "list-vue-component" */ "@components/listview/List")



};

