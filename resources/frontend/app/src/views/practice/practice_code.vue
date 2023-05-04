<template>
  <section class="code-practice-controller">
    <article class="controller-code-position">
      <section class="code-container">
        <article class="code-layout"
        :class="{
          '__isHorizontal' : this.data_isHorizontal
        }">
          <ide></ide>
          <terminal></terminal>
        </article>
      </section>
      <section class="content-controller">
        <article class="text-layout">
          <h2 class="controller-main-title">
            {{ data_title }}
          </h2>
          <p class="controller-text-component">
            {{ data_text }}
          </p>
        </article>
        <article class="input-output-controller">
          <table class="" v-if="data_outputs.length > 0 || data_inputs.length > 0">
            <tr class="controller-titles">
              <th class="input-title table">Inputs</th><th>Outputs</th>
            </tr>
            <tr v-for="index in Math.max([data_outputs.length,data_inputs.length])" :key="index">
              <td class="controller-table-input">
                {{ data_inputs[index] }}
              </td>
              <td class="controller-table-output">
                {{ data_outputs[index] }}
              </td>
            </tr>
          </table>
        </article>
      </section>
    </article>
  </section>
</template>

<script>
import ide from '@/views/practice/ide/ide.vue'
import terminal from '@/views/practice/ide/terminal.vue'
export default {
  props:{
    ide_data:{
      default:{
        title:'',
        text:''
      },
      required:true,
      type:Object
    },
    terminal_data:{
      default:{
        title:'',
        text:''
      },
      required:true,
      type:Object
    },
    isHorizontal:{
      default:false,
      type:Boolean,
      required:true
    },
    title: {
      default:'',
      type:String,
      required:true
    },
    text: {
      default:'',
      type:String,
      required:true
    },
    inputs:{
      default:[],
      type:Array,
      required:true
    },
    outputs:{
      default:[],
      type:Array,
      required:true
    }
  },
  data(){
    return{
      //initial variables
      data_isHorizontal:  this.isHorizontal,
      data_text:          this.data_text,
      data_title:         this.data_title,
      data_inputs:        this.inputs,
      data_outputs:       this.outputs,
      //components data
      ide:                this.ide_data,
      terminal:           this.terminal_data,
    }
  },
  components:{
    ide,
    terminal
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
  .code-practice-controller{
    width: 100%;
    height: 100%;
    border-radius: var(--standard-border-radius);
    display: flex;
    padding: 1vmax;
    background: var(--theme_2);
    .controller-code-position{
      width: 100%;
      height: 100%;
      display: flex;
      position: relative;
      .code-container{
        height: 100%;
        width: 50%;
        display: inline-flex;
        .code-layout{
          width: 100%;
          display: flex;
          flex-direction: column;
          height: 100%;
          gap: 0.5vmax;
          &.__isHorizontal{
            flex-direction: row !important;
          }
        }
      }
    }
  }
</style>