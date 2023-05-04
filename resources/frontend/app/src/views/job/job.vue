<template>
  <div class="controller-job-page">
    <mainHeader></mainHeader>
    <section class="main-job-section">
        <article class="controller-main-page-text">
            <h1 class="Carrers-title">Go-Learn<br/>Careers</h1>
            <p class="Carrers-text">
                В Go-learn нет ограничений по городу и стране, так как мы придерживаемся принципа удаленной работы. Это распространяется на перечисленные вакансии, исключения указываем отдельно, они связаны с поддержкой офисов в конкретных городах. Работа в Stepik – это возможность не только заниматься интересными задачами, без которых мы не оставим, но и работать в образовании, делая его доступным для других.
            </p>
            <nav class="hashtag-links-list">
                <router-link to="">#{{  }}</router-link>
            </nav>
        </article>
    </section>
    <section class="job-openings-section">
        <article class="">
            <article class="">
                <h2 class="job-openings-title">Наши открытые вакансии</h2>
                <p class="job-openings-text"></p>
            </article>
            <article class="job-openings">
                <ul class="controller-job-openings-list">
                    <li class="controller-job-opening-element">
                        <h2 class="job-opening-designation"></h2>
                        <article class="right-side-article">

                        </article>
                    </li>
                </ul>
            </article>
        </article>
    </section>
    <section class="our-products-section">
        <article class="controller-inner-products-section">
            <article class="our-products-text">
                <h2 class="controller-products-title">Наши продукты</h2>
                <p class="slogan-text">
                    Образовательные продукты<br/>
                    во всём многообразии
                </p>
            </article>
            <p class="text-controller-component">
                Go-learn – российская образовательная платформа и конструктор онлайн курсов. Наша цель – сделать образование открытым и удобным, чем мы успешно занимаемся с 2013 года.
                Hyperskill, наш второй проект – англоязычная платформа, с помощью которой каждый может изучать программирование. Обучение состоит из практики – учащийся выбирает программу, которую хочет написать, далее усложняет и расширяет ее, изучая необходимую для этого теорию.
            </p>
            <ul>
                <li>

                </li>
            </ul>
        </article>
    </section>
    <section class="controller-jobs-form">
        <article class="controller-form-title">
            <h2 class="form-title"></h2>
            <p class="form-info-text">

            </p>
        </article>
        <form action="" class="jobs-form">

        </form>
    </section>
    <section class="controller-under-info">
        <article class="Resume-info-text">
            <p class="Resume-info">

                <br/><span class="more-text"></span>
            </p>
        </article>
    </section>
    <footerSection></footerSection>
  </div>
</template>

<script>
import footerSection from '@/components/sections/footer-section.vue';
import mainHeader from '@/components/panels/main-header.vue';
import {WOW} from 'wowjs';
export default {
  components:{
    mainHeader,
    footerSection
  },
  mounted(){
    new WOW().init();
  },
  data(){
    return{
        
    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
    .main-job-section{
        height: 50vmax;
        max-height: 90vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        background: var(--main-color);
        padding:5vmax var(--page-padding);
        padding-top: calc(var(--header-height) + 1vmax);
        justify-content: flex-end;
        .controller-main-page-text{
            width: 70vw;
            max-width: 100%;
            display: flex;
            gap: 1vmax;
            flex-direction: column;
            color: var(--theme_2);
            .Carrers-title{
                font-size: 3vmax;
                line-height: 1em;
                text-transform: uppercase;
                font-weight: bolder;
                padding-bottom: 2vmax;
                letter-spacing: 0.1vmax;
            }
            .Carrers-text{
                font-weight: 400;
            }
            .hashtag-links-list{
                font-weight: bold;
                letter-spacing: 0.1vmax;
            }
        }
    }
    .job-openings-section{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5vmax;
        padding:5vmax var(--page-padding);
        min-height: 65vh;
        height: 40vw;
        color: var(--theme_2);
    }
    .our-products-section{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap:1.5vmax;
        padding:5vmax var(--page-padding);
        min-height: 100vh;
        background: var(--theme_2);
        .controller-inner-products-section{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            gap: 4vmax;
            .our-products-text{
                display: flex;
                flex-direction: column;
                gap: 2.5vmax;
                .controller-products-title{
                    font-weight: bolder;
                    letter-spacing: 0.04em;
                    font-size: 2.1vmax;
                }
                .slogan-text{
                    font-weight: 300;
                }
            }
            .text-controller-component{
                font-weight: 400;
                letter-spacing: 0.04em;
            }
        }
    }
    .controller-under-info{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5vmax;
        padding:2vmax var(--page-padding);
    }
</style>