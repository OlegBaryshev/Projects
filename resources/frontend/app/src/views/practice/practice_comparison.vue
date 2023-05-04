<template>
  <section class="comparison-controller">
    <article class="content-controller" ref="container">
        <svg class="controller-lines" ref="lines-canvas" xmlns="http://www.w3.org/2000/svg">
            <line 
            v-for="(line,index) in data_lines" 
            :key="index" 
            :x1="line.x1" :y1="line.y1" :x2="line.x2" :y2="line.y2"
            @click="this.destroy_line(this.$refs[String(this.linesSettings.line_ref_name)][index])"
            :ref="String(this.linesSettings.line_ref_name)"
            stroke="black" />
        </svg>
        <ul class="controller-column question-group">
            <li class="controller-row" v-for="(item,index) in this.data_elements.quetions" :key="index">
                
            </li>
        </ul>
        <ul class="controller-column answer-group">
            <li class="controller-row" v-for="(item,index) in this.data_elements.answers" :key="index">
                <div class="card-element">

                </div>
            </li>
        </ul>
    </article>
  </section>
</template>

<script>
export default {
    props:{
        data_lines:[]
    },
    data(){
        return{
            selected:null,
            data_elements:{
                quetions:[
                    {
                        title:'',
                        text:'',
                        con:[],
                        correct_con:[]
                    }
                ],
                answers:[

                ]
            },
            data_lines:[

            ],
            linesSettings:{
                stroke_width:3,
                line_ref_name: 'line-component',
            }
        }
    },
    methods:{
        near_point(elem1,points){
            let dist = (p1,p2) => Math.sqrt(((p2.x - p1.x) ** 2) + ((p2.y - p1.y) ** 2)),
            center = (p) => ({x:p.x + p.width, y:p.y + p.height}); 
            let canvas = this.$refs['lines-canvas'],cp=canvas.getBoundingClientRect(),
            par1=elem1.getBoundingClientRect()
            points.map(el=>dist(center(elem1),center(el)))[0]
        },
        destroy_line(el){
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .comparison-controller{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--standard-border-radius);
        background: var(--theme_2);
        .content-controller{
            width: auto;
            height: auto;
            position: relative;
            .controller-lines{
                position: absolute;
                width: 100%;
                height: 100%;
                z-index: 1;
            }
            .controller-column{
                z-index: 2;
            }
        }
    }
</style>