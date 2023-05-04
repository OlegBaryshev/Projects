<template>
    <section class="controller-ide-component " ref="controller-ide-element" 
    :class="{'__fullscreen':data_isFullscreen}">
        <ide-header :isFullscreen="this.data_isFullscreen" :title="'Решение'"
            @fullScreen="$event => this.data_isFullscreen = $event.status"></ide-header>
        <!--this is text editor-->
        <article class="container-content">
            <template v-if="data_type == 1">
                <article class="controller-text-editor-element">
                    <form action="" class="controller-text-editor-form" @submit.prevent>
    
                    </form>
                </article>
            </template>
            <!--this is IDE-->
            <template v-else-if="data_type == 2">
                <article class="controller-ide-element">
                    <div class="controller-ide-form __style-scrollbar" @submit.prevent>
                        <aside class="Aside-controller-lines">
                            <div class="line-aside-controller" v-for="(item, index) in this.data_text.split('\n')"
                                :key="index" @click="data_selected_line = index">
                                <span>
                                    {{index + 1}}
                                </span>
                            </div>
                        </aside>
                        <div class="controller-element-textarea">
                            <textarea type="text" class="selected-line" 
                            v-model="this.data_text"
                            :class="{
                                '__selected': selected_line == index
                            }"
                            :style="{
                                'height':`calc(${ returnLines().length} * 1em)`
                            }"
                            ></textarea>
                        </div>
                    </div>
                </article>
            </template>
        </article>
    </section>
</template>

<script>
'use strict';
import ideHeader from '@/views/practice/ide/ide-header.vue'
export default {
    components: {
        ideHeader
    },
    props: {
        type: {
            default: 2,
            type: Number,
            required: true
        },
        editType: {
            default: true,
            type: Boolean,
            required: true
        },
        text: {
            type: String,
            default: '',
            required: true
        },
        selected_line: {
            default: 0,
            type: Number,
            required: true
        },
        isFullscreen:{
            default: false,
            type: Boolean,
            required: false
        }
    },
    watch: {
        'data_text': {
            handler(val, oldVal) {

            },
            deep: true,
        }
    },
    data() {
        return {
            data_type: this.type,
            data_text: this.text,
            data_selected_line: this.selected_line,
            data_isFullscreen:this.data_isFullscreen 
        }
    },
    created() {

    },
    mounted() {
        this.$el.addEventListener("mousemove", this.mouseHover);
        this.$el.addEventListener('mouseleave', this.deleteHoverEvents);
    },
    methods: {
        mouseHover(e) {
            this.addHoverEvents()
        },
        keysEvent(e) {
            console.log(e.key)
            if (e.ctrlKey && e.keyCode == 70) {

            } else {
                switch (e.keyCode) {

                }
            }
        },
        returnLines(){
            
            return this.data_text.split('\n')
        },
        Hotkeys(e) {
            if (e.keyCode == 123) {
                return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
                return false;
            }
            if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
                return false;
            }
            if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
                return false;
            }
        },
        addHoverEvents() {
            this.$el.addEventListener('keydown', this.keysEvent);
        },
        deleteHoverEvents() {
            this.$el.removeEventListener('keydown', this.keysEvent);
        },

    }
}
</script>

<style lang="scss" scoped>
.controller-ide-component{
    width: 100%;
    height: 100%;
    max-height: 50vh;
    min-height: auto;
    box-shadow:0 0 0.2vmax rgba(0, 0, 0, 0.157);
    border-radius: var(--standard-border-radius);
    // &.__fullscreen{
    //     height: 100vh;
    //     width: 100vw;
    //     position: absolute;
    //     left: 0;
    //     top: 0;
    // }
    .container-content{
        height: calc(100% - 3vmax);
    }
    .controller-ide-element{
        width: 100%;
        height: 100%;
        display: flex;
        position: relative;
        padding: 0.2vmax;
        .controller-ide-form{
            width: 100%;
            height: 100%;
            display: flex;
            overflow: auto;
            .Aside-controller-lines{
                display: flex;
                flex-direction: column;
                height: 100%;
                background: var(--theme_1);
                .line-aside-controller{
                    background: var(--theme_1);
                    font-size: 1vmax;
                    padding: 0 1vmax;
                    height: 1em;
                    text-align: center;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    span{
                        font-stretch:1em;
                        line-height: 1em;
                        font-size: 1em;
                    }
                }
            }
        }
    }
}
.controller-element-textarea {
    width: 100%;
    height: 100%;
    .selected-line{
        display: flex;
        min-width: 100%;
        font-size: 1vmax;
        line-height: 1em;
        font-stretch:1em;
        white-space:nowrap;
        resize: none;
        overflow: hidden;
    }
}
</style>