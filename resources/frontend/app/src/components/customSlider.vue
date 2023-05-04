<template>
    <input type="range" class="input-range-style" 
      :value="this.value" 
      :min="this.data_min" 
      :max="this.data_max"
      :disabled="!this.data_change"
      :style="{'pointer-events':(this.data_change?'all':'none')}"
    >
</template>

<script>
export default {
  props:{
    min:{
      type:Number,
      default:0
    },
    max:{
      type:Number,
      default:100
    },
    value:{
      type:Number,
      default:50
    },
    change:{
      type:Boolean,
      default:false
    }
  },
  data(){
      return{
        data_min:this.min,
        data_max:this.max,
        data_change:this.change
      }
  }
}
</script>

<style lang="scss" scoped>
.input-range-style{
  --background-var:var(--theme_3);
  --fill-var:var(--theme_2);
  --track-size:0vmax;
  --slider-width:100%;
  --slider-height:0.7vmax;
  align-items: center;
  appearance: none;
  cursor: pointer;
  display: flex;
  width: 100%;
  overflow: hidden;
  height: var(--slider-height);
  position: relative;
  background: var(--background-var);
  border-radius: var(--standard-border-radius);
} 
.input-range-style::-webkit-slider-thumb{
  appearance: none;
  height: var(--track-size);
  width: var(--track-size);
  background: var(--fill-var);
  box-shadow: -100vw 0 0 100vw var(--fill-var),
  0 0 0.5vmax rgba(0, 0, 0, 0.205);
  z-index: 2;
}
</style>