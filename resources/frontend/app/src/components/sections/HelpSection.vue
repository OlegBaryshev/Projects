<template>
  <section class="controller-help-section">
    <article class="controller-left-content">
        <article class="back-content-controller">
          <div class="empty-element"></div>
        </article>
        <article class="front-content-controller">

        </article>
    </article>
    <article class="controller-right-content">
      <article class="controller-content-section">
        <article class="controller-top-content">
          <h2 class="controller-main-title"><span class="text-content">Поддержка</span><br/>решений</h2>
        </article>
        <article class="under-content">
          <section class="left-content-section-element">
            <fieldset class="buttons-controller">
                <button 
                class="slider-button last-slide"
                :disabled="this.slider.list[slide-1] == undefined"
                @click="slide--">
                <i class='bx bx-left-arrow-alt' ></i></button>
                <button 
                :disabled="this.slider.list[slide+1] == undefined"
                @click="slide++"
                class="slider-button next-slide">
                <i class='bx bx-right-arrow-alt' ></i></button>
            </fieldset>
            <section class="slider-controller">
              <article class="controller-slide">
                <div class="controller-information-content __style-scrollbar">
                  <p class="slide-text-controller ">
                    {{ this.slider.list[slide].text }}
                  </p>
                </div>
              </article>
            </section>
          </section>
          <section class="right-content-section">
          </section>
        </article>
      </article>
    </article>
  </section>
</template>

<script>
export default {
  data(){
    return{
      slide:0,
      slider:{
        list:[
          {
            text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
          },
          {
            text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
          },
          {
            text:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'
          }
        ]
      }
    }
  }
}
</script>

<style>
  .controller-help-section{
    height: 100vh;
    width: 100%;
    display: flex;
  }
  .buttons-controller{
    display: flex;
    flex-direction: row;
    gap: 1.5vmax;
  }
  .slider-button{
    font-size: 2vmax;
    --btn-border-radius:1vmax;
    height: 2vmax;
    min-width: 7vmax;
    color: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: transparent;
    z-index: 1;
    transition: transform 0.2s ease;
  }
  .slider-controller{
    padding-top:1vmax;
    padding-right: var(--page-padding);
  }
  .slider-button::before{
    content:'';
    width: 100%;
    height: 100%;
    background: var(--theme_2);
    filter: brightness(100%);
    z-index: -1;
    position: absolute;
  }
  .controller-information-content{
    width: 100%;
    height: 20vmax;
    overflow-y: auto;
    padding: 1vmax 3vmax 3vmax 0vmax;
    color: var(--theme_2);
  }
  .slide-text-controller{
    width: 100%;
    height: auto;
  }
  .slider-button.next-slide::before{
    border-top-right-radius:var(--btn-border-radius);
    border-bottom-right-radius:var(--btn-border-radius);
  }
  .slider-button.last-slide::before{
    border-top-left-radius:var(--btn-border-radius);
    border-bottom-left-radius:var(--btn-border-radius);
  }
  .left-content-section-element{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .slider-button:disabled::before,
  .slider-button[disabled]::before{
    background: var(--theme_3) !important;
  }
  .slider-button:disabled,
  .slider-button[disabled]{
    user-select: none;
    pointer-events: none;
    color: var(--reverse_3) !important;
  }
  .slider-button:hover{
    transform: scale(1.04);
  }
  .slider-button:hover:active{
    transform: scale(0.96);
  }
  .controller-left-content{
    display: flex;
    min-width: 50%;
    height: 100%;
    width: 50vw;
    position: relative;
  }
  .text-content{
    font-size: 0.75em;
  }
  .under-content{
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .controller-top-content{
    height: 30%;
    box-sizing: content-box;
    padding-top: 17%;
    padding-bottom: 1vmax;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .controller-main-title{
    font-size: 8vmax;
    text-transform: uppercase;
    line-height:0.8em;
    font-weight:bolder;
    color: var(--main-color);
  }
  .empty-element{
    --width-offset:10vmax;
    --element-border-radius:3vmax;
    border-top-right-radius: var(--element-border-radius);
    border-bottom-right-radius: var(--element-border-radius);
    width: calc(100% - var(--width-offset));
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    z-index: -1;
    background: linear-gradient(-90deg,var(--theme_3),var(--theme));
    box-shadow: 3vmax 0 6vmax -1vmax rgba(0, 0, 0, 0.4),
    2vmax 0 6vmax -3vmax rgba(0, 0, 0, 0.3),
    1vmax 0 2vmax 0vmax rgba(0, 0, 0, 0.05),
    inset -0.3vmax 0 4vmax rgba(255, 255, 255, 0.2);
  }
  .back-content-controller{
    position: relative;
    z-index: 1;
    display: flex;
  }
  .controller-content-section{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 2;
  }
  .controller-right-content{
    width: 100%;
    max-width: 50%;
    position: relative;

  }
  .controller-right-content::before{
    content: '05';
    display: flex;
    background: linear-gradient(180deg, var(--theme_3),transparent 75%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: auto;
    height: auto;
    padding: 0.1vmax;
    z-index: -1;
    font-family: 'Roboto';
    text-transform: uppercase;
    font-size: 30vw;
    color: transparent;
    font-weight: bolder;
    position: absolute;
    left: calc(100% - 33vw);
    top: -6.8vw;
    opacity: 0.3;
  }
</style>