<template>
    <aside class="controller-side-bar-element">
        <section class="controller-top-logo-element">
            <div class="logo-controller-component">

            </div>
            <div class="controller-logo-text">

            </div>
        </section>
        <section class="Main-content-sideBar">
            <article class="controller-component-groups">
                <nav class="controller-list-components" v-for="(group, i) of link_elements" :key="i">
                    <div class="group-title-container">
                        <span class="controller-title-element">
                            <h3 class="controller-group-title">{{ group.title }}</h3>
                        </span>
                    </div>
                    <div class="controller-list-element" v-for="(item, index) of group" :key="index" @click="$event=>this.ValidPath">
                        <button class="button-contoller-element">
                            <div class="controller-low-content" v-html="item.icon"></div>
                            <div class="controller-more-content">
                                <span class="text-controller-element">{{ item.text }}</span>
                            </div>
                        </button>
                    </div>
                </nav>
            </article>
        </section>
        <section class="profile-controller-element">
            <fieldset class="controller-user-data">
                <div class="controller-user-icon"></div>
                <div class="controller-user-profile">
                    <label class="controller-user-username">{{ data_userProfile }}</label>
                    <span class="controller-user-role"></span>
                </div>
            </fieldset>
        </section>
    </aside>
</template>

<script>
export default {
    props: {
        link_elements: {
            type: Array,
            default: [
                {
                    title:'',
                    list:{
                        icon: '',
                        title: '',
                        text: '',
                        link: '/'
                    }
                }
            ]
        },
        userProfile: {
            type:Object,
            default:{
                username: '',
                user_role: '',
            }
        }
    },
    data() {
        return {
            data_userProfile:this.userProfile
        }
    },
    watch: {

    },
    mounted() {

    },
    methods: {
        ValidPath() {

        },
        checkPath(link) {

        }
    }
}
</script>

<style lang="scss" scoped>
.controller-side-bar-element {
    --width-now: var(--side-bar-low-width);
    --standard-group-gap: 0.2vmax;

    --sideBar-light-color:var(--theme_2);
    --sideBar-dark-color:var(--reverse_2);
    --sideBar-theme_1:var(--sideBar-dark-color);
    --sideBar-theme_2:var(--sideBar-light-color);
    
    min-width: var(--side-bar-low-width);
    max-width: var(--side-bar-max-width);
    position: fixed;
    background: var(--sideBar-theme_1);
    width: var(--width-now);
    height: 100%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    .profile-controller-element{
        height: var(--footer-height);
        width: 100%;
        background: var(--reverse);
        display: flex;
        padding: 0 var(--standard-group-gap);
        align-items: center;
        .controller-user-data{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: row;
        }
    }
    .controller-top-logo-element {
        display: flex;
        padding: 0 var(--standard-group-gap);
        height: var(--header-height);
        width: 100%;
        align-items: center;
    }
    .Main-content-sideBar {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        padding: var(--standard-group-gap) 0;
        .controller-component-groups{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            .controller-list-components{
                display: flex;
                flex-direction: column;
                gap: var(--standard-group-gap);
                height: 100%;
                width: 100%;
            }
        }
    }
    .controller-low-content {
        width: var(--side-bar-low-width);
    }
}
</style>