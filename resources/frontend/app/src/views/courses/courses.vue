<template>
  <section class="controller-courses-element">
    <mainHeader></mainHeader>
    <section class="fast-content-controller">
      <article class="controller-content">
        <article class="text-controller-content">
          <h2 class="main-section-title-content">Выбери направление своего развития </h2>
          <p class="main-section-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptate quia ex explicabo, itaque quis tenetur amet ab deleniti in iure fugiat vero, cum odit quas eligendi deserunt voluptatum unde.
          </p>
        </article>
        <ul class="fast-test-section">
          <li class="li-controller-card">
            <div class="card-controller-content wow animate__animated animate__fadeIn" 
          data-wow-delay="0.0s" @click="this.$router.push('/speed_test')">
                <span class="controller-news-before">Новинка!</span>
                <article class="content-card-controller">
                  <h4 class="controller-card-title">Печать на клавиатуре</h4>
                  <p class="controller-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </article>
            </div>
          </li>
          <li class="li-controller-card">
            <div class="card-controller-content wow animate__animated animate__fadeIn" 
          data-wow-delay="0.2s" @click="this.$router.push('/practice')">
                <span class="controller-news-before">Новинка!</span>
                <article class="content-card-controller">
                  <h4 class="controller-card-title">Практика</h4>
                  <p class="controller-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </article>
            </div>
          </li>
        </ul>
      </article>
    </section>
    <section class="controller-news-content">
        <button class="report-button wow animate__animated animate__slideInLeft" 
        data-wow-delay="0.1s" >
            <span class="controller-span-text"></span>
            <i class='bx bxs-left-arrow' ></i>
        </button>
        <nav class="controller-navigation-news"></nav>
        <button class="report-button wow animate__animated animate__slideInRight" 
        data-wow-delay="0.1s" >
            <span class="controller-span-text"></span>
            <i class='bx bxs-right-arrow' ></i>
        </button>
    </section>
    <section class="controller-elements-grid">
      
    </section>
    <footerSection></footerSection>
  </section>
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
  mounted() {
    new WOW().init();
  }
}
</script>

<style lang="scss">
  .controller-courses-element{
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .report-button{
    width: var(--report-button-size);
    height: var(--report-button-size);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    color: var(--theme_2);
    font-size: 2vmax;
    &::before{
      content: '';
      width: 100%;
      height: 100%;
      border-radius: 100%;
      border: 0.2vmax solid var(--theme_2);
      position: absolute;
      display: flex;
      justify-items: center;
      align-items: center;
      mask-composite:exclude;
      opacity: 0.8;
    }
  }
  .controller-navigation-news{
    width:calc(95% - (var(--report-button-size) - var(--gap-controller)) * 2);
    display: flex;
  }
  .controller-news-content{
    --report-button-size:5vmax;
    --gap-controller:2vmax;
    padding:3vmax var(--page-padding);
    display: flex;
    gap: var(--gap-controller);
  }
  .fast-content-controller{
    --circle-size:50vw;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    &::before{
      content: "";
      height: var(--circle-size);
      width: var(--circle-size);
      border-radius: 100%;
      position: absolute;
      top: calc(50% - var(--circle-size)/2);
      left: calc(100% - var(--circle-size)/2);
      display: flex;
    }
    .controller-content{
      padding: var(--page-padding) calc(var(--circle-size) + var(--page-padding)) 0 var(--header-height);
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 5vmax;
      .text-controller-content{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 2vmax;
        color: var(--theme_2);
        font-weight: 500;
        .main-section-title-content{
          font-size: 4vmax;
          color: var(--main-color);
          line-height: 0.9em;
          font-weight:900;
        }
      }
      .fast-test-section{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 2vmax;
        position: relative;
        .li-controller-card{
          --card-controller-width:20vmax;
          --card-controller-height:10vmax;
          width: 100%;
          max-width: 50%;
          width: var(--card-controller-width);
          position: relative;
          cursor: pointer;
          height: var(--card-controller-height);
          &:nth-child(odd) .card-controller-content{
            --first-color:var(--main-color);
            --second-color:var(--theme_2);
            color: var(--text-color) !important;
            .controller-card-title{
              color: var(--first-color);
            }
          }
          &:nth-child(even){
            color: var(--theme_2) !important;
            .controller-card-title{
              color: var(--theme_2);
            }
          }
          &:hover .card-controller-content{
            transform: translateY(-10%);
          }
          .card-controller-content{
            --news-height:2.3vmax;
            --first-color:var(--theme_2);
            --second-color:var(--main-color);
            --card-padding:1vmax;
            color: var(--theme_2);
            width: var(--card-controller-width);
            height: var(--card-controller-height);
            background:var(--second-color);
            border-radius: var(--standard-border-radius);
            padding: var(--card-padding);
            padding-top:calc(var(--news-height) + var(--card-padding));
            position: relative;
            box-shadow: 0 0 0.5vmax rgba(0, 0, 0, 0.1),
            inset -0.3vmax -0.3vmax 0.3vmax rgba(0, 0, 0, 0.05),
            inset 0.3vmax 0.3vmax 0.3vmax rgba(255, 255, 255, 0.05);
            transition: transform 0.2s ease;
            .controller-news-before{
              width: 10vmax;
              height: var(--news-height);
              background:var(--first-color);
              padding: 0.3vmax 0.5vmax;
              position: absolute;
              display: flex;
              justify-content: center;
              align-items: center;
              color: var(--second-color);
              font-weight: bold;
              left: 0;
              top: 0;
              box-shadow: inset 0.3vmax 0.3vmax 0.3vmax rgba(255, 255, 255, 0.05);
              border-radius: var(--standard-border-radius) 0 var(--standard-border-radius) 0;
            }
            .content-card-controller{
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
              gap: 0.2vmax;
              font-size: 1vmax;
              .controller-card-title{
                font-size: 1.3vmax;
              }
            }
          }
        }
      }
    }
  }
</style>