<template>
  <section class="practice_question">
    <form class="form-controller" @submit.prevent>
        <article class="text-controller">
            <h2 class="question-title"></h2>
            <p class="question-text">
                {{ data_text }}
            </p>
        </article>
        <fieldset class="controller-answer">
            <label class="abswer-label" for=""></label>
            <input type="text" v-if="!isTextarea" v-model="this.data_input_text">
            <textarea ref="" v-else v-model="this.data_input_text"></textarea>
            <span class="symbol-controller-count">
                {{ (String(this.data_input_text).length) }} / {{ this.data_symbol_limit }}
            </span>
        </fieldset>
    </form>
  </section>
</template>

<script>
export default {
    props:{
        symbol_limit:{
            default:500,
            type:Number,
            required:false
        },
        title:{
            default:'',
            type:String,
            required:true
        },
        text:{
            default:'',
            type:String,
            required:false
        },
        isTextarea:{
            default:false,
            type:Boolean,
            required:false
        },
        input_text:{
            default:'',
            type:Boolean,
            required:false
        },
        debug:{
            default:false,
            type:Boolean,
            required:false
        }
    },
    deta(){
        return{
            data_text:this.text,
            data_title:this.title,
            data_symbol_limit:this.symbol_limit,
            data_input_text:this.input_text,
            data_debug:this.debug,
            isValid:false
        }
    },
    watch:{
        'data_input_text':{
            handler(val, oldVal){
                this.data_input_text = val.str.substring(0,this.data_symbol_limit);
                if(this.isBlank(this.data_input_text)) this.submitForm(); 
                else this.isValid = false;
            },
            deep:true,
        }
    },
    methods:{
        isBlank(str) {
            return (!str || /^\s*$/.test(str));
        },
        async submitForm({debug = this.data_debug}={}){
            this.isValid = true;
            this.$emit('isValid', {
                isValid:this.isValid,
                text:this.data_input_text
            });
        }
    }
}
</script>

<style lang="scss" scoped>

</style>