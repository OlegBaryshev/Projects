<template>
  <header class="controller-ide-header">
    <aside class="controller-left-side">
        <h3 class="controller-title">{{ this.data_title }}</h3>    
    </aside>
    <aside class="controller-right-side">
        <label class="controller-label-search">
            <i class='bx bx-search'></i>
            <input class="search-component" @input="this.$emit('FindText',data_searchInput)" type="text">
        </label>
        <button class="fullscreen-btn" @click="this.fullScreen()">
            <i class='bx bx-exit-fullscreen' v-if="isFullScreen"></i>
            <i class='bx bx-fullscreen' v-else></i>
        </button>
    </aside>
  </header>
</template>

<script>
export default {
    props:{
        title:{
            default:'',
            type:String,
            required:true,
        },
        FullScreen:{
            default:true,
            type:Boolean,
            required:true
        },
        searchInput:{
            default:'',
            type:String,
            required:true
        }
    },
    data(){
        return{
            header_ref:'ide-header',
            header_component:null,
            data_title:this.title,
            isFullScreen:this.FullScreen,
            data_searchInput:this.searchInput
        }
    },
    watch:{
        // 'header_component': {
        //     handler(val) {
        //         this.finishMethod();
        //     },
        //     deep: true
        // },
        // 'header_ref': {
        //     handler(val) {
        //         this.finishMethod();
        //     },
        //     deep: true
        // },
    },
    mounted() {
        this.getHeaderComponent()
    },
    methods: {
        fullScreen(){
            this.isFullScreen=!this.isFullScreen;
            this.$emit('fullScreen',{
                component:this.$el,
                status:this.isFullScreen
            })
        },
        async getHeaderComponent(){
            this.header_component =  this.$refs[this.header_ref];
            return this.header_component
        }
    },
}
</script>

<style lang="scss" scoped>
    .controller-ide-header{
        --ide-header-height:3vmax;
        width: 100%;
        height: var(--ide-header-height);
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--theme_1);
        border-top-left-radius: var(--standard-border-radius);
        border-top-right-radius: var(--standard-border-radius);
        padding: 0 1vmax;
        font-size: 0.8vmax;
        line-height: 1em;
        font-stretch: 1em;
        color: var(--reverse_2);
        .controller-right-side{
            display: flex;
            gap: 1vmax;
            margin-left: auto;
            .controller-label-search{
                display: flex;
                gap: 0.5vmax;
                align-items: center;
                .search-component{
                    width: auto;
                    height: 1.5vmax;
                    border-radius: var(--standard-border-radius);
                    padding:0 0.5vmax;
                }
            }
            .fullscreen-btn{
                background: transparent;
                border-radius: var(--standard-border-radius);
                line-height: 1em;
                font-size: 1.5vmax;
                line-height: 1em;
                font-stretch: 1em;
                display: flex;
                align-items: center;
                width: 1em;
            }

        }
    }
    .controller-left-side{
        width: 100%;
    }
</style>