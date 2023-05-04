<template>
  <div class="custom-select-container">
    <span class="controller-select-buttom" @click="this.SelectClick()">
      {{ data_select_name }}
    </span>
    <article class="controller-select-window animate__animated animate__fadeIn" v-if="data_select_flag">
      <article class="controller-decoration-element">
        <nav class="controller-elements __style-scrollbar">
          <button v-for="(element,index) in data_elements.list" :key="index" class="controller-button-link" @click="$event=>btnClickMethod(element.link)">{{ element.text }}</button>
        </nav>
      </article>
    </article>
  </div>
</template>
<script>
export default {
  props:{
    select_flag:{
      required:false,
      type:Boolean,
      default:false
    },
    select_name:{
      default:'',
      type:String,
      required:true
    },
    show_controller:{
      type:Boolean,
      default:false
    },
    elements:{
      type:Object,
      default:{
        list:[]
      },
      required:true
    }
  },
  data(){
    return{
      data_select_flag:this.select_flag,
      data_select_name:this.select_name,
      data_elements:this.elements
    }
  },
  watch:{

  },
  mounted(){
    this.initEvents()
  },
  methods:{
    btnClickMethod(path){
      this.$router.push(path)
    },
    initEvents(){
      window.addEventListener("resize",this.CloseWindow);
      window.addEventListener("scroll",this.CloseWindow);
      window.addEventListener('popstate',this.CloseWindow)
    },
    CloseWindow(){
      this.data_select_flag = false;
    },
    SelectClick(){
      this.data_select_flag =!this.data_select_flag
    }
  }
}
</script>

<style lang="scss" scoped>
@use 'sass:math';
  .custom-select-container{
    --top-padding:0vmax;
    --select-height:1em;
    --select-window-margin:1vmax;
    --battons-gap:0vmax;
    --button-height:2.5vmax;
    --max-buttons-count:7;
    --min-window-size-width:9vmax;
    --max-window-size-width:25vmax;
    --min-window-size-height:calc(var(--button-height) + var(--top-padding));
    --max-window-size-height:calc((var(--button-height) + var(--battons-gap)) * var(--max-buttons-count) - var(--battons-gap) + var(--top-padding));
    --selector-size:1vmax;
    --window-color:var(--theme_2);
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    .controller-select-buttom{
      height: var(--select-height);
      padding: 0;
      background: transparent;
      font-size: inherit;
      font-weight: inherit;
      color: inherit;
      line-height: 1em;
      cursor: pointer;
    }
    .controller-select-window{
      top: calc(var(--select-height) + var(--select-window-margin) + var(--selector-size));
      position: absolute;
      height: auto;
      min-width: 15vmax;
      width: auto;
      min-width: var(--min-window-size-width);
      max-width: var(--max-window-size-width);
      min-height: var(--min-window-size-height);
      max-height: var(--max-window-size-height);
      display: flex;
      flex-direction: column;
      filter: drop-shadow(0 0 0.2vmax rgba(0, 0, 0, 0.2));
      .controller-decoration-element{
        position: relative; 
        height: auto;
        display: flex;
        justify-content: center;
        min-width: var(--min-window-size-width);
        max-width: var(--max-window-size-width);
        min-height: var(--min-window-size-height);
        max-height: var(--max-window-size-height);
        width: auto;
        &::before{
          content: '';
          left: calc(50% - var(--selector-size)/2);
          top: calc(var(--selector-size) * -0.45);
          border-radius: var();
          transform: rotate(135deg);
          height: var(--selector-size);
          width: var(--selector-size);
          display: flex;
          z-index: 1;
          position: absolute;
          background: var(--window-color);
          clip-path: polygon(0% 0%, 100% 100%, 0% 100%);
          border-bottom-left-radius: var(--standard-border-radius);
        }
        .controller-elements{
          background: var(--window-color);
          padding-top:var(--top-padding);
          width: auto;
          border-radius: var(--standard-border-radius);
          min-width: var(--min-window-size-width);
          max-width: var(--max-window-size-width);
          min-height: var(--min-window-size-height);
          max-height: var(--max-window-size-height);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          overflow-x:visible;
          gap: var(--battons-gap);
          .controller-button-link{
            width: auto;
            min-height: var(--button-height);
            background: var(--window-color);
            font-family: inherit;
            font-weight: 500;
            font-size: 1.2vmax;
            overflow-x: auto;

          }
        }
      }
    }
  }
</style>