<template>
  <div class="home">
    <mainHeader></mainHeader>
    <article class="controller-main-page-content">
      <article class="onslide-section" ref="onslide-section" :style="{ '--pos': '1' }">
        <mainSection :randomize="this.randomize"></mainSection>
      </article>
      <article class="onslide-section" ref="onslide-section" :style="{ '--pos': '2' }">
        <helpSection :randomize="this.randomize"></helpSection>
      </article>
      <article class="onslide-section" ref="onslide-section" :style="{ '--pos': '3' }">
        <section class="main-section-controller">
          <article class="tasks-controller-content">
            <section class="main-content-element">
              <article class="main-section-content">
                <article class="controller-content-line">
                  <aside class="section-layout-element wow animate__animated animate__fadeIn" data-wow-delay="0s">
                    <article class="animated-text-section">
                      <h2 class="controller-aside-title">
                        Программы обучения современным профессиям
                      </h2>
                      <p class="controller-text-field">
                        Готовим специалистов актуальных профессий и для разных областей: учим как веб-разработке, так и
                        машинному обучению или созданию искусственного интеллекта.
                      </p>
                    </article>
                  </aside>
                  <button class="Button-controller-progress">
                    <span class="controller-digit-element">1</span>
                  </button>
                  <aside class="section-layout-element wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
                    <h2 class="controller-aside-title">
                      Бесплатные мероприятия и онлайн-марафоны
                    </h2>
                    <p class="controller-text-field">
                      Получите ответы на сложные вопросы про переход в ИТ и трудоустройство, выберите для себя одну из
                      ключевых специализаций в ИТ и получите гайд для создания карьеры с нуля.
                    </p>
                  </aside>
                </article>
                <article class="controller-content-line">
                  <aside class="section-layout-element wow animate__animated animate__fadeIn" data-wow-delay="0.0s">
                    <h2 class="controller-aside-title">База знаний</h2>
                    <p class="controller-text-field">
                      В распоряжении студентов есть онлайн-библиотека с видеоуроками, учебными статьями и подкастами.
                      Учится можно где угодно с помошью ноутбука, планшета или смартфона.
                    </p>
                  </aside>
                  <button class="Button-controller-progress">
                    <span class="controller-digit-element">2</span>
                  </button>
                  <aside class="section-layout-element wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
                    <h2 class="controller-aside-title">
                      Комьюнити
                    </h2>
                    <p class="controller-text-field">
                      Наша платформа объединяет крупнейшее сообщество ИТ-специалистов: практикующих экспертов,
                      работодателей и людей, которые осваивают новые профессии.
                    </p>
                  </aside>
                </article>
                <article class="controller-content-line">
                  <aside class="section-layout-element wow animate__animated animate__fadeIn" data-wow-delay="0.0s">
                    <h2 class="controller-aside-title">
                      Фундамент для карьерного роста
                    </h2>
                    <p class="controller-text-field">
                      Мы даем знания, которые станут фундаментом для получения других сильных ИТ-навыков. Вы получите базу,
                      которая позволит адаптироваться под запросы рынка труда и регулярно получать выгодные предложения по
                      работе.
                    </p>
                  </aside>
                  <button class="Button-controller-progress">
                    <span class="controller-digit-element">3</span>
                  </button>
                  <aside class="section-layout-element wow animate__animated animate__fadeIn" data-wow-delay="0.2s">
                    <h2 class="controller-aside-title">
                      Портфолио из ваших работ
                    </h2>
                    <p class="controller-text-field">
                      Во время обучения вы будете создавать ИТ-проекты: сайты, программы или приложения. Из них вы соберете портфолио, которое покажете работодателю или заказчику.
                    </p>
                  </aside>
                </article>
              </article>
            </section>
            <section class="controller-task-section">
              <article class="controller-tasks-title">
                <h2 class="controller-task-component">Задачи</h2>
              </article>
              <article class="main-task-content">
                <article class="content-task-element wow animate__animated animate__fadeIn" data-wow-delay="0s">
                  <h3 class="controller-task-title">Планируем</h3>
                  <p class="controller-text-task">
                    Планирование разработки проекта-самый важный пункт создания проекта.
                    Именно на этом пункте анализируется рынок и востребуемость будующего проекта,
                    а так же создается бизнес-модель и формулируется целевая аудитория.
                  </p>
                </article>
                <article class="content-task-element wow animate__animated animate__fadeIn" data-wow-delay="0.3s">
                  <h3 class="controller-task-title">Проектируем</h3>
                  <ul class="controller-task-list">
                    <li class="task-list-component">Создание макета</li>
                    <li class="task-list-component">Создание графических элементов интерфейса</li>
                  </ul>
                </article>
                <article class="content-task-element wow animate__animated animate__fadeIn" data-wow-delay="0.6s">
                  <h3 class="controller-task-title">Разрабатываем</h3>
                  <p class="controller-text-task">
                    В данный момент разработка ведется над рядом интересных проектов, нацеленных на IT-сферу и сферу
                    образования.
                    Ознакомиться с большей информацией можно <a>здесь</a>.
                  </p>
                </article>
              </article>
            </section>
          </article>
        </section>
      </article>
      <article class="onslide-section" ref="onslide-section" :style="{ '--pos': '4' }">
        <moreInfoSection :randomize="this.randomize"></moreInfoSection>
        <section class="controller-onscroll-section">
          <article class="front-content-canvas">

          </article>
          <article class="back-content-elements">
            <table class="table-controller">
              <tr class="onscroll-section-element">
                <td class="controller-flex-cell">
                  <span class="controller-section-number">01</span>
                  <h3 class="controller-main-element-text">Подбор направления</h3>
                  <article class="content-size-element">

                  </article>
                  <article class="controller-text-container">
                    <p class="more-text-controller">
                      У программирования широкий спектр возможностей и вариантов работы.
                      Можно создавать сайты и мобильные приложения,
                      игры, социальные сети, интернет-магазины,
                      разрабатывать операционные системы
                      и программное обеспечение.
                    </p>
                  </article>
                </td>
              </tr>
              <tr class="onscroll-section-element __Active">
                <td class="controller-flex-cell">
                  <span class="controller-section-number">02</span>
                  <h3 class="controller-main-element-text">
                    Выбор языка программирования
                  </h3>
                  <article class="content-size-element">

                  </article>
                  <article class="controller-text-container">
                    <p class="more-text-controller">

                    </p>
                  </article>
                </td>
              </tr>
              <tr class="onscroll-section-element">
                <td class="controller-flex-cell">
                  <span class="controller-section-number">03</span>
                  <h3 class="controller-main-element-text">
                    Курсы и практика
                  </h3>
                  <article class="content-size-element">

                  </article>
                  <article class="controller-text-container">
                    <p class="more-text-controller">
                      На нашей платформе предоставлен выбор огромного количества полезных начинающим, или же опытным
                      программистам курсов.
                    </p>
                  </article>
                </td>
              </tr>
              <tr class="onscroll-section-element">
                <td class="controller-flex-cell">
                  <span class="controller-section-number">04</span>
                  <h3 class="controller-main-element-text">
                    Резюме и портфолио
                  </h3>
                  <article class="content-size-element">

                  </article>
                  <article class="controller-text-container">
                    <p class="more-text-controller">
                      Можно начать работать на бирже, чтобы было что написать про свой опыт в резюме и добавить работы в
                      портфолио.
                      Для первого реального опыта подойдут и небольшие проекты.
                      Главное – начать.
                    </p>
                  </article>
                </td>
              </tr>
            </table>
          </article>
        </section>
      </article>
      <article class="onslide-section" ref="onslide-section" :style="{ '--pos': '5' }">
        <section class="first-section-controller">
          <article class="back-layer">
            <div class="controller-back-layer wow animate__animated animate__slideInLeft" data-wow-delay="0.1s"
              ref="controller-back-layer"></div>
          </article>
          <article class="front-layer">
            <!-- <article class="controller-top-content">
    
            </article> -->
            <article class="controller-center-content">
              <article class="text-controller-right">
                <section class="Controller-section-content">
                  <section class="Slider-controller-content">
                    <article class="text-controller">
                      <article class="controller-top-content-text">
                        <h2 class="main-text-controller">Go</h2>
                        <article class="text-controller-absolute">
                          <h4 class="little-title-controller">Проект Go Learn</h4>
                          <p class="main-section-font">
                            -Проект Go Learn - это курсовой проект студента Политехнического колледжа НовГУ,
                            группы 1991 года Барышева Олега.<br /> Основная цель этого проекта - привлечь молодежь к
                            изучению IT-специальностей
                          </p>
                        </article>
                      </article>
                      <h2 class="main-text-controller">Learn</h2>
                    </article>
                  </section>
                  <section class="controller-progress-section">
                    <label for="">
                      <h3 class="controller-progress-title">Progress bar</h3>
                    </label>
                    <fieldset class="field-set-content">
                      <customRange></customRange>
                      <article class="controller-content-input">
                        <button class="controller-button-slider">Start</button>
                        <button class="controller-button-slider">Finish</button>
                      </article>
                    </fieldset>
                  </section>
                </section>
              </article>
            </article>
          </article>
        </section>
      </article>
      <article class="onslide-section" ref="onslide-section" :style="{ '--pos': '6' }">
        <chooseSection :randomize="this.randomize"></chooseSection>
      </article>
      <article class="onslide-section" ref="onslide-section" :style="{ '--pos': '6' }">
        <!------------------------------------------------------->
        <teamSection :randomize="this.randomize"></teamSection>
        <!------------------------------------------------------->
      </article>
      <article class="onslide-section" ref="onslide-section" :style="{ '--pos': '7' }">
        <footerSection></footerSection>
      </article>
    </article>
  </div>
</template>

<script>
import BlobsScene from '@/assets/scripts/3dElements.js';
import customRange from '@/components/customSlider.vue';

import randomizeMethod from '@/assets/scripts/randomize.js';

import mainSection from '@/components/main-section.vue';
import moreInfoSection from '@/components/sections/moreInfoSection.vue';
import helpSection from '@/components/sections/HelpSection.vue';
import chooseSection from '@/components/sections/ChooseSection.vue';
import footerSection from '@/components/sections/footer-section.vue';

import mainHeader from '@/components/panels/main-header.vue';
import { WOW } from 'wowjs';
export default {
  name: 'HomeView',
  components: {
    mainSection,
    customRange,
    chooseSection,
    moreInfoSection,
    helpSection,
    mainHeader,
    footerSection
  },
  data() {
    return {
      randomize: {
        randomize: true,
        minBoost: -0.5,
        maxBoost: 0.5,
        maxLimit: 3,
        minLimit: 0.5
      },
      debug: {
        orbits: false
      },
      scene: {
        settings: {
          speed: 0.1,
          density: 1.5,
          strength: 0.2,
          frequency: 3.0,
          amplitude: 6.0,
          intensity: 7.0,
          br: { a: 0.5, b: 0.5, c: 0.5 },
          c: { a: 0.5, b: 0.5, c: 0.5 },
          o: { a: 0.3, b: 0.1, c: 0.1 },
          p: { a: 0.2, b: 0.2, c: 0.2 },
          op: 1,
          position: {
            x: -1.5,
            y: 0,
            z: 0
          },
          mesh: {
            size: 1.3,
            smooth: 64
          }
        }
        // br:{a:0.5,b:0.5,c:0.5},
        //   c:{a:0.5,b:0.5,c:0.5},
        //   o:{a:0.9,b:0.1,c:0.1},
        //   p:{a:0.2,b:0.2,c:0.2},
      }
    }
  },
  mounted() {
    new WOW().init();
    this.initSphere();
    window.addEventListener("onscroll", this.onslideInit())
  },
  methods: {
    initSphere() {
      this.randomizeSceneColor();
      this.scene.scene = new BlobsScene(this.$refs["controller-back-layer"], this.scene.settings);
    },
    randomizeSceneColor() {
      this.scene.settings.br = {
        a: randomizeMethod(this.scene.settings.br.a, this.randomize),
        b: randomizeMethod(this.scene.settings.br.b, this.randomize),
        c: randomizeMethod(this.scene.settings.br.c, this.randomize),
      }
    },
    onslideInit() {
      // let sections = this.$refs['onslide-section'];
      // for(let section of sections){
      //   let thresholdSets = [];
      //   for(let i = 0; i < 1.0;i += 0.005){
      //     thresholdSets.push(i);
      //   }
      //   const callback = function(entries,observer){
      //     const scrollTopProcent = window.pageYOffset + section.offsetHeight * 100;
      //     setSectionsStyle();
      //   }
      //   const observer = new InitsectionObserver(callback,{
      //     threshold:thresholdSets
      //   })
      // }
      // observer.observer()
      // setSectionsStyle(){

      // }
    },
  }
}
</script>
<style lang="scss">
.main-section-controller .back-layer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.main-section-content {
  --button-size: 5vmax;
  --boost-size: 1vmax;
  --gap:2vmax;
  --sections-gap:5vmax;
  width: 100%;
  padding: var(--page-padding);
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  gap: var(--sections-gap);
  .controller-content-line {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    .Button-controller-progress {
      --before-size: calc(var(--button-size) + var(--boost-size));
      height: var(--button-size);
      width: var(--button-size);
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      font-size: 2vmax;
      .controller-digit-element {
        color: var(--theme_2);
        font-weight: bolder;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        background: var(--main-color);
        border-radius: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
      }

      &::before {
        content: '';
        width: var(--before-size);
        height: var(--before-size);
        border-radius: 100%;
        background: var(--main-color);
        position: absolute;
        left: calc(50% - var(--before-size)/2);
        top: calc(50% - var(--before-size)/2);
        z-index: 0;
        opacity: 0.5;
      }
    }

    .section-layout-element {
      --button-size-controller: 5vmax;
      width: 100%;
      max-width: calc(50% - var(--gap) - (var(--button-size) + var(--boost-size))/2);
      min-height: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: var(--theme_2);
      gap: 1vmax;
    }
  }
}

.onscroll-section-element {
  --border-size: var(--standart-border-size);
  --onscroll-element-height: 20vmax;
  --element-color: var(--theme_2);
  --more-content-size: 30vw;
  --text-width-controller: 10vw;
  width: 100%;
  height: var(--onscroll-element-height);
  border-top: var(--border-size) solid var(--element-color);
  border-bottom: var(--border-size) solid var(--element-color);
  vertical-align: middle !important;

  .controller-main-element-text {
    width: var(--text-width-controller);
    color: var(--theme_2);
    height: 100%;
  }

  .more-text-controller {
    font-size: 1.2vmax;
    color: var(--theme_2)
  }

  .controller-text-container {
    width: var(--more-content-size);
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .content-size-element {
    width: calc(100% - var(--more-content-size));
    height: 100%;
    display: flex;
  }

  &.__Active {
    transition: border 0.4s;
    --element-color: var(--main-color);
    border-top: calc(var(--border-size) + 0.1vmax) solid var(--element-color);
    border-bottom: calc(var(--border-size) + 0.1vmax) solid var(--element-color);
  }

  .controller-section-number {
    --report-button-size: 5vmax;
    min-width: var(--report-button-size);
    height: var(--report-button-size);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    transition: 0.2s color;
    color: var(--element-color);
    font-size: 2vmax;

    &::before {
      content: '';
      width: 100%;
      height: 100%;
      transition: 0.2s border;
      border-radius: 100%;
      border: 0.2vmax solid var(--element-color);
      position: absolute;
      display: flex;
      justify-items: center;
      align-items: center;
      mask-composite: exclude;
      opacity: 0.8;
    }
  }
}

.controller-flex-cell {
  width: 100%;
  align-items: center;
  min-height: var(--onscroll-element-height);
  display: flex;
  height: 100%;
  gap: 2vmax;
}

.table-controller {
  border-collapse: collapse;
  width: 100%;
}

.back-content-elements {
  width: 100%;
  padding: 0 var(--page-padding);
}

.controller-onscroll-section {
  width: 100%;
  padding: var(--page-padding) 0;
}

.task-list-component::before {
  --before-list-size: 0.6vmax;
  --border-size: 0.2vmax;
  content: '';
  height: var(--before-list-size) !important;
  min-width: var(--before-list-size) !important;
  border-radius: 100%;
  display: flex;
  background: var(--theme_2);
  border: var(--border-size) solid rgb(216, 216, 216);
  margin-top: calc((var(--text-size-controller) - (var(--before-list-size) + var(--border-size)) / 2) / 2);
}

.task-list-component {
  --text-size-controller: 1.7vmax;
  display: flex;
  gap: 0.3vmax;
  font-size: var(--text-size-controller);
}

.controller-task-list,
.controller-text-task {
  font-size: 1.7vmax;
  font-weight: 300;
}

.controller-task-list {
  display: flex;
  flex-direction: column;
  gap: 0.9vmax;
}

.controller-tasks-title {
  padding: 2vmax 0;
  display: flex;
}

.controller-task-title {
  color: var(--theme_2);
  font-size: 2vmax;
  font-weight: bolder;
  text-transform: uppercase;
}

.controller-task-component {
  display: flex;
  width: 100%;
  font-size: 3vmax;
  align-items: center;
  gap: 1vmax;
  color: var(--theme_2);
  text-transform: uppercase;

  &::after {
    content: '';
    width: 100%;
    height: var(--standart-border-size);
    background: var(--theme_2);
    border-radius: var(--standart-border-size);
  }
}

.main-task-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2vmax;
}

.controller-task-section {
  display: flex;
  padding: var(--page-padding);
  flex-direction: column;
  gap: 2vmax;
  width: 100%;
  height: 100%;
}

.onslide-section {
  --onslide-content-height: 100vh;
  // height: var(--onslide-content-height);
  // position: absolute;
  top: calc((var(--pos) - 1) * var(--onslide-content-height));
  width: 100%;
  overflow: hidden;
  background: var(--theme);
  box-shadow: 0 0 3vmax rgba(0, 0, 0, 0.3);
}

.home {
  overflow: hidden;
}

.little-title-controller {
  font-weight: bold !important;
  font-family: 'Roboto', sans-serif !important;
  color: var(--main-color);
  font-size: 1.2vmax;
  text-transform: uppercase !important;
}

.Slider-controller-content {
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
}

.content-task-element {
  display: flex;
  flex-direction: column;
  gap: 1vmax;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  color: var(--theme_2);
}


.controller-progress-title {
  font-size: 1.3vmax;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  color: var(--theme_2);
}

.first-section-controller {
  width: 100%;
  min-width: 100vw;
  height: 100vh;
  display: flex;
  background: linear-gradient(45deg, transparent 50%, var(--theme) 50%),
    linear-gradient(75deg, var(--theme_3) 0%, transparent 50%);
  position: relative;
}

.progress-bar-controller[type='range'] {
  pointer-events: none;
  width: 100%;
  height: auto;
  height: 0.5vmax;
  background: transparent;
  appearance: none;
  -webkit-appearance: none;
  position: relative;
}

.progress-bar-controller::before {
  content: '';
  background-color: var(--theme_3);
  opacity: 0.5;
  position: absolute;
  height: 0.5vmax;
  width: 100%;
  vertical-align: middle;
}

.progress-bar-controller::-webkit-slider-thumb {
  --thumb-size: 1vmax;
  -webkit-appearance: none !important;
  background-color: var(--theme_2);
  height: var(--thumb-size);
  width: var(--thumb-size);
  clip-path: polygon(0 0, 100% 50%, 0 100%);
}

.controller-center-content {
  width: 100%;
  display: flex;
  height: 100%;
}

.controller-top-content-text {
  display: flex;
  gap: 1vmax;
  align-items: center;
  flex-direction: row;
  user-select: none;
}

.controller-button-slider {
  padding: 0.2vmax 0vmax;
  background: transparent;
  font-size: 1.1vmax;
  text-transform: uppercase;
  letter-spacing: 0.05vmax;
  color: var(--theme_2);
}

.main-section-font {
  line-height: 1em;
  font-weight: 500;
}

.field-set-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4vmax;
}

.Controller-section-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-right: var(--page-padding);
}

.main-text-controller {
  font-size: 11vmax;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif !important;
  line-height: 0.9em;
  font-weight: bolder !important;
  color: var(--main-color);
}

.controller-progress-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5vmax;
}

.controller-back-layer {
  overflow: hidden;
  height: 90%;

}

.text-controller {
  position: relative;
  width: 100%;
}

.controller-content-input {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.text-controller-absolute {
  font-size: 0.9vmax;
  display: flex;
  flex-direction: column;
  color: var(--theme_2);
}

.back-layer {
  position: absolute;
}

.front-layer {
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
}

.text-controller-right {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5vmax;
  width: 40%;
  justify-content: center;
  align-items: center;
  margin-left: auto;
}

.controller-second-section {
  background: var(--main-color);
}</style>