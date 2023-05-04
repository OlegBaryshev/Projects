<template>
  <div class="controller-leval-container">
    <span :class="`controller-leval-text data_leval_${data_leval?data_leval:''}`">{{data_leval}} leval</span>
  </div>
</template>

<script>
export default {
    props:{
        leval:{
            type:Number,
            default:5
        }
    },
    data(){
        return{
            data_leval:this.leval
        }
    },
    methods:{
        upKataLeval(){
            
        },
        lowerKataLeval(){

        },
    }
}
</script>

<style lang="scss" scoped>
.controller-leval-text{
    --color-controller:var(--theme_3);
    --border-size:0.2vmax;
    --leval-size-width:3vmax;
    --leval-size-height:3vmax;
    &::before{
        content: '';
        width: 100%;
        height: 100%;
        border: var(--border-size) solid transparent;
        background: linear-gradient(45deg,var(--color-controller),transparent) border-box;
        -webkit-mask:
            linear-gradient(#fff 0 0) padding-box, 
            linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
                mask-composite: exclude;
        filter: brightness(90%);
    }
    &.data_leval_1{
        
    }
    &.data_leval_2{
        
    }
    &.data_leval_3{
        
    }
    &.data_leval_4{
        
    }
    &.data_leval_5{
        
    }
}
</style>