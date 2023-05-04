<template>
  <section class="controller-keyboard-outset">
    <article class="keys-grid-controller">
        <div class="controller-content">
            <div class="line-component-controller">
                <button class="controller-key-top key-element key-style" 
                v-for="(item,index) of keyboard.keys[0]" 
                :key="index"
                :style="{'--key-color':this.getPalleteByFinger(item.finger)}">
                    <span>{{ item[this.keyboard.layout][this.keyboard.shift?'s':'ns'] }}</span>
                </button>
                <button class="controller-key-backspace key-style">
                    <i class='bx bx-arrow-back'></i>
                </button>
            </div>
            <div class="line-component-controller">
                <button class="controller-key-tab key-style">
                    <i class='bx bx-arrow-to-right' ></i>
                    <span>Tab</span>
                </button>
                <button class="controller-key-1 key-element key-style" 
                v-for="(item,index) of keyboard.keys[1]" 
                :key="index"
                :style="{'--key-color':this.getPalleteByFinger(item.finger)}">
                    <span>{{ item[this.keyboard.layout][this.keyboard.shift?'s':'ns'] }}</span>
                </button>
            </div>
            <div class="line-component-controller">
                <button class="controller-key-capslock key-style">Capslock</button>
                <button class="controller-key-2 key-element key-style" 
                v-for="(item,index) of keyboard.keys[2]" 
                :key="index"
                :style="{'--key-color':this.getPalleteByFinger(item.finger)}">
                    <span>{{ item[this.keyboard.layout][this.keyboard.shift?'s':'ns'] }}</span>
                </button>
                <button class="controller-key-Enter key-style">Enter</button>
            </div>
            <div class="line-component-controller">
                <button class="controller-key-shift left-shift key-style">Shift</button>
                <button class="controller-key-3 key-element key-style" 
                v-for="(item,index) of keyboard.keys[3]" 
                :key="index"
                :style="{'--key-color':this.getPalleteByFinger(item.finger)}">
                    <span>{{ item[this.keyboard.layout][this.keyboard.shift?'s':'ns'] }}</span>
                </button>
                <button class="controller-key-shift right-shift key-style">Shift</button>
            </div>
        </div>

        <button class="under-buttons-elements controller-key-space key-style"></button>
    </article>
  </section>
</template>

<script>
export default {
    data(){
        return {
            keyboard:{
                layout:'Russian',
                shift: false,
                keys:[
                    [
                        {
                            Russian:{s:'Ё',ns:'ё'},
                            English:{s:'\~',ns:'\`'},
                            finger:0
                        },
                        {
                            Russian:{s:'!',ns:'1'},
                            English:{s:'!',ns:'1'},
                            finger:1
                        },
                        {
                            Russian:{s:'\"',ns:'2'},
                            English:{s:'@',ns:'2'},
                            finger:1
                        },
                        {
                            Russian:{s:'№',ns:'3'},
                            English:{s:'#',ns:'3'},
                            finger:2
                        },
                        {
                            Russian:{s:';',ns:'4'},
                            English:{s:'$',ns:'4'},
                            finger:3
                        },
                        {
                            Russian:{s:'%',ns:'5'},
                            English:{s:'%',ns:'5'},
                            finger:4
                        },
                        {
                            Russian:{s:':',ns:'6'},
                            English:{s:'^',ns:'6'},
                            finger:4
                        },
                        {
                            Russian:{s:'?',ns:'7'},
                            English:{s:'&',ns:'7'},
                            finger:5
                        },
                        {
                            Russian:{s:'*',ns:'8'},
                            English:{s:'*',ns:'8'},
                            finger:6
                        },
                        {
                            Russian:{s:'(',ns:'9'},
                            English:{s:'(',ns:'9'},
                            finger:7
                        },
                        {
                            Russian:{s:')',ns:'0'},
                            English:{s:')',ns:'0'},
                            finger:8
                        },
                        {
                            Russian:{s:'_',ns:'-'},
                            English:{s:'_',ns:'-'},
                            finger:8
                        },
                        {
                            Russian:{s:'+',ns:'='},
                            English:{s:'+',ns:'='},
                            finger:8
                        }
                    ],
                    [
                        {
                            Russian:{s:'Й',ns:'й'},
                            English:{s:'Q',ns:'q'},
                            finger:1
                        },
                        {
                            Russian:{s:'Ц',ns:'ц'},
                            English:{s:'W',ns:'w'},
                            finger:2
                        },
                        {
                            Russian:{s:'У',ns:'у'},
                            English:{s:'E',ns:'e'},
                            finger:3
                        },
                        {
                            Russian:{s:'К',ns:'к'},
                            English:{s:'R',ns:'r'},
                            finger:4
                        },
                        {
                            Russian:{s:'Е',ns:'е'},
                            English:{s:'T',ns:'t'},
                            finger:4
                        },
                        {
                            Russian:{s:'Н',ns:'н'},
                            English:{s:'Y',ns:'y'},
                            finger:5
                        },
                        {
                            Russian:{s:'Г',ns:'г'},
                            English:{s:'U',ns:'u'},
                            finger:5
                        },
                        {
                            Russian:{s:'Ш',ns:'ш'},
                            English:{s:'I',ns:'i'},
                            finger:6
                        },
                        {
                            Russian:{s:'Щ',ns:'щ'},
                            English:{s:'O',ns:'o'},
                            finger:7
                        },
                        {
                            Russian:{s:'З',ns:'з'},
                            English:{s:'P',ns:'p'},
                            finger:8
                        },
                        {
                            Russian:{s:'Х',ns:'х'},
                            English:{s:'{',ns:'['},
                            finger:8
                        },
                        {
                            Russian:{s:'Ъ',ns:'ъ'},
                            English:{s:'}',ns:']'},
                            finger:8
                        },
                        {
                            Russian:{s:'/',ns:'\\'},
                            English:{s:'|',ns:'\\'},
                            finger:0
                        },
                    ],
                    [
                        {
                            Russian:{s:'Ф',ns:'ф'},
                            English:{s:'A',ns:'a'},
                            finger:1
                        },
                        {
                            Russian:{s:'Ы',ns:'ы'},
                            English:{s:'S',ns:'s'},
                            finger:2
                        },
                        {
                            Russian:{s:'В',ns:'в'},
                            English:{s:'D',ns:'d'},
                            finger:3
                        },
                        {
                            Russian:{s:'А',ns:'а'},
                            English:{s:'F',ns:'f'},
                            finger:4
                        },
                        {
                            Russian:{s:'П',ns:'п'},
                            English:{s:'G',ns:'g'},
                            finger:4
                        },
                        {
                            Russian:{s:'Р',ns:'р'},
                            English:{s:'H',ns:'h'},
                            finger:5
                        },
                        {
                            Russian:{s:'О',ns:'о'},
                            English:{s:'J',ns:'j'},
                            finger:5
                        },
                        {
                            Russian:{s:'Л',ns:'л'},
                            English:{s:'K',ns:'k'},
                            finger:6
                        },
                        {
                            Russian:{s:'Д',ns:'д'},
                            English:{s:'L',ns:'l'},
                            finger:7
                        },
                        {
                            Russian:{s:'Ж',ns:'ж'},
                            English:{s:':',ns:';'},
                            finger:8
                        },
                        {
                            Russian:{s:'Э',ns:'э'},
                            English:{s:'\"',ns:'\''},
                            finger:8
                        },
                    ],
                    [
                        {
                            Russian:{s:'Я',ns:'я'},
                            English:{s:'Z',ns:'z'},
                            finger:1
                        },
                        {
                            Russian:{s:'Ч',ns:'ч'},
                            English:{s:'X',ns:'x'},
                            finger:2
                        },
                        {
                            Russian:{s:'С',ns:'с'},
                            English:{s:'C',ns:'c'},
                            finger:3
                        },
                        {
                            Russian:{s:'М',ns:'м'},
                            English:{s:'V',ns:'v'},
                            finger:4
                        },
                        {
                            Russian:{s:'И',ns:'и'},
                            English:{s:'B',ns:'b'},
                            finger:4
                        },
                        {
                            Russian:{s:'Т',ns:'т'},
                            English:{s:'N',ns:'n'},
                            finger:5
                        },
                        {
                            Russian:{s:'Ь',ns:'ь'},
                            English:{s:'M',ns:'m'},
                            finger:5
                        },
                        {
                            Russian:{s:'Б',ns:'б'},
                            English:{s:'<',ns:','},
                            finger:6
                        },
                        {
                            Russian:{s:'Ю',ns:'ю'},
                            English:{s:'>',ns:'.'},
                            finger:7
                        },
                        {
                            Russian:{s:',',ns:'.'},
                            English:{s:'?',ns:'/'},
                            finger:8
                        },
                    ]
                ]
            }
        }
    },
    mounted(){
        window.addEventListener('keydown',this.checkKey);
    },
    methods:{
        getPalleteByFinger(finger){
            switch(finger){
                case 1:case 8:return 'var(--palette_1)';
                case 2:case 7:return 'var(--palette_2)';
                case 3:case 6:return 'var(--palette_3)';
                case 4:return 'var(--palette_4)';
                case 5:return 'var(--palette_5)';
                case 0:default:return 'var(--palette_0)';
            }
        },
        checkKey(event){
            if(event.shiftKey){
                
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .keys-grid-controller{
        --keyboard-side-padding:2vmax;
        --keyboard-padding:2vmax;
        --keys-border-radius:0.5vmax;
        --key-size:4vmax;
        --gap:0.5vmax;
        --shadow-offset:0.1vmax;
        --negative-shadow-offset:calc(var(--shadow-offset) * -0.1);
        --shadow-opacity:0.3;

        --palette_0:var(--theme);
        --palette_1:#79e1ac;
        --palette_2:#62e4fe;
        --palette_3:#f99dc2;
        --palette_4:#fdc081;
        --palette_5:#ffef80;

        width: auto;
        height: auto;
        padding: var(--keyboard-padding) var(--keyboard-side-padding);
        display: grid;
        border-radius: var(--standard-border-radius);
        background: var(--theme_2);
        border-bottom: 0.2vmax solid var(--theme_3);
        .key-style{
            color: var(--reverse);
            --key-color:var(--palette_0);
            background: var(--key-color);
            box-shadow: inset var(--negative-shadow-offset) var(--negative-shadow-offset) var(--shadow-offset) rgba(0, 0, 0, var(--shadow-opacity)),
            inset var(--shadow-offset) var(--shadow-offset) var(--shadow-offset) rgba(255, 255, 255, var(--shadow-opacity));
        }
        .key-element{
            width: var(--key-size);
            height: var(--key-size);
            padding: 0.5vmax;
        }
        .controller-key-tab{
            display: flex;
            width: calc(var(--key-size) * 1.5);
            height: var(--key-size);
            padding: 0.5vmax;
        }
        .controller-key-backspace{
            width: calc(var(--key-size) * 1.5);
            display: flex;
            height: var(--key-size);
            padding: 0.5vmax;
        }
        .line-component-controller{
            display: flex;
            height: var(--key-size);
        }
        .controller-key-shift{
            width: calc(var(--key-size) * 2.25);
            height: var(--key-size);
        }
        .controller-key-capslock{
            width: calc(var(--key-size) * 2);
            height: var(--key-size);
        }
        .controller-key-Enter{
            width: calc(var(--key-size) * 1.5);
            height: var(--key-size);
        }
        .controller-key-space{
            display: flex;
            margin-left: calc(var(--key-size) * 3.75);
            width: calc(var(--key-size) * 6);
            height: var(--key-size);
            margin-top: var(--gap);
            border-radius: var(--keys-border-radius);
        }
        .controller-key-backspace{
            border-top-right-radius: var(--keys-border-radius);
        }
        .controller-key-top.key-element:nth-child(1){
            border-top-left-radius: var(--keys-border-radius);
        }
        .right-shift{
            border-bottom-right-radius: var(--keys-border-radius);
        }
        .left-shift{
            border-bottom-left-radius: var(--keys-border-radius);
        }
    }
</style>