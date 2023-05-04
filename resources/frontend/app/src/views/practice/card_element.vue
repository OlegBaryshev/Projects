<template>
  <div class="controller-card-element">
    <div class="controller-card-layout">
        <div class="controller-before-elements">
            <button 
            v-for="(point,index) in data_points.list"
            :key="index"
            :disabled="point.disabled"
            :ref="[data_points.ref]"
            :class="`controller-point ${point.class} ${point.show?'__show':''}`">
    
            </button>
        </div>
        <div class="controller-front-elements">
            <article class="center-text-block">
                <span class="card-title"></span>
                <p class="card-text">
        
                </p>
            </article>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        points_list:{

        },
        points_refs:{

        },
        title:{
            default:'',
            required:false,
            type:String,
        },
        text:{
            default:'',
            required:false,
            type:String,    
        }
    },
    data(){
        return{
            data_title:'',
            data_text:'',
            con:[],
            correct_con:[],
            data_points:{
                ref:'points-list',
                list:[
                    {
                        class:'__top-middle',
                        ref:"__top-middle",
                        disabled:false,
                        show:true,
                        point:null,
                        con:[]
                    },
                    {
                        class:'__left-middle',
                        ref:"__left-middle",
                        disabled:false,
                        show:true,
                        point:null,
                        con:[]
                    },
                    {
                        class:'__right-middle',
                        ref:"__right-middle",
                        disabled:false,
                        show:true,
                        point:null,
                        con:[]
                    },
                    {
                        class:'__bottom-middle',
                        ref:"__bottom-middle",
                        disabled:false,
                        show:true,
                        point:null,
                        con:[]
                    }
                ]
            },
        }
    },
    watch:{

    },

}
</script>

<style scoped lang="scss">
    
    .controller-card-element{
        --max-width:40vw;
        --max-height:30vmax;
        --min-height:5vmax;
        --min-width:5vmax;
        --point-size:1vmax;
        font-size: 1vmax;
        position: absolute;
        max-width: var(--max-width);
        max-height: var(--max-height);
        min-width: var(--min-width);
        min-height: var(--min-height);
        top: 0;
        left: 0;
        height: auto;
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        .controller-card-layout{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            .controller-before-elements{
                position: relative;
                display: flex;
                width: 100%;
                height: 100%;
                .controller-point{
                    display: flex;
                    position: absolute;
                    justify-content: center;
                    align-items: center;
                    border-radius: 100%;
                    height: var(--point-size);
                    width: var(--point-size);
                    &.__hide{
                        display: none;
                    }
                    &.__top-middle{
                        left: calc(50% - var(--point-size)/2);
                        top: calc(var(--point-size) * -0.5);
                    }
                    &.__left-middle{
                        top: calc(50% - var(--point-size)/2);
                        left: calc(var(--point-size) * -0.5);
                    }
                    &.__right-middle{
                        left: calc(100% - var(--point-size)/2);
                        top: calc(50% - var(--point-size)/2);
                    }
                    &.__bottom-middle{
                        left: calc(50% - var(--point-size)/2);
                        top: calc(100% - var(--point-size)/2);
                    }
                }
            }
            .controller-front-elements{
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius:var(--standard-border-radius);
                z-index: 2;
                display: flex;
                justify-content: center;
                max-width: var();
                .center-text-block{
                    width: auto;
                    height: auto;
                    display: block;
                    .card-title{
                        font-size: 1.2vmax;
                    }
                    .card-text{
                        font-size: 1vmax;
                    }
                }
            }
        }
    }
</style>