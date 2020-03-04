<template lang="pug">
    .d-flex.align-self-center(style="position:relative")
        // the style position relative which fix the issue where popper positioning doesn't work well on safari
        popper(:options="popperOptions")
            .popper.border-0.p-0.bg-transparent.shadow-none.my-3
                .bg-white.shadow-sm.popover-cropper.p-2.d-flex.flex-column(v-if="afterSelectImage")
                    .d-flex.justify-content-start
                        strong.heading.text-uppercase.text-secondary.my-2
                            i.fas.fa-crop.mx-2.text-light-dark
                            | CROP IMAGE
                    .d-flex.flex-grow-1
                        vue-cropper(
                            ref="cropper"
                            :src="avatarImage"
                            :preview="'#preview-'+fieldId"
                            :aspect-ratio="1"
                            :cropmove="() => isCropped = false"
                            :minContainerHeight="180",
                        )
                    .d-flex.flex-row
                        button.col.btn.btn-primary.rounded-0(@click.prevent="cropAvatar" v-if="!isCropped") CROP
                        button.col.btn.btn-success.rounded-0(@click.prevent="() => null" v-else) DONE
                        button.col.btn.btn-secondary.rounded-0 RESET
                .d-flex.flex-column.rounded-pill.bg-dark.p-2(v-else)
                        strong.text-white Select Image
            .avatar(slot="reference" @click="openFilePicker")
                div(:id="'preview-'+fieldId" class="avatar-preview rounded-full")
                    img(:src="avatarImage" v-show="!afterSelectImage")
                input(type="file"  accept="image/*" class="d-none" :name="'_'+fieldName" :id="'_'+fieldId" @change="avatarChanged")
                input(type="hidden" class="d-none" :name="fieldName" :id="fieldId" v-model="avatarImage")


</template>

<style lang="scss" scoped>
    @import "~@flametree-theme/css/_variable.scss";

    .flametree-theme .popper {
        max-height: 250px!important;
        max-width: 250px!important;
    }
    .avatar {
        cursor: pointer;

        .avatar-preview {
            overflow: hidden;
            height: 150px;
            width: 150px;
            border-radius: 100% 100% 100% 100%;
            border: 1pt solid $light-silver;

            transition: all 0.25s ease-in-out;

            &:hover {
                border: 2pt solid $primaryColor;
                transform: scale(1.02);
                display: block;

            }
        }
    }


</style>
<script type="text/javascript">
import VuePopper from 'vue-popperjs'
import VueCropper from 'vue-cropperjs';

export default {
    components: {
        'popper': VuePopper,
        'vue-cropper': VueCropper
    },
    props: {
        defaultAvatarUrl: {
            type: String
        },
        dataRequestHandler: {
            type: String
        },
        altAvatar: {
            type: String,
            default: "User Avatar"
        },
        fieldName: {
            type: String,
            default: "avatar"
        },
        fieldId: {
            type: String,
            default: "avatar"
        }
    },
    data: function () {
        return {
            showUploadDialog: false,
            avatarImage: null,
            // isCropped which is a commit marker that use to indicate the crop image position has been saved
            isCropped: false,
            afterSelectImage: false,
            popperOptions: {placement: 'bottom',   modifiers: [

            ],}
        }
    },
    methods: {

        avatarChanged: function (event) {

            if (event.target.files != null && event.target.files.length == 1) {
                let file = event.target.files[0];
                if(file.type.indexOf('image/') === -1){
                    return;
                }

                this.afterSelectImage = true;
                let reader = new FileReader();

                reader.onload = event => {
                    this.avatarImage = event.target.result;
                    this.$refs.cropper.replace(event.target.result)
                }

                reader.readAsDataURL(file);

            }

        },
        openFilePicker: function () {
            document.getElementById('_'+this.fieldId).click();
        },
        cropAvatar: function(){
            this.isCropped = true;
            this.avatarImage = this.$refs.cropper.getCroppedCanvas().toDataURL();
            console.log(this.$parent);
        }
    },
    created: function () {
        this.avatarImage = this.defaultAvatarUrl;
    },
    mounted: function () {

    },
    updated: function () {

    },
}

</script>
