<template>
    <div class="separator">
        <div class="controller-separator">
            {{ data_text }}
        </div>
    </div>
</template>

<script>
export default {
    props:{
        text:{
            type:String,
            default:"or"
        }
    },
    data(){
        return{
            data_text:this.text
        }
    }
}
</script>

<style>
    .separator{
        --separator-size:2vmax;
        --border-size:0.1vmax;
        --separator-color:var(--theme);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        min-height:var(--separator-size); 
        position: relative;
        padding: 0.5vmax 0;
    }
    .separator::before{
        content: '';
        display: inline-flex;
        min-width: calc((100%/2) - var(--separator-size));
        width: 100%;
        max-width: 50%;
        height: var(--border-size);
        background: var(--separator-color);
        border-top-left-radius: var(--border-size);
        border-bottom-left-radius: var(--border-size);
    }
    .separator::after{
        content: '';
        display: inline-flex;
        min-width: calc((100%/2) - var(--separator-size));
        width: 100%;
        max-width: 50%;
        height: var(--border-size);
        background: var(--separator-color);
        border-top-right-radius: var(--border-size);
        border-bottom-right-radius: var(--border-size);
    }
    .controller-separator{
        width: calc(var(--separator-size) * 2);
        height: var(--separator-size);
        display: inline-flex;
        align-items: center;
        color: var(--theme_3);
        font-size:1vmax ;
        justify-content: center;
        text-align: center;
        border-radius: var(--separator-size);
        border: calc(var(--border-size) * 1.5) solid var(--separator-color);
    }

</style>