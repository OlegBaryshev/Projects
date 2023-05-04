<template>
    <aside class="controller-side-bar" 
    :class="{
        '__Active':isActive
    }"
    v-if="this.data_course">
        <ul class="controller-content-elements __style-scrollbar ">
            <li class="aside-element" v-for="(item,index) in this.data_course.list" :key="index" :data-cell-index="index">
                <button :disabled="item.lock" class="controller-component" @click="$event=>changeSlide(index)"
                    :class="{
                        '__Selected':data_SelectedSlide==index
                    }">
                    <div class="controller-selector-element" :style="{
                        '--procent':`${item.procent}% `
                    }"></div>
                    <div class="relative-element-controller">
                        <div class="icon-controller-element">
                            <i class='bx bx-question-mark' v-if="item.type==1"></i>
                            <i class='bx bx-test-tube' v-else-if="item.type==2"></i>
                            <i class='bx bxs-video'  v-else-if="item.type==3"></i>
                            <i class='bx bx-code-alt' v-else-if="item.type==4"></i>
                            <i class='bx bx-math' v-else-if="item.type==5"></i>
                            <span v-else>{{ index+1 }}</span>
                        </div>
                        <h3 class="main-element-title">{{ item.title }}</h3>
                        <div class="controller-element-text">
                            <p class="main-element-text">
                                {{ item.text }}
                            </p>
                        </div>
                    </div>
                </button>
            </li>
        </ul>
        <footer class="menu-controller-element">
            <button class="controller-menu-button">

            </button>
        </footer>
    </aside>
</template>

<script>
export default {
    props:{
        Course:{
            default:{

            },
            type:Array,
            required:true,
        },
        isActive:{
            default:false,
            type:Boolean,
            required:false
        },
        SelectedSlide:{
            default:0,
            type:Boolean,
            required:true
        }
    },
    data(){
        return{
            data_isActive:this.isActive,
            data_course:this.Course,
            data_SelectedSlide:this.SelectedSlide
        }
    },
    watch:{

    },
    mounted(){
        for(let i=0;i < this.data_course.list.length;++i){
            this.data_course.list[i].procent=(this.data_course.list[i].tasks.filter(item=>item.isComplete).length/this.data_course.list[i].tasks.length)*100
            console.log(this.data_course.list[i].procent)
        }
        this.data_course.list.map(el=>el.procent=el.tasks.filter(item=>item.isComplete).length/el.tasks.length *100)
    },
    methods:{
        changeSlide(index){
            this.data_SelectedSlide = index;
            this.$emit('changeSlide',{slide:this.data_SelectedSlide})
        }
    }
}
</script>

<style scoped lang="scss">
.controller-side-bar{
    --side-bar-size:var(--side-bar-low-width);
    --side-bar-padding:0.5vmax;
    --side-bar-gap:0.5vmax;
    --side-bar-element-size:2.5vmax;
    --side-bar-width-boost:0;
    --selector-size:0.2vmax;
    --top-boost:0.2vmax;
    --boost:0.01%;
    --element-color:var(--theme_2);
    --side-bar-color:var(--theme_1);
    --select-color:var(--main-color);
    --text-color:var(--main-color);
    --icon-size:1.5vmax;
    --anim-y-transform:-0.5vmax;
    width:var(--side-bar-size);
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    min-width: var(--side-bar-low-width);
    max-width: var(--side-bar-max-width);
    min-height: 100vh;
    padding-top:calc(var(--header-height) + var(--side-bar-gap) + var(--top-boost));
    position: relative;
    background:var(--side-bar-color);
    color: var(--text-color);
    box-shadow: 0 0 1vmax rgba(0, 0, 0, 0.2);
    transition: width 0.2s linear;
    // &:hover{
    //     width: var(--side-bar-max-width);
    //         .controller-component{
    //             width: 100% !important; 
    //             max-width:100% !important;
    //         }
    // }
    &.__active{
        min-width: var(--side-bar-min-width);
        width: calc(var(--side-bar-width-boost) + var(--side-bar-min-width));
            .controller-component{
                width: 100%; 
                max-width:100% !important;
            }
    }
    .controller-content-elements{
        width: 100%;
        height: 100%;
        padding-top: var(--anim-y-transform);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        overflow-y:auto;
        flex-wrap: wrap;
        gap: var(--side-bar-gap);
        .aside-element{
            width: 100%; 
            height: var(--side-bar-element-size);
            padding: 0 var(--side-bar-padding);
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            .controller-component{
                transition: 0.2s transform;
                &:not(.__Selected):disabled{
                    filter: grayscale(100%);
                    --select-color:var(--theme);
                    --text-color:var(--theme);
                }
                &.__Selected{
                    --element-color:var(--main-color);
                    --select-color:var(--theme_2);
                    --text-color:var(--theme_2);
                }
                &:hover{
                    transform: translateY();
                }
                transition: backgorund 0.2s linear,color 0.2s linear;
                --procent:90%;
                position: absolute;
                width: var(--side-bar-element-size);
                height: var(--side-bar-element-size);
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: row;
                cursor: pointer;
                border-radius: var(--standard-border-radius);
                overflow: hidden;
                box-shadow: 0 0 0.3vmax rgba(0, 0, 0, 0.2);
                color: var(--text-color);
                .controller-selector-element{
                    width: var(--selector-size);
                    height: 100%;
                    background: linear-gradient(0deg,var(--select-color) var(--procent),var(--element-color) var(--procent));
                }
                .relative-element-controller{
                    width: 100%;
                    height: var(--side-bar-element-size);
                    display: flex;  
                    justify-content: center;
                    align-items: center;
                    flex-direction: row;
                    width: 100%;
                    height: 100%;
                    background: var(--element-color);
                    padding-right: var(--selector-size);
                    .icon-controller-element{
                        height: var(--icon-size);
                        width: var(--icon-size);
                        font-size: var(--icon-size);
                        line-height: var(--icon-size);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-stretch: expanded;
                    }
                }
            }
        }
        .menu-controller-element{
            width: 100%;
            min-width: var(--side-bar-element-size);
            height: var(--side-bar-element-size);
            .controller-menu-button{
                width: var(--side-bar-element-size);
                height: var(--side-bar-element-size);
                border-radius: var(--standard-border-radius);
                background: var(--theme_1);
            }
        }
    }
}
</style>