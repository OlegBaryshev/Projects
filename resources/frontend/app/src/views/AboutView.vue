<template>
  <div class="about">
    <mainHeader></mainHeader>
    <article class="main-page-content">
      <section class="Main-about-section">
        <article class="controller-half-side">

        </article>
        <article class="controller-main-about-text">
          <fieldset class="controller-buttons-content wow animate__animated animate__fadeIn" data-wow-delay="0s" >
            <button class="About-us-btn">About</button>
          </fieldset>
          <h1 class="main-controller-title wow animate__animated animate__fadeIn" data-wow-delay="0.2s" >О нас и наших проектах</h1>
          <p class="main-about-text-controller wow animate__animated animate__fadeIn" data-wow-delay="0.4s" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
          <fieldset class="controller-buttons-content wow animate__animated animate__fadeIn" data-wow-delay="0.8s" >
            <button class="button-controller-content">Просмотреть</button>
          </fieldset>
        </article>
      </section>
      <section class="About-team-element">
        <article class="controller-content-components">
            <div class="controller-temp-element">
              <aside class="aside-controller-content">
                <button class="slider-button wow animate__animated animate__slideInLeft" 
                data-wow-delay="0.1s" @click="--this.slide">
                    <span class="controller-span-text"></span>
                    <i class='bx bxs-left-arrow' ></i>
                </button>
              </aside>
              <section class="controller-person-slider">
                <article class="controller-person-container">
                  <aside class="slide-controller-component">
                    <fieldset class="person-data-fieldset">
                      <div class="controller-person-avatar"></div>
                      <article class="controller-person">
                        <h3 class="person-name-controller">{{ this.persons.list[this.slide].name }} {{ this.persons.list[this.slide].surname }} {{ this.persons.list[this.slide].lastname }}</h3>
                        <span class="person-post">{{ this.persons.list[this.slide].post }}</span>
                      </article>
                    </fieldset>
                    <article class="controller-person-skills">
                      <fieldset class="controller-skill">
                        <span class="skill-title-controller">Marketing</span>
                        <div class="skill-range-controller">
                          <customRange class="controller-slider" :value="this.persons.list[this.slide].skills.Marketing"></customRange>
                        </div>
                      </fieldset>
                      <fieldset class="controller-skill">
                        <span class="skill-title-controller">Programming</span>
                        <div class="skill-range-controller">
                          <customRange class="controller-slider" :value="this.persons.list[this.slide].skills.Programming"></customRange>
                        </div>
                      </fieldset>
                      <fieldset class="controller-skill">
                        <span class="skill-title-controller">Design</span>
                        <div class="skill-range-controller">
                          <customRange class="controller-slider" :value="this.persons.list[this.slide].skills.Design"></customRange>
                        </div>
                      </fieldset>
                      <fieldset class="controller-skill">
                        <span class="skill-title-controller">Teamwork</span>
                        <div class="skill-range-controller">
                          <customRange class="controller-slider" :value="this.persons.list[this.slide].skills.Teamwork"></customRange>
                        </div>
                      </fieldset>
                    </article>
                  </aside>
                  <article class="controller-main-person-content">
                    <p class="controller-main-text">
                      {{ this.persons.list[this.slide].info }}
                    </p>
                  </article>
                </article>
              </section>
              <aside class="aside-controller-content">
                <button class="slider-button wow animate__animated animate__slideInRight" 
                data-wow-delay="0.1s" @click="this.slide++">
                    <span class="controller-span-text"></span>
                    <i class='bx bxs-right-arrow' ></i>
                </button>
              </aside>
            </div>
        </article>
      </section>
      <section class="FAQ-controller-component">
        <div class="controller-faq-align">
          <div class="controller-max-height">
            <article class="controller-left-content-side">
              <h2 class="FAQ-title-controller">FAQ's</h2>
            </article>
            <article class="controller-right-content-side">
              <table class="controller-table-elements">
                <tr class="table-row-controller wow animate__animated animate__fadeIn" 
                :data-wow-delay="`${index * 0.2}s`" v-for="(item,index) in Faq.list" :key="index">
                  <td class="table-cell-controller">
                    <div class="inner-content-controller-cell">
                      <article class="main-text-container">
                        {{item.text}}
                      </article>
                      <div class="controller-add-button">
                        <div class="controller-btn-overflow">
                          <span class="add-button-content content_1">
                            <i class='bx bx-plus'></i>
                          </span>
                          <span class="add-button-content content_2">
                            <i class='bx bx-chevron-right'></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </article>
          </div>
        </div>
      </section>
      <sponsors></sponsors>
      <footerSection></footerSection>
    </article>
  </div>
</template>
<script>
import mainHeader from '@/components/panels/main-header.vue';
import footerSection from '@/components/sections/footer-section.vue'
import sponsors from '@/components/sections/sponsors.vue'
import customRange from '@/components/customSlider.vue';
import { WOW } from 'wowjs';
export default {
  name: 'HomeView',
  components:{
    mainHeader,
    footerSection,
    sponsors,
    customRange
  },
  data(){
    return{
      slide:0,
      persons:{
        list:[
          {
            image_url:'',
            name:'Steve',
            surname:'Jobs',
            lastname:'',
            post:"Apple's CEO",
            skills:{
              Marketing:100,
              Programming:65,
              Design:90,
              Teamwork:87,
            },
            info:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
          },
          {
            image_url:'',
            name:'Jeffrey',
            surname:'Bezos',
            lastname:'',
            post:"Amazon's CEO",
            skills:{
              Marketing:96,
              Programming:70,
              Design:60,
              Teamwork:73,
            },
            info:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
          },
          {
            image_url:'',
            name:'Jack',
            surname:'Ma',
            lastname:'',
            post:"Alibaba's CEO",
            skills:{
              Marketing:92,
              Programming:40,
              Design:50,
              Teamwork:100,
            },
            info:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
          },
          {
            image_url:'',
            name:'Егор',
            surname:'Малышев',
            lastname:'',
            post:'CEO Novsu',
            skills:{
              Marketing:100,
              Programming:100,
              Design:100,
              Teamwork:0,
            },
            info:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
          },
          {
            image_url:'',
            name:'Марк',
            surname:'Нор',
            lastname:'',
            post:'Разработчик',
            skills:{
              Marketing:100,
              Programming:10,
              Design:10,
              Teamwork:90,
            },
            info:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
          },
        ]
      },
      Faq:{
        list:[
          {
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            link:'/'
          },
          {
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            link:'/'
          },
          {
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            link:'/'
          },
          {
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            link:'/'
          },
          {
            text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            link:'/'
          }
        ]
      }
    }
  },
  watch:{
    slide:{
      handler(val){
        this.slide = val >= this.persons.list.length?0:this.slide<0?this.persons.list.length-1:this.slide;
      },
      deep:true,
    }
  },
  mounted(){
    new WOW().init();
  }
}
</script>
<style lang="scss" scoped>
  .button-controller-content{
    display: flex;
    justify-content: center;
    align-items: center;    
    padding:0.5vmax 1vmax;
    border-radius: 0.2vmax;
    font-weight: 400;
    font-size: 1.3vmax;
    background: var(--theme_2);
    color: var(--reverse_2);
  }
  .controller-slider{
    --fill-var:var(--main-color) !important;
    --background-var:var(--theme_2) !important;
  }
  .About-team-element{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100%;
      .controller-content-components{
        display: flex;
        width: 100%;
        height: 100%;
        position: relative;
        padding: var(--page-padding);
        .controller-temp-element{
          display: flex;
          justify-content: space-between;
          width: 100%;
          align-items: center;
          height: 100%;
          position: relative;
          gap: 2vmax;
          .controller-person-slider{
            width: 100%;
            display: flex;
            height: 100%;
            .controller-main-person-content{
              width: 100%;
              max-width: 50%;
              height: 100%;
              display: flex;
              align-items: center;
              color: var(--theme_2);
              .controller-main-text{
                width: 100%;
                display: flex;
                padding: 4vmax 0;
              }
            }
            .controller-person-container{
              width: 100%;
              height: 100%;
              display: flex;
              border-top:0.2vmax solid var(--theme_2);
              border-bottom:0.2vmax solid var(--theme_2);
              padding: var(--page-padding) 0;
              align-items: center;
              gap: 2vmax;
              .slide-controller-component{
                max-width: 30vw;
                width: 100%;
                display: flex;
                flex-direction: column;
                gap: 2vmax;
                .controller-person-skills{
                  width: 100%;
                  display: flex;
                  flex-direction: column;
                  gap: 0.5vmax;
                  .controller-skill{
                    --range-width:20vw;
                    width: 100%;
                    display: flex;
                    .skill-range-controller{
          
                      width: var(--range-width);
                      display: flex;
                      align-items: center;
                    }
                    .skill-title-controller{
                      width: calc(100% - var(--range-width));
                      display: flex;
                      color: var(--theme_2);
                    }
                  }
                }
                .person-data-fieldset{
                  --avatar-controller-size:7vmax;
                  width: 100%;
                  display: flex;
                  gap: 1vmax;
                  align-items: center;
                  height: var(--avatar-controller-size);
                  .controller-person-avatar{
                    height: var(--avatar-controller-size);
                    width: var(--avatar-controller-size);
                    border-radius: 100%;
                    display: flex;
                    align-items: center;
                    justify-items: center;
                    background: var(--theme_2);
                  }
                  .controller-person{
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    color: var(--theme_2);
                    font-size: 1.5vmax;
                  }
                }
              }
            }
          }
          .aside-controller-content{
            padding: 1vmax;
            position: relative;
          }
        }
      }
    }
  .slider-button{
      --report-button-size:5vmax;
      min-width: var(--report-button-size);
      min-height: var(--report-button-size);
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      color: var(--theme_2);
      font-size: 2vmax;
  }
  .slider-button::before{
      content: '';
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: 0.2vmax solid var(--theme_2);
      position: absolute;
      background: transparent;
      display: flex;
      justify-items: center;
      align-items: center;
      mask-composite:exclude;
      opacity: 0.8;
  }
  .About-us-btn{
    padding:0.5vmax 1.5vmax;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: auto;
    border-radius: calc(1em + 0.5vmax);
    background: var(--main-color);
    color:  var(--theme_2);
  }
  .main-page-content{
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    .Main-about-section{
      height: 100vh;
      width: 100%;
      display: flex;
      padding-top:var(--header-height);
      color: var(--theme_2);
      .controller-half-side{
        min-width: 50vw;
        height: 100%;
        display: flex;
        flex-direction: column;
      }
      .controller-main-about-text{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1vmax;
        padding-bottom: var(--page-padding);
        padding-right: var(--page-padding);
        .main-controller-title{
          font-size: 3vmax;
          text-transform: uppercase;
        }
      }
    }
    .FAQ-controller-component{
      background: var(--main-color);
      height: 100vh;
      padding: var(--page-padding) 0;
      display: flex;
      .controller-max-height{
        display: flex;
      }
      .controller-faq-align{
        display: flex;
        align-items: center;
        .controller-left-content-side{
          padding-left: var(--page-padding);
          min-width: 50vw;
          .FAQ-title-controller{
            font-size: 4vmax;
            font-weight: bolder;
            color: var(--theme_2);
          }
        }
        .controller-right-content-side{
          padding-right: var(--page-padding);
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .controller-table-elements{
            --row-padding:1.5vmax;
            width: 100%;
            height: auto;
            border-collapse: collapse;
            .table-row-controller{
              width: 100%;
              border-top: var(--standart-border-size) solid var(--theme_2);
              border-bottom: var(--standart-border-size) solid var(--theme_2);
              cursor: pointer;
              &:hover .controller-add-button .add-button-content{
                transform: translateX(calc(-100% - 1ch/2.5));
              }
              .table-cell-controller{
                width: 100%;
                padding: var(--row-padding) 0;
                height: auto;
                .inner-content-controller-cell{
                  width: 100%;
                  height: auto;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  filter: brightness(110%);
                  .main-text-container{
                    width: 100%;
                    padding-right: var(--page-padding);
                    color: var(--theme_2);
                    font-size: 1vmax;
                  }
                  .controller-add-button{
                    --add-button-size:2vmax;
                    width:var(--add-button-size);
                    height:var(--add-button-size);
                    display: flex;
                    background: transparent;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    color: var(--theme_2);
                    line-height: 0; 
                    &::before{
                      content: '';
                      display: flex;
                      position: absolute;
                      width: var(--add-button-size);
                      height: var(--add-button-size);
                      border-radius: 100%;
                      border: var(--standart-border-size) solid var(--theme_2);
                    }
                    .controller-btn-overflow{
                      width: 100%;
                      height: 100%;
                      overflow: hidden;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      position: relative;
                      border-radius: 100%;
                    }
                    .content_2{
                      left: 100%;
                    }
                    .add-button-content{
                      position: absolute;
                      transition: transform 0.2s ease;
                    }
                  }
                }
              }
            }
          }
        }

      }
    }
  }
</style>