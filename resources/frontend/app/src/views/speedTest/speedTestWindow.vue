<template>
  <section class="speed-test-window animate__animated animate__slideInUp">
    <header class="controller-header-components">
        <aside class="controller-left-window-content">
            <h3>Результат</h3>
        </aside>
        <aside class="controller-right-window-content">
            <button class="controller-close-button" @click="$event=>this.closeWindowEmitter()"><i class='bx bx-x'></i></button>
        </aside>
    </header>
    <article class="main-window-content">
        <section class="controller-results-section">
            <fieldset class="controller-results">
                <label class="result-title">Время</label>
                <div class="controller-statistic-text">
                    <span class="result-content">{{ String(Math.floor(this.TimeValue / 60) % 60).padStart(2,"0") }}:{{ String(Math.floor(this.TimeValue) % 60).padStart(2,"0") }}</span>
                </div>
            </fieldset>
            <fieldset class="controller-results">
                <label class="result-title">Набрано</label>
                <div class="controller-statistic-text">
                    <span class="result-content">{{ this.data_SelectValue }}</span>
                    <span class="controller-unit_of_measurement">зн</span>
                </div>
            </fieldset>
            <fieldset class="controller-results">
                <label class="result-title">Скорость</label>
                <div class="controller-statistic-text">
                    <span class="result-content">{{ getSpeed() }}</span>
                    <span class="controller-unit_of_measurement">зн/м</span>
                </div>
            </fieldset>
            <fieldset class="controller-results">
                <label class="result-title">Точность</label>
                <div class="controller-statistic-text">
                    <span class="result-content">{{ getAccuracy() }}</span>
                    <span class="controller-unit_of_measurement">%</span>
                </div>
            </fieldset>
        </section>
        <section class="controller-chart-statistic">
            <canvas class="controller-chart-canvas" ref="chart-controller"></canvas>
        </section>
        <section class="button-controller-section">
            <aside class="buttons-left-fieldset-controller">
                <fieldset class="controller-buttons-fieldset">
                    <button class="info-button">Выйти</button>
                </fieldset>
            </aside>
            <aside class="buttons-right-fieldset-controller">
                <fieldset class="controller-buttons-fieldset">
                    <button class="info-button">Заново</button>
                    <button class="info-button">Далее</button>
                </fieldset>
            </aside>
        </section>
    </article>
  </section>
</template>

<script>
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default {
    props:{
        MistakesValues:{
            type:Array,
            default:[]
        },
        SybmolValues:{
            type:Array,
            default:[]
        },
        SelectValue:{
            type:Number,
            default:0
        },
        TimeValue:{
            type:Number,
            default:120
        },
        MistakesChart:null,
        SybmolChart:null
    },
    data(){
        return{
            data_MistakesValues:this.MistakesValues,
            data_SybmolValues:this.SybmolValues,
            data_SelectValue:this.SelectValue,
            data_TimeValue:this.TimeValue,
            data_chart_size:3
        }
    },
    watch:{

    },
    mounted(){
        this.initChart();
    },
    methods:{
        sum(arr){
            return arr.reduce((sum, a) => sum + a, 0);
        },
        closeWindowEmitter(event){
            this.$emit('exit',{
                status:true,
                element:this.$el
            })
        },
        getSpeed(){
            let out = parseInt(this.data_SelectValue / this.TimeValue * 60);
            return out?out:this.data_SelectValue;
        },
        getAccuracy(){
            let out = ((this.data_SelectValue - this.sum(this.MistakesValues))/this.data_SelectValue * 100).toFixed(1);
            return out<=0 || out==NaN?out:0;
        },
        chunk(a,n){
            return [...Array(Math.ceil(a.length/n))].map((_,i)=>a.slice(n*i,n+n*i));
        },
        initChart(){
            let canvas = this.$refs['chart-controller'],
            ctx = canvas.getContext("2d");

            let gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
            gradientStroke.addColorStop(0, '#80b6f4');
            gradientStroke.addColorStop(1, '#f49080');

            let gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
            gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.6)");
            gradientFill.addColorStop(1, "rgba(244, 144, 128, 0.6)");

            var myChart  = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: Array.from({ length: this.SelectValue >this.data_chart_size ? 
                        this.SelectValue / this.data_chart_size:this.SelectValue}, 
                        (_, i) => this.SelectValue >this.data_chart_size?
                        this.sum(this.chunk(this.MistakesValues,this.data_chart_size)[i]):i),
                    datasets: [{
                        label: {
                            display: false,
                        },
                        borderColor: gradientStroke,
                    //     pointBorderColor: gradientStroke,
                    //     pointBackgroundColor: gradientStroke,
                    // pointHoverBackgroundColor: gradientStroke,
                    //     pointHoverBorderColor: gradientStroke,
                    //     pointBorderWidth: 10,
                    //     pointHoverRadius: 10,
                    //     pointHoverBorderWidth: 1,
                    //     pointRadius: 3,
                        pointRadius: 0,
                        fill: true,
                        backgroundColor: gradientFill,
                        borderWidth: 4,
                        lineTension: 0.4,
                        data: this.MistakesValues
                    }]
                },
                options: {
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltips: {
                            enabled: false
                        },
                    },
                    scales: {
                        responsive: true,
                        maintainAspectRatio: false,
                        yAxes: [{
                            ticks: {
                                fontColor: "rgba(0,0,0,0.5)",
                                fontStyle: "bold",
                                beginAtZero: false,
                                maxTicksLimit: 5,
                                padding: 20,
                            },
                            gridLines: {
                                drawTicks: false,
                                display: false
                            }
    
                        }],
                        xAxes: [{
                            gridLines: {
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                padding: 20,
                                fontColor: "rgba(0,0,0,0.5)",
                                fontStyle: "bold"
                            }
                        }]
                    }
                }
            });
        },
    },
}
</script>

<style lang="scss" scoped>
    .info-button{
        padding: 0.5vmax 1vmax;
        border-radius: var(--standard-border-radius);   
    }
    .speed-test-window{
        --window-size-width:90vmin;
        --window-size-height:70vmin;
        --padding-boost:1.5vmax;
        --header-buttons-size:1.5vmax;
        --bottom-section-size:5vmax;
        width: var(--window-size-width);
        height: var(--window-size-height);
        background: var(--theme_2);
        display: flex;
        border-radius: var(--standard-border-radius);
        flex-direction: column;
        .main-window-content{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;padding: calc(var(--standard-border-radius) + var(--padding-boost)) ;
        }
        .controller-statistic-text{
            display: flex;
            align-items: flex-end;
        }
        .button-controller-section{
            display: flex;
            width: 100%;
            border-top:var(--standart-border-size) solid var(--theme);
            height: var(--bottom-section-size);
            align-items: center;
            gap: 1vmax;
            .buttons-left-fieldset-controller{
                display: flex;
                gap: 1vmax;
                .controller-buttons-fieldset{
                    display: flex;
                    gap: 1vmax;
                }
            }
            .buttons-right-fieldset-controller{
                display: flex;
                margin-left:auto;
                gap: 1vmax;
                .controller-buttons-fieldset{
                    display: flex;
                    gap: 1vmax;
                }
            }
        }
        .controller-chart-statistic{
            display: flex;
            width: 100%;
            height: calc(100% - var(--bottom-section-size));
            .controller-chart-canvas{
                width: 100%;
                height: 20vw;
                display: flex;
            }
        }
        .controller-results-section{
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .controller-results{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
                padding: 1vmax 0;
                gap: 0.3vmax;
                .result-title{
                    font-weight: bolder;
                }
                .result-content{
                    font-size: 2vmax;
                    line-height: 1em;
                    font-weight: bolder;
                }
                .controller-unit_of_measurement{
                    line-height: 1em;
                    font-size: 1vmax;
                }
            }
        }
        .controller-header-components{
            padding:calc(var(--standard-border-radius) + var(--padding-boost)) calc(var(--standard-border-radius) + var(--padding-boost)) 0;
            display: flex;
            flex-direction: row;
            width: 100%;
            height: auto;
            align-items: center;
            min-height: var(--header-buttons-size);
            .controller-left-window-content{
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
            }
            .controller-right-window-content{
                display: flex;
                flex-direction: row;
                height: auto;
                min-height: var(--header-buttons-size);
                margin-left: auto;
                align-items: center;
                .controller-close-button{
                    width: var(--header-buttons-size);
                    height: var(--header-buttons-size);
                    border-radius: 100%;
                    background: var(--main-color);
                    color: var(--theme_2);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    i{
                        line-height: 0;
                        font-weight: 600;
                    }
                }
            }
        }
    }
</style>