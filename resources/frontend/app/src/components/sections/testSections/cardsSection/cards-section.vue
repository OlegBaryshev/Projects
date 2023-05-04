<template>
  <section class="controller-cards-test-section">
    <article class="controller-back-elements">
        <svg class="controller-svg-element canvas-svg">
    
        </svg>
    </article>
    <article class="controller-front-elements">
        <ul class="controller-cards-group-question card-group" ref="group-question-controller">
            <li class="controller-drop-position" 
            data-selector="card-selector"
            v-for="(card,index) in cards.questions"
            :key="index">

            </li>
        </ul>
        <ul class="controller-cards-group-answer card-group" ref="group-answer-controller">
            <li 
            class="controller-drop-position" 
            data-selector="card-selector"
            v-for="(card,index) in cards.answers"
            :key="index">
                <article class="controller-card-element">

                </article>
            </li>
        </ul>
    </article>
  </section>
</template>

<script>
export default {
    components:{

    },
    props:{
        cards:{
            type:Array,
            default:[]
        },
        settings:{
            type:Object
        }
    },
    data(){
        return{
            cards:{
                card_component:'',
                answer_container:this.$refs['group-question-controller'],
                answers:[
                    {

                    }
                ],
                question_container:this.$refs['group-question-controller'],
                questions:[
                    {
                        text:'',
                    }
                ]
            }
        }   
    },
    watch:{
        cards(before, after,{}={}){
            for(let i = 0; i < cards.answer.length; ++i){
                if(cards.answer[i].element == undefined || cards.answer[i].element == null){
                    cards.answer[i].element = this.$options.components[this.card_component];
                }
            }
        }
    },
    mounted(){

    },
    created(){

    },
    methods:{
        initCards({}={}){
            const vh = Math.round(window.innerHeight / 100);
            
        }
    }
}
</script>

<style>
    .card-group{
        display: flex;
        gap: 1vmax;
        width: auto;
        min-width: var(--min-card-width);
    }
    .controller-drop-position{
        width: 100%;
        height: var(--drop-size);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .controller-front-elements{
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: space-around;
    }
    .controller-drop-position::before{
        content:'';
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        opacity: 0.8;
        background:
        repeating-linear-gradient(45deg, 
        var(--line-color_1), var(--line-color_1) var(--line-size), var(--line-color_2) 0, var(--line-color_2) calc(var(--line-size) * 2));
        animation:animateBackground ease-in 1s infinite;
        background-size: 100% ;
        border-radius: 0.4vmax;
    }
    @keyframes animateBackground {
        0%{
            background: repeating-linear-gradient(45deg, 
            var(--line-color_1), var(--line-color_1) var(--line-size), var(--line-color_2) 0, var(--line-color_2) calc(var(--line-size) * 2));
        }   
        100%{
            background: repeating-linear-gradient(45deg, 
            var(--line-color_2), var(--line-color_2) var(--line-size), var(--line-color_1) 0, var(--line-color_1) calc(var(--line-size) * 2));
        }
    }
    .controller-card-element{
        width: auto;
        height: auto;
        min-height: var(--min-card-height);
        min-width: var(--min-card-width);
        max-height: var(--max-card-height);
        max-width: var(--max-card-height);
        display: flex;
        position: absolute;
    }
    .controller-cards-test-section{
        --max-card-width:10vmax;
        --min-card-width:3vmax;
        --max-card-height:10vmax;
        --min-card-height:3vmax;
        
        --drop-size:2vmax;
        --line-color_1:var(--theme_3);
        --line-color_2:transparent;
        --line-size:0.5vmax;

    }
</style>