<template lang="pug">
    .d-flex.flex-column.align-items-center
        label(:for="fieldId" class='avatar')
            img(class="rounded-circle avatar-button-placeholder" :src="defaultAvatarUrl" :alt="altAvatar")
        input(type="file" class="d-none" :name="fieldName" :id="fieldId")
        .avatar-tooltip.rounded-pill.my-2
            i.fas.fa-caret-up.tooltip-icon.fa-2x
            | click to upload profile image


</template>

<style lang="scss">
    @import "~@flametree-theme/css/_variable.scss";
    .avatar {
        cursor: pointer;
        &:hover {
            & ~.avatar-tooltip {
                display: flex;
                transition: all 0.5s;

            }
        }
    }
    .avatar-upload-confirmation-dialog {

    }
    .avatar-tooltip {
        background-color: $dark;
        flex-direction: column;
        align-items: center;
        color:white;
        padding:5px 10px 5px 10px;
        display: none;
        z-index: 100;
        position: absolute;
        transform: translateY(180px);

        .tooltip-icon {
            color: $dark;
            transform: translateY(-22px);
            position: absolute;

        }
    }
    .avatar-button-placeholder {
        border: 2pt solid transparent;
        padding: 10px;
        transition: all 0.25s ease-in-out;
        &:hover {

            border: 2pt solid $primaryColor;
            transform: scale(1.02);

            position: relative;
            display: block;
            z-index: 1;

        }
    }
</style>
<script type="text/javascript">
export default {
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
    data: function(){
        return {
            showUploadDialog: false,
            avatarImage: null
        }
    },
    methods: {
        uploadImage: function(){

        },

        promptConfirmation: function(){

        }
    },
    created: function(){

    },
    mounted: function(){

    },
    updated: function(){

    }
}

</script>
