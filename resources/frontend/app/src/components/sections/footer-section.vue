<template>
  <section class="controller-footer-section">
    <article class="controller-main-content">
        <nav class="controller-navigation __style-scrollbar">
            <ul class="Group-columns-controller" v-for="(column,index) in this.data_components.columns" :key="index">
                <h3 class="controller-columnt-title">{{ column.title }}</h3>
                <li class="controller-group-element" v-for="(item,i) in column.rows" :key="i" @click="
                checkPath(item.link)">
                    {{ item.text }}
                </li>
            </ul>
        </nav>
    </article>
    <footer_element></footer_element>
  </section>
</template>

<script>
import footer_element from '@/components/sections/footer-component.vue'
export default {
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
    components:{
        footer_element
    },
    data(){
        return{
            data_components:this.footer_components,
            debug:{
                status:false
            }
        }
    },
    methods:{
        checkPath(link){
            try{
                this.$router.push(link)
            }catch(e){
                if(this.debug.status){
                    console.error(`${e}::link==${link}`);
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .controller-footer-section{
        --section-background:var(--theme_2);
        --section-background-reverse:var(--reverse_2);
        --section-background-colored:var(--main-color);
        min-height: 30vmax;
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 0 var(--page-padding);
    }
    .controller-navigation{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1vmax;
        width: 100%;
        height: auto;
        padding: 0 var(--page-padding);
    }
    .Group-columns-controller{
        --element-color:transparent;
        --element-active:var(--section-background);
        --inner-components-color:var(--section-background-reverse);
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 0.8vh;
        text-align: center;
        height: 100%;
        padding: var(--page-padding) 0;
        color: var(--theme_2);
        .controller-columnt-title{
            text-transform: uppercase;
            font-weight: bolder;
        }
    }
    .controller-group-element{
        width: 100%;
        padding: 0.4vmax 0.6vmax;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 2;
        cursor: pointer;
    }
    .controller-group-element::before{
        content: '';
        position: absolute;
        padding: 0.4vmax 0.6vmax;
        top: 0;
        left: 0;
        display: flex;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: var(--element-color);
        border-radius: 0.3vmax;
        transition: background 0.2s ease-in-out;
    }
    .controller-main-content{
        width: 100%;
        display: flex;
    }
</style>