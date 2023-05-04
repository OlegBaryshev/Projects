<template>
    <div class="speed-test-page">
        <mainHeader :onScrollChange="false"></mainHeader>
        <template v-if="this.show_window || this.pause">
            <section class="onScreen-window">
                <article class="section-onScreen-content">
                    <SpeedWindow @exit="$event => exitFunction($event)" :TimeValue="this.data_time"
                        :SelectValue="this.selected" :MistakesValues="this.mistakes"></SpeedWindow>
                </article>
            </section>
        </template>
        <section class="speed-test-controller" ref="speedTestController">
            <article class="running-line-controller">
                <article class="menu-elements-controller">
                    <div class="controller-timer-element">
                        <timer :pause="this.TimerPause" :time="this.data_time" @tick="$event => this.data_time = $event">
                        </timer>
                    </div>
                </article>
                <article class="content-running-line">
                    <article class="Course-name-controller">
                        <div class="controller-left-position">Название курса:{{ this.settings.keyboard_layout }} / {{
                            this.settings.course }}</div>
                        <div class="controller-right-position">

                        </div>
                    </article>
                    <div class="running-line-overflow" ref="container">
                        <div class="controller-running-line-text">
                            <div ref="controller-running-line">
                                <span class="text-content-before" ref="last-content">{{ getLastChars(this.data_text) }}</span>
                                <span class="text-content-selected">{{ (this.data_text[this.selected]) }}</span>
                                <span class="text-content-next" ref="next-content">{{
                                    (this.data_text.substr(this.selected + 1, this.data_text.length + 1 <=
                                        this.data_text_limit ? this.data_text.length + 1 : this.data_text_limit)) }}</span>
                            </div>
                        </div>
                    </div>
                    <article class="controller-under-selector">
                        <article class="controller-left-aside-content">
                            <div class="symbol-text">Символы:{{ this.selected }}</div>
                            <div class="mistake-text">Ошибки:{{ this.sum(this.mistakes) }}</div>
                        </article>
                    </article>
                </article>
            </article>
            <article class="controller-keyboard-elements">
                <article class="keyboard-controller-element">
                    <keyboard></keyboard>
                </article>
            </article>
        </section>
    </div>
</template>
  
<script>
import mainHeader from '@/components/panels/main-header.vue';
import keyboard from '@/views/speedTest/keyboard/keyboard.vue';
import SpeedWindow from '@/views/speedTest/speedTestWindow.vue';
import timer from '@/views/speedTest/timer.vue';
export default {
    props: {
        text: {
            type: String,
            default: "",
            required: true
        }
    },
    components: {
        mainHeader,
        keyboard,
        SpeedWindow,
        timer
    },
    data() {
        return {
            data_text_limit: 30,
            data_text: this.text,
            data_time: 0,
            selected: 0,
            mistakes: [0],
            settings: {
                keyboard_layout: '',
                course: ''
            },
            TimerPause: true,
            pause: false,
            show_window: false
        }
    },
    watch: {
        'selected': {
            handler(val) {
                if (this.data_text.split("")[this.selected] == undefined) {
                    this.finishMethod();
                }
            },
            deep: true
        }
    },
    mounted() {
        this.initTextBase()
        this.setEvents()
    },
    methods: {
        randomTextElement(Arr, len, { min = 0, max = Arr.length - 1 } = {}) {
            let out = Array.from({ length: len }, () => this.randomIntFromInterval(min, max));
            return out;
        },
        initTextBase() {

        },
        randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        exitFunction(obj) {
            if (this.show_window) {
                this.show_window = this.show_window = false;
                this.selected = 0;
                this.mistakes = [0];
                this.data_time = 0;
                this.pause = false;
                this.setEvents()
            } else if (this.pause) {
                this.pause = false;
            }
            this.TimerPause = true;
        },
        setEvents() {
            window.addEventListener('keydown', this.checkRunningLine);
        },
        sum(arr) {
            return arr.reduce((sum, a) => sum + a, 0);
        },
        checkRunningLine(event) {
            let container = this.$refs['container'],
                runningLine = this.$refs['controller-running-line'],
                lastContent = this.$refs['last-content'];
            if (!(this.show_window || this.pause)) {
                if (event.keyCode > 48 && event.keyCode < 90 || event.keyCode > 186 && event.keyCode < 222 || event.keyCode == 32) {
                    if (this.data_text.split("")[this.selected] == event.key) {
                        // if(nextContent.getBoundingClientRect().width > container.getBoundingClientRect().width ){
                        //     runningLine.style.cssText =`
                        //     text-indent:calc(-${this.selected + 1} * var(--char-width));`
                        // }
                        this.selected++;
                        this.mistakes[this.selected] = 0;
                        this.TimerPause = false;
                    } else if (this.selected != 0) {
                        this.mistakes[this.selected]++;
                    }
                    this.$nextTick(() => {
                        try {
                            lastContent.scrollLeft = lastContent.clientWidth
                        } catch (e) { }
                    });
                } else if (event.keyCode == 27) {
                    this.pause = !this.pause;
                    this.TimerPause = true;
                }
            }
        },
        getLastChars(el) {
            let lim = this.selected - this.data_text_limit;
            let out = el.substr(0, this.selected);
            return out.substr(lim > 0 ? lim : 0, out.length);
        },
        finishMethod() {
            this.TimerPause = true;
            window.removeEventListener('keydown', this.checkRunningLine);
            this.show_window = true;
            this.pause = !this.pause;
        },
    }
}
</script>
  
<style lang="scss" scoped>
.menu-elements-controller {
    display: flex;
    justify-content: center;

    .controller-timer-element {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.controller-left-position {
    color: var(--theme_2);
    font-weight: 500;
}

.keyboard-controller-element {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    padding: 0 var(--page-padding);
}

.onScreen-window {
    position: fixed !important;
    z-index: 10;
    width: 100%;
    height: 100%;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .section-onScreen-content {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    &::before {
        content: '';
        width: 100%;
        height: 100%;
        background: var(--theme);
        opacity: 0.5;
        // animation: showSection 0.2s ease-in;
    }

    // @keyframes showSection {
    //     0%{
    //         opacity: 0;
    //     }
    //     100%{
    //         opacity: 1;
    //     }
    // }
}

.symbol-text {
    color: var(--theme_2);
    font-weight: 500;
}

.mistake-text {
    color: var(--theme_2);
    font-weight: 500;
}

.controller-under-selector {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.speed-test-controller {
    padding: var(--page-padding) var(--header-height) 0 var(--page-padding);
    background: var(--main-color);
    min-height: 100vh;

    .running-line-controller {
        display: flex;
        flex-direction: column;
    }
}

.controller-left-aside-content {
    display: flex;
    gap: 1vmax;
}

.content-running-line {
    width: 100%;
    height: auto;
    padding-bottom: 2vmax;
    display: flex;
    flex-direction: column;
    gap: 1vmax;

    .running-line-overflow {
        background: var(--theme_2);
        border-radius: var(--standard-border-radius);
    }

    .controller-running-line-text {
        --char-width: 1ch;
        word-spacing: var(--char-width);
        font-stretch: var(--char-width);
        font-size: 1.7vmax;
        letter-spacing: 0;
        width: 100%;
        overflow-x: hidden;
        margin: 0 auto;
        display: block;
        padding: 1vmax 0.5vmax;
        border-radius: var(--standard-border-radius);

        span {
            display: block;
            float: left;
            height: 100%;
            min-height: 1em;
            overflow-x: hidden;
            text-overflow: clip;
            white-space: pre;
            width: calc(50% - var(--char-width));
        }

        .text-content-before {
            min-width: calc(50% - var(--char-width));
            text-align: right;
            color: var(--theme);
            position: relative;
        }

        .text-content-selected {
            background: var(--main-color);
            border-radius: 0.2em;
            color: var(--theme_2);
            width: var(--char-width) !important;
        }

        .text-content-next {
            text-align: left;
        }
    }
}</style>