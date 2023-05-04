<template>
  <article class="controller-card-element">
    <article class="before-element-controller">
      <div class="controller-points" ref="points-container">
          <span class="controller-top-point point-style" ref="top_point"></span>
          <span class="controller-left-point point-style" ref="left_point"></span>
          <span class="controller-right-point point-style" ref="right_point"></span>
          <span class="controller-bottom-point point-style" ref="bottom_point"></span>
      </div>
    </article>
    <article class="main-content-controller">
      <p class="main-card-text-controller">
        {{ card_data.text }}
      </p>
    </article>
    <article class="after-element-controller">
      <div class="side-controller">
        
      </div>
    </article>
  </article>
</template>

<script>
export default {
  props:{
    text:{
      type:String,
      default:''
    },
    valid:{
      type:Array,
      default:[]
    },
    connection:{
      type:Array,
      default:[]
    }
  },
  data(){
    return{
      card_data:{
        text:this.text,
        points:{

        },
        connection:[],
        valid:[],
        points:{
          top:this.$refs.top_point,
          bottom:this.$refs.bottom_point,
          left:this.$refs.left_point,
          right:this.$refs.right_point
        },
      }
    }
  },
  methods:{
    writeLine(){

    }
  }
}
</script>

<style>
  .controller-card-element{
    --side-size:0.7vmax;
    --corner-size:var(--side-size);
    --min-height-element:2.5vmax;
    --max-height-element:10vmax;
    --min-width-element:5vmax;
    --max-width-element:15vmax;
    --card-opacity:0.5;
    width: auto;
    height: auto;
    min-height:var(--min-height-element);
    min-width:var(--min-width-element);
    max-height:var(--max-height-element);
    max-width:var(--max-width-element);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .main-content-controller{

  }
</style>