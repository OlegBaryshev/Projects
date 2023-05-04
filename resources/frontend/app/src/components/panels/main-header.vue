<template>
  <header class="main-header" ref="main-header">
      <article class="controller-left-content">
        <!-- <article class="logo-controller-component" >
            <mainLogo></mainLogo>
        </article> -->
        <article class="links-controller-conetnt">
            <nav class="controller-links">
                <div
                @click="$event => {
                    this.$router.push(item.link);
                }" 
                v-for="(item,index) in this.data_links.list" 
                :key="index"
                :class="`link-controller ${checkPath(item.link) ? '__ActivePath':''}`"
                >
                    {{ item.text }}
                </div>
                <customSelect class="controller-more-button" :elements="this.selectElements.elements" :select_name="this.selectElements.title"></customSelect>
            </nav>
        </article>
    </article>
    <article class="controller-right-content-side">
        <article class="profile-controller">
            <template v-if="this.$store.state.isAuthenticated">
                <fieldset class="controller-buttons-element">
                    <button class="controller-sign-in-buttons header-reg-buttons" @click="$event=>this.PushLink('/sign-in')">Регистрация</button>
                    <button class="controller-log-in-buttons header-reg-buttons" @click="$event=>this.PushLink('/log-in')">Войти</button>
                </fieldset>
            </template>
            <template v-else>
                <article class="buttons-controller">
                    <button class="menu-theme-controller">
                        <i class='bx bxs-cog' ></i>
                    </button>
                    <button class="menu-theme-controller">
                        <i class='bx bxs-message' ></i>
                    </button>
                </article>
                <div class="group-controller">
                    <button class="controller-profile-avatar">

                    </button>
                    <div class="controller-profile-text-content">
                        <h3 class="username-controller">{{ userData.username }}</h3>
                        <h4 class="controller-user-role">{{ userData.role }}</h4>
                    </div>
                </div>
            </template>
        </article>
    </article>
  </header>
</template>

<script>
import mainLogo from '@/components/logo/logo.vue'
import customSelect from '@/components/elements/customSelect.vue'
export default {
    props:{
        onScrollChange:{
            default: true,
            type:Boolean,
        }
    },
    data(){
        return{
            data_onScrollChange:this.onScrollChange,
            data_links:{
                checkLink:true,
                list:[
                    {
                        text:'Главная',
                        link:'/',
                        checkAuth:false
                    },
                    {
                        text:'Курсы',
                        link:'/courses',
                        checkAuth:false
                    },
                    {
                        text:'О нас',
                        link:'/About',
                        checkAuth:false
                    },
                    {
                        text:'Блог',
                        link:'/blog',
                        checkAuth:false
                    }
                ]
            },
            selectElements:{
                title:'Другое',
                elements:{
                        list:[
                        {
                            text:'Помощь',
                            link:'/help',
                            checkAuth:false
                        },
                        {
                            text:'Работа',
                            link:'/job',
                            checkAuth:false
                        },
                        {
                            text:'О проекте',
                            link:'/',
                            checkAuth:false
                        },
                        {
                            text:'Прессе',
                            link:'/mass_media',
                            checkAuth:false
                        },
                        {
                            text:'Спонсорам',
                            link:'/',
                            checkAuth:false
                        },
                        {
                            text:'Компаниям',
                            link:'/',
                            checkAuth:false
                        }
                        ]
                    }
            },
            userData:{
                username:'',
                role:'',
            },
            headerPoints:{

            }
        }
    },
    components:{
        mainLogo,
        customSelect
    },
    mounted(){
        this.onScrollHeader()
    },
    methods:{
        checkPath(path){
            return  path == this.$route.path;
        },
        PushLink(path){
            this.$router.push(path)
        },
        onScrollHeader(){
            const header = this.$refs['main-header'];
            if(this.data_onScrollChange){
                function checkScroll(currentScroll){
                    const headerHidden = () => header.classList.contains('header_hidden');
                    if(currentScroll == 0){
                        header.classList.add('__TopScroll');
                        header.classList.remove('header_hidden');
                    }else{
                        header.classList.remove('__TopScroll');
                        if (currentScroll > prevScroll && !headerHidden()) {
                            header.classList.add('header_hidden');
                        }
                        if (currentScroll < prevScroll && headerHidden()) {
                            header.classList.remove('header_hidden');
                        }
                    }
                }
                let prevScroll = window.pageYOffset;
                let currentScroll;
                checkScroll(prevScroll)
                window.addEventListener('scroll', (e) => {
                    currentScroll = window.pageYOffset;
                    checkScroll(currentScroll)
                    prevScroll = currentScroll;
                });
            }
        }
    }
}
</script>

<style scoped>
    .logo-controller-component{
        --controller-size:3vmax;
        --colors-controller_1:var(--theme_2);
        --colors-controller_2:var(--main-color);
        width: var(--controller-size);
        height: var(--controller-size);
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .main-header{
        --header-theme:var(--theme_2);
        --header-theme-reversed:var(--main-color);
        --header-no-scroll:transparent;
        
        --header-content-theme:var(--text-color);
        --header-content-theme-reverse:var(--theme_2);

        --header-main-color:var(--main-color);

        display: flex;
        height: var(--header-height);
        width: 100%;
        padding: 0 var(--page-padding);
        position: fixed;
        background: var(--header-theme);
        z-index: 100;
        align-items: center;
        transition: transform 0.2s ease,background 0.2s ease;
    }
    .buttons-controller{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5vmax;
    }
    .header-reg-buttons{
        padding: 0.5vmax 1vmax;
        border-radius: 0.2vmax;
        background: var(--theme_2);
        color: var(--reverse_2);
        font-size: 1.3vmax;
    }

    .menu-theme-controller{
        --btn-size:1.4vmax;
        width: var(--btn-size);
        height: var(--btn-size);
        font-size: var(--btn-size);
        border: none;
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height: 0;
        letter-spacing: 0;
        color: var(--theme_2);
    }
    .main-header:not(.__TopScroll) .menu-theme-controller{
        color: var(--reverse_2);
    }
    .main-header:not(.__TopScroll) .header-reg-buttons{
        background: var(--reverse_2);
        color: var(--theme_2);
    }
    .controller-buttons-element{
        display: flex;
        gap: 1vmax;
    }
    .profile-controller{
        display: flex;
        gap: 1vmax;
    }
    .group-controller{
        display: flex;
        height: 100%;
    }
    .controller-profile-avatar{
        --avatar-size:3vmax;
        height: var(--avatar-size);
        width: var(--avatar-size);
        display: flex;
        background: var(--theme);
        border-radius: 100%;
    }
    .controller-right-content-side{
        display: flex;
    }
    .main-header:not(.__TopScroll){
        box-shadow: 0 0 0.4vmax rgba(0, 0, 0, 0.2);
    }
    .main-header.__TopScroll{
        background: var(--header-no-scroll);
    }
    .links-controller-conetnt{
        display: flex;
        width: auto;
        padding: 0 2vmax;
    }
    .main-header.__TopScroll .link-controller{
        --link-color: var(--header-theme) !important;
    }
    .main-header.__TopScroll .controller-profile-avatar{
        background: var(--header-theme);
    }
    .link-controller{
        font-weight: bolder;
        display: flex;
        cursor: pointer;
        color:var(--link-color);
        position: relative;
    }
    .controller-links .link-controller.__ActivePath::before{
        content: '';
        width: 100%;
        position: absolute;
        top: 100%;
        height: var(--border-active-haight);
        background: var(--link-color);
        border-radius: var(--border-active-haight);
        animation:line-animation 0.6s ease;
    }
    @keyframes line-animation {
        0%{
            width: 0;
        }
        100%{
            width: 100%;
        }
    }
    .link-controller:hover{
        filter: brightness(110%);
    }
    .link-controller:hover:active{
        filter: brightness(90%);
    }
    .header_hidden {
        transform: translateY(-100%);
    }
    .controller-left-content{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        
    }
    .controller-links{
        --border-active-haight:0.2vmax;
        --link-color:var(--reverse_2);
        color:var(--link-color) !important;
        display: flex;
        gap: 1vmax;
        width: auto;
        height: 100%;
        align-items: center;
        font-weight: bolder;
    }
    .main-header.__TopScroll .controller-more-button{
        color: var(--header-theme) !important;
    }
</style>