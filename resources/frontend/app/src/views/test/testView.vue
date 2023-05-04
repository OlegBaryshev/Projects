<template>
    <!-- <div class="test-view-page">
        <aside class="controller-left-panel">
            <article class="background-controller-content">
                <article class="text-content-controller">
                    <h2 class="controller-course-title">{{ courseTitle }}</h2>
                    <h3 class="progress-text-controller">Прогресс по курсу: {{ this.complited }}/{{this.getAllPoints()}}</h3>
                    <ProgressBar class="progress-selector" :size="this.getAllPoints()" :points="this.courses.points"></ProgressBar>
                </article>
                <nav class="course-navigation">
                    <ul class="controller-cours-point">
                        <li :class="`course-point-element ${this.selected == index+1?'__active':''}`" @click="this.selected = index+1" v-for="(item,index) in courses.list" :key="index">
                            <div class="absolute-content">
                                <div class="controller-progress-element" :style="{'--procent':`${parseInt(item.points.filter(el=>el.done).length*100/item.points.length)}%`}">
                                    
                                </div>
                                {{ item.title }}
                            </div>
                        </li>
                    </ul>
                </nav>
            </article>
        </aside>
        <section class="controller-main-content">
            <header class="controller-top-course-controller">
                <article class="header-content-controller">
                    <section class="controller-left-side-content">
                        <nav class="course-selector">
                            <button 
                            :class="`controller-select-element ${item.done?'__active':''} ${this.courses.list[selected-1].selected == index+1 ? '__selected':''}`" 
                            v-for="(item,index) in this.courses.list[selected-1].points" @click="this.courses.list[selected-1].selected = index+1"
                            :key="index">
                                <template v-if="item.type!=null">
                                    <i class='bx bx-question-mark' v-if="item.type=='question'"></i>
                                    <i class='bx bxs-right-arrow' v-else-if="item.type=='video'"></i>
                                    <i class='bx bxs-terminal' v-else-if="item.type=='code'"></i>
                                    <i class='bx bx-clipboard' v-else></i>
                                </template>
                            </button>
                        </nav>
                    </section>
                    <section class="controller-right-side-content">
                        <article class="profile-element-controller">
                            <article class="avatar-controller">
                                <div class="avatar-element">

                                </div>
                            </article>
                            <article class="text-profile-controller">
                                <h3 class="controller-username">
    
                                </h3>
                                <h4 class="controller-user-role">
    
                                </h4>
                            </article>
                        </article>
                    </section>
                </article>
            </header>
            <section class="main-test-section-shell">
                <article class="controller-main-section-outline">
                    <cardSection></cardSection>
                </article>
            </section>
        </section>
    </div> -->
    <div></div>
</template>

<script>
import cardSection from '@/components/sections/testSections/cardsSection/cards-section.vue'
export default {
    name:'test',
    components:{
        cardSection
    },
    data(){
        return{
            complited:0,
            selected:1,
            courseTitle:'',
            courses:{
                list:[
                    {
                        title:'Title',
                        points:[
                            {
                                type:null,
                                done:true
                            },
                            {
                                type:null,
                                done:true
                            },
                            {
                                type:'code',
                                done:false
                            },
                            {
                                type:null,
                                done:false
                            },
                        ],
                        selected:1
                    },
                    {
                        title:'Title',
                        points:[

                        ],
                    },
                    {
                        title:'Title',
                        points:[

                        ],
                    },
                    {
                        title:'Title',
                        points:[

                        ],
                    },
                    {
                        title:'Title',
                        points:[

                        ],
                    },
                    {
                        title:'Title',
                        points:[

                        ],
                    },
                    {
                        title:'Title',
                        points:[

                        ],
                    },
                    {
                        title:'Title',
                        points:[

                        ],
                    },
                    {
                        title:'Title',
                        points:[

                        ],
                    },
                    {
                        title:'Title',
                        points:[

                        ],
                    },
                    {
                        title:'Title',
                        points:[

                        ],
                    },
                    {
                        title:'Title',
                        points:[

                        ],
                    },
                    {
                        title:'Title',
                        points:[

                        ],
                    },
                    {
                        title:'Title',
                        points:[

                        ],
                    },
                    {
                        title:'Title',
                        points:[

                        ],
                    },
                    {
                        title:'Title',
                        points:[

                        ],
                    },
                    {
                        title:'Title',
                        points:[

                        ],
                    }
                ],
                points:[500,1000]
            },
        }
    },
    methods:{
        getAllPoints(){
            let len = 0;
            this.courses.list.forEach(element => {
                len += element.points.length;
            });
            return len;
        }
    }
}
</script>

<style>
    .test-view-page{
        --this-header-height:var(--little-header-height);
        --panel-width:20vmax;
        --min-panel-width:20vmax;
        --panel-padding:1vmax;
        --theme-backgroud:var(--theme_2);
        --panel-background:var(--main-color);
        --controller-padding-element:1vmax;
        --element-height:3vmax;
        --elements-border-radius:var(--standard-border-radius);
        --border-element-size:calc(var(--elements-border-radius) * 2);
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: row;   
        background: var(--theme-backgroud);
    }
    .controller-select-element{
        --element-size:1.5vmax;
        height: var(--element-size);
        width: var(--element-size);
        border-radius: 0.3vmax;
        background: var(--theme);
        color: var(--theme_3);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2vmax;
        line-height: 1em;
        transition: transform ease-in 0.1ss;
    }
    .avatar-element{
        --avatar-size:2.5vmax;
        width: var(--avatar-size);
        height: var(--avatar-size);
        background: var(--theme);
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header-content-controller{
        width: 100%;
        height: 100%;
        border-bottom: 0.1vmax solid #d5d5d5;
        align-items: center;
        display: flex;
        justify-content: space-between;
        gap: 1vmax;
    }
    .controller-left-side-content{
        display: flex;
        height: 100%;
        align-items: center;
        width: 100%;
    }
    .controller-select-element.__active{
        background: var(--main-color);
    }
    .controller-select-element.__selected{
        transform: scale(1.1);
    }
    .controller-right-side-content{
        margin-right: auto;
        width: auto;
        height: 100%;
        display: flex;
        align-items: center;
    }   
    .controller-main-content{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .course-selector{
        width: auto;
        height: 100%;
        display: flex;
        gap: 1vmax;
        align-items: center;
    }
    .main-test-section-shell{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: auto;
    }
    .controller-top-course-controller{
        width: 100%;
        height: var(--this-header-height);
        padding: 0 1vmax;
        display: flex;
        align-items: center;
        padding-right: calc(var(--controller-padding-element) + var(--panel-padding));
        justify-content: space-between;
    }
    .controller-progress-element{
        --before:0.01%;
        height: 100%;
        width: 0.5vmax;
        margin-right: 0.5vmax;
        background: linear-gradient(0deg,var(--theme-backgroud) calc(var(--procent) - var(--before)),var(--panel-background) calc(var(--procent) - var(--before)));
    }
    .course-point-element.__active .controller-progress-element{
        background: linear-gradient(0deg,var(--panel-background) calc(var(--procent) - var(--before)),var(--theme-backgroud) calc(var(--procent) - var(--before)));
    }
    .progress-text-controller{
        font-size: 0.9em;
    }
    .controller-course-title{
        min-height: 1em;
    }
    .controller-left-panel{
        height: 100%;
        width: calc(var(--panel-width) + var(--controller-padding-element));
        display: flex;
        flex-direction: column;
        background:var(--theme-backgroud);
        color: var(--theme_2);
        padding-right:var(--controller-padding-element);
        position: relative;
    }
    .course-point-element:before{
        content: '';
        position: absolute;
        height: var(--border-element-size);
        width: var(--border-element-size);
        border-radius: 100%;
        top: calc(var(--border-element-size) * -1);
        left: calc(100% - var(--border-element-size));
    }
    .course-point-element.__active:before{
        background: var(--panel-background);
        box-shadow: var(--elements-border-radius) var(--elements-border-radius) 0  var(--theme-backgroud);
    }
    .course-point-element::after{
        content: '';
        position: absolute;
        height: var(--border-element-size);
        width: var(--border-element-size);
        top: 100%;
        left: calc(100% - var(--border-element-size));
    }
    .course-point-element.__active::after{
        border-radius: 100%;
        box-shadow: var(--elements-border-radius) calc(var(--elements-border-radius) * -1) 0  var(--theme-backgroud);
    }
    .course-point-element{
        cursor: pointer;
        padding: 0.5vmax 1vmax;
        width: 100%;
        height: var(--element-height);
        transition: ease-in color 0.3s;
        font-weight: bolder;
        align-items: center;
        display: inline-flex;
        position: relative;
    }
    .course-point-element.__active{
        background: var(--theme-backgroud);
        color:var(--panel-background);
    }
    .absolute-content{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        padding: 0.5vmax 1vmax;
    }
    .course-navigation{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow-y: auto;
        background: var(--panel-background);
    }
    .course-navigation::-webkit-scrollbar {
        display: none;
    }
    .background-controller-content{
        width: calc(100% - var(--controller-padding-element));
        height: 100%;
        position: absolute;
        display: flex;
        flex-direction: column;
    }
    .text-content-controller{
        padding: var(--panel-padding);
        display: flex;
        flex-direction: column;
        background: var(--panel-background);
        border-bottom-right-radius: var(--elements-border-radius);
    }
</style>