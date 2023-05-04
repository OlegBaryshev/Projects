<template>
  <article class="controller-timer-element">
    <span class="controller-timer-element">
      {{ this.getMin() }}:{{ this.getSec() }}
    </span>
  </article>
</template>

<script>
export default {
  props:{
    time:{
      type:Number,
      default:0
    },
    pause:{
      type:Boolean,
      default:false
    }
  },
  watch:{
    'pause':{
      immediate: true, 
      handler(val){
        this.setTimer()
      },
      deep: true
    },
    'data_time':{
      handler(val){
        this.$emit('tick',this.data_time);
      },
      deep: true
    },
    'time':{
      immediate: true, 
      handler(val){
        this.data_time = this.time;
      },
      deep: true
    }
  },
  data(){
   return{
    data_timer:null,
    data_time:this.time,
   } 
  },
  mounted() {
    this.setTimer()
  },
  methods:{
    setTimer(){
      if(this.data_timer!=null && this.pause){
        clearInterval(this.data_timer)
        this.data_timer = null;
      }
      else if(this.data_timer==null){
        this.data_timer = setInterval(()=>{
          this.data_time++;
        },1000);
      }
    },
    getMin(){
      return String(Math.floor(this.data_time/ 60) % 60).padStart(2,"0") 
    },
    getSec(){
      return String(Math.floor(this.data_time) % 60).padStart(2,"0")
    }
  }
}
</script>

<style>
    .controller-timer-element{
      --timer-width:auto;
      --timer-height:3vmax;
      width: var(--timer-width);
      height: var(--timer-height);
      border-radius: var(--standard-border-radius);
      background: var(--theme_2);
      padding: 0 0.5vmax;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5vmax;
      letter-spacing: 0.2vmax;
    }
</style>