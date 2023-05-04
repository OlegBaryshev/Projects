<template>
  <footer class="controller-footer-element">
    <article class="left-content-controller">
        <nav class="links-controller-content">
            <div
                @click="$event => {
                    this.$router.push(item.link);
                    checkPath(item.link);
                }" 
                v-for="(item,index) in this.data_links.list" 
                :key="index"
                :class="`link-controller ${checkPath(item.link) ? '__ActivePath':''}`"
                >
                    {{ item.text }}
                </div>
        </nav>
    </article>
    <article key="right-content-controller">
        <nav class="social-media-controler">
            <button class="controller-social-media">
                <i class='bx bxl-vk'></i>
            </button>
            <button class="controller-social-media">
                <i class='bx bxl-instagram-alt' ></i>
            </button>
            <button class="controller-social-media">
                <i class='bx bxl-facebook' ></i>
            </button>
        </nav>
    </article>
  </footer>
</template>

<script>
export default {
    name:'main-footer',
    props:{
        footer_components:{
            type:Object,
            default:{
                columns:[
                    {
                        title:'Главная',
                        rows:[
                            {
                                text:'Главная',
                                link:'/'
                            },
                            {
                                text:'О проекте',
                                link:'/about'
                            },
                            {
                                text:'Блог',
                                link:'/blog'
                            },
                            {
                                text:'Курсы',
                                link:'/courses'
                            },
                            {
                                text:'Помощь',
                                link:'/help'
                            },
                        ]
                    },
                    {
                        title:'Обучение',
                        rows:[
                            {
                                text:'Авторам курсов',
                                link:'/course_authors'
                            },
                            {
                                text:'Студентам',
                                link:'/student'
                            },
                            {
                                text:'Школьникам',
                                link:'/school'
                            },
                        ]
                    },
                    {
                        title:'Работа',
                        rows:[
                            {
                                text:'Вакансии',
                                link:'/job_openings'
                            },
                            {
                                text:'Модераторам',
                                link:'/moderators'
                            },
                            {
                                text:'Техническое задание',
                                link:'/technical_specification'
                            },
                            {
                                text:'Дополнительно',
                                link:'/job_info'
                            }
                        ]
                    },
                    {
                        title:'Дополнительно',
                        rows:[
                            {
                                text:'Споносорам',
                                link:'/Sponsors'
                            },
                            {
                                text:'Команда',
                                link:'/Team'
                            },
                            {
                                text:'О нас',
                                link:'/About_Us'
                            },
                            {
                                text:'Контакты',
                                link:'/Contacts'
                            },
                            {
                                text:'Прессе',
                                link:'/mass_media'
                            },
                            {
                                text:'Компаниям',
                                link:'/'
                            },
                        ]
                    }
                ]
            }
        }
    },
    data(){
        return{
            data_components:this.footer_components,
            debug:{
                status:false
            },
            data_links:{
                checkLink:true,
                list:[
                    {
                        text:'About',
                        link:'/About'
                    },
                    {
                        text:'Home',
                        link:'/'
                    },
                    {
                        text:'Courses',
                        link:'/courses'
                    }
                ]
            },
        }
    },
    methods:{
        checkPath(path){
            return  path == this.$route.path;
        },
    }
}
</script>

<style lang="scss" scoped>
    .controller-footer-element{
        width: 100%;
        border-top:var(--standart-border-size) solid var(--theme_2);
        height: var(--footer-height);
        display: flex;
        align-items: center;
    }
    .links-controller-content{
        display: flex;
        gap: 1vmax;
        color: var(--theme_2);
    }
    .controller-social-media{
        --social-media-size: 2vmax;
        color: var(--theme_2);
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 2vmax;
        padding: 0.2vmax;
        height:var(--social-media-size);
        width: var(--social-media-size);
        background: transparent;
        i{
            line-height: 0;
        }
    }
    .left-content-controller{
        display: flex;
        width: 100%;
    }
    .social-media-controler{
        display: flex;
        gap: 0.5vmax;
    }
    .right-content-controller{
        margin-left: auto;
        display: flex;
        height: 100%;
    }
    .link-controller{
        --border-active-haight:0.2vmax;
        --link-color:var(--theme_2);
        font-weight: bolder;
        display: flex;
        cursor: pointer;
        color:var(--link-color);
        position: relative;
        &.__ActivePath::before{
            content: '';
            width: 100%;
            position: absolute;
            top: 100%;
            height: var(--border-active-haight);
            background: var(--link-color);
            border-radius: var(--border-active-haight);
            animation:line-animation 0.6s ease;
        }
        &:hover{
            filter: brightness(110%);
        }
        &:hover:active{
            filter: brightness(90%);
        }
    }
    @keyframes line-animation {
        0%{
            width: 0;
        }
        100%{
            width: 100%;
        }
    }
</style>