<template>
  <div class="blogView">
    <mainHeader></mainHeader>
    <section class="Main-info-blog-section">
      <aside class="aside-controller-main-text">
        <article class="Controller-blog-title-container">
          <h2 class="controller-blog-title">
            <span class="wow animate__animated animate__fadeIn" data-wow-delay="0s">Go</span><br/>
            <span class="wow animate__animated animate__fadeIn" data-wow-delay="0.3s">Learn</span><br/>
            <span class="wow animate__animated animate__fadeIn" data-wow-delay="0.6s">Blog</span>
          </h2>
          <p class="controller-main-blog-text wow animate__animated animate__fadeIn" data-wow-delay="0.9s">
            Новости, вдохновляющие материалы и многое другое от сообщества GoLearn.
          </p>
        </article>
      </aside>
    </section>
    <section class="Main-blog-section">
      <section class="Controller-main-blog-content">
        <div class="controller-image-element">

        </div>
        <div class="controller-text-element">

        </div>
      </section>
      <aside class="Controller-side-contents">
        
      </aside>
    </section>
    <section class="main-news-grid">
      <article class="controller-line-elements">
        <div class="controller-container">

        </div>
      </article>
    </section>
    <footerSection></footerSection>
  </div>
</template>

<script>
import footerSection from '@/components/sections/footer-section.vue';

import mainHeader from '@/components/panels/main-header.vue';
import { WOW } from 'wowjs';
export default {
  components:{
    mainHeader,
    footerSection
  },
  data(){
    return{
      news:{
        list:[
          {
            image:'',
            title:'',
            text:'',
            link:''
          },
          {
            image:'',
            title:'',
            text:'',
            link:''
          },
          {
            image:'',
            title:'',
            text:'',
            link:''
          },
          {
            image:'',
            title:'',
            text:'',
            link:''
          },
        ]
      }
    }
  },
  mounted(){
    new WOW().init();
  },
  methods:{
    renderImageSRC(url){
      let output = url;
      this.$.nextTick(() => {
        require(url)
      })
      return output;
    }
  }
}
</script>

<style lang="scss" scoped>
.blogView{
  .Main-info-blog-section{
    width: 100%;
    height: 100vmin;
    background: var(--main-color);
    display: flex;
    padding-top:var(--header-h);
    color: var(--theme_2) !important;
    padding: 5vmax var(--page-padding);
    padding-top: var(--header-height);
    .aside-controller-main-text{
      width: 50vw;
      max-width: 50%;
      display: flex;
      align-items: center;
    }
    .Controller-blog-title-container{
      width: 4.67em;
      font-size: 6.5vmax;
      .controller-blog-title{
        text-transform: uppercase;
        line-height: 0.9em;
      }
      .controller-main-blog-text{
        font-size: 0.17em;
        padding-left: 0.5em;
      }
    }
  }
  .Main-blog-section{
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 2vmax var(--page-padding);
    .Controller-main-blog-content{
      width: 100%;
    }
  }
  .main-location-content{
    padding:0 var(--page-padding);
  }
  .main-news-grid{
    width: 100%;

    padding:2vmax var(--);
  }
}
</style>