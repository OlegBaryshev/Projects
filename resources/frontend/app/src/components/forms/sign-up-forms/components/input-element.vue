<template>
    <div class="inputField">
        <input v-model="this.data_input" @input="this.$emit('getText', this.data_input)"  type="text" placeholder=" " />
        <span>{{ data_placeholder }}</span>
    </div>
</template>

<script>
export default {
    props:{
        placeholder:{
            type:String,
            default:''
        },
        inputContent:{
            type:String,
            default:''
        }
    },
    data(){
        return{
            data_placeholder:this.placeholder,
            data_input:this.inputContent
        }
    },
    watch:{
    }
}
</script>

<style>
.inputField {
  position: relative;
  width: 100%;
}

.inputField input {
    font-size: 1vmax;
    padding: 1vmax 0.5vmax;
    padding-top: 1vmax;
    border: 0.15vmax solid rgba(107, 107, 107, 0.4);
    border-radius: 0.5vmax;
    color: black;
    width: 100%;
    height: 3vmax;
}

.inputField input:focus {
  border: 0.15vmax solid #6b6b6b;
  outline: none;
}

.inputField span {
  pointer-events: none;
  opacity: 0.5;
  position: absolute;
  padding-left: 0.5vmax;
  left: 0;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  cursor: text;
}

.inputField input:focus+span,
.inputField input:not(:placeholder-shown)+span {
  top: -1em;
  transform: scale(0.7) translateY(-10%);
}

.inputField input,
.inputField span {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  -webkit-transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
}
</style>