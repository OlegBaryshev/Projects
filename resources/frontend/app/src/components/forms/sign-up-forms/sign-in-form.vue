<template>
  <section class="controller-log-in-form">
    <article class="main-form-title">
      <h2 class="main-title-controller">Регистрация</h2>
    </article>
    <form class="form-element-controller" @submit.prevent>
      <template v-if="this.slide==0">
        <article class="form-element">
          <article class="input-element-controller">
            <MainInput :placeholder="'Имя'" @getText="(e)=>{
              this.form_1.name=e;
              this.checkForm()
            }"></MainInput>
            <MainInput :placeholder="'Фамилия'" @getText="(e)=>{
              this.form_1.surname=e;
              this.checkForm()
            }"></MainInput>
            <MainInput :placeholder="'Отчество'" @getText="(e)=>{
              this.form_1.lastname=e;
              this.checkForm()
            }"></MainInput>
          </article>
          <article class="input-element-controller">
            <MainInput :placeholder="'Emeil'" @getText="(e)=>{
              this.form_1.emeil=e;
              this.checkForm()
            }"></MainInput>
            <MainInput :placeholder="'Телефон'" @getText="(e)=>{
              this.form_1.tel=e;
              this.checkForm()
            }"></MainInput>
          </article>
        </article>
        <footer class="enter-footer-controller">
          <article class="left-content-controller">
            <router-link class="link-componenet" to="/log-in">Войти</router-link>
          </article>
          <article class="right-content-controller">
              <button v-if="this.slide>0" class="back-button" @click="$event=>this.slide--">Назад</button>
              <button v-if="this.slide<3" class="enter-button" @click="$event=>this.slide++" :disabled="this.form_1.status">Далее</button>
              <button v-else class="enter-button" :disabled="status">Подтвердить</button>
          </article>
        </footer>
      </template>
      <template v-else-if="this.slide == 1">
        <article class="form-element">
          <article class="input-element-controller">
            <p class="">

            </p>
            <div class="">
              <template>
                <p>

                </p>
              </template>
            </div>
          </article>
        </article>
        <footer class="enter-footer-controller">
          <article class="left-content-controller">
            <router-link class="link-componenet" to="/log-in">Войти</router-link>
          </article>
          <article class="right-content-controller">
              <button v-if="this.slide>0" class="back-button" @click="$event=>this.slide--">Назад</button>
              <button v-if="this.slide<3" class="enter-button" @click="$event=>this.slide++" :disabled="this.form_2.status">Далее</button>
              <button v-else class="enter-button" :disabled="status">Подтвердить</button>
          </article>
        </footer>
      </template>
      <template v-else-if="this.slide == 2">
        <article class="form-element">
          <article class="input-element-controller">
          </article>
        </article>
        <footer class="enter-footer-controller">
          <article class="left-content-controller">
            <router-link class="link-componenet" to="/log-in">Войти</router-link>
          </article>
          <article class="right-content-controller">
              <button v-if="this.slide>0" class="back-button" @click="$event=>this.slide--">Назад</button>
              <button v-if="this.slide<3" class="enter-button" @click="$event=>this.slide++" :disabled="this.form_3.status">Далее</button>
              <button v-else class="enter-button" :disabled="status">Подтвердить</button>
          </article>
        </footer>
      </template>
      <template v-else-if="this.slide == 3">
        <article class="form-element">
          <article class="input-element-controller">
          </article>
        </article>
        <footer class="enter-footer-controller">
          <article class="left-content-controller">
            <router-link class="link-componenet" to="/log-in">Войти</router-link>
          </article>
          <article class="right-content-controller">
              <button v-if="this.slide>0" class="back-button" @click="$event=>this.slide--">Назад</button>
              <button v-if="this.slide<3" class="enter-button" @click="$event=>this.slide++" :disabled="this.form_4.status">Далее</button>
              <button v-else class="enter-button" :disabled="status">Подтвердить</button>
          </article>
        </footer>
      </template>
      </form>
        <article class="controller-under-content">
          <seporator :text="'or'"></seporator>
          <fieldset class="Button-container">
            <button class="controller-register-buttons">
            <i class='bx bxl-google' :style="{
              'color':'var(--main-color)',
            }"></i>
            Google
          </button>
          <button class="controller-register-buttons">
            <i class='bx bxl-facebook' :style="{
              'color':'var(--main-color)',
            }"></i>
            Facebook
          </button>
          <button class="controller-register-buttons">
            <i class='bx bxl-vk' :style="{
              'color':'var(--main-color)',
            }"></i>
            Вконтакте
          </button>
        </fieldset>
      </article>
  </section>
</template>

<script>
import MainInput from '@/components/forms/sign-up-forms/components/input-element.vue'
import seporator from '@/components/forms/sign-up-forms/separator.vue'
export default {
  data(){
    return{
      slide:0,
      form_1:{
        status:true,
        name:'',
        surname:'',
        lastname:'',
        tel:'',
        emeil:''
      },
      form_2:{
        status:true,
      }
    }
  },
  components:{
    MainInput,
    seporator
  },
  methods:{
    checkForm(){
      this.form_1.status = !(this.isBlank(this.form_1.name) && this.isBlank(this.form_1.surname) && this.isBlank(this.form_1.lastname) && this.isBlank(this.form_1.tel) && this.isBlank(this.form_1.emeil));
    },
    isBlank(str) {
        return (str && !/^\s*$/.test(str));
    },
  }
}
</script>

<style>
  .controller-log-in-form{
    --border-radius:2vmax;
    max-height: 75vh;
    width: 60vmax;
    display: flex;
    flex-direction: column;
    padding: var(--border-radius);
    border-radius: var(--border-radius);
    background: var(--theme_2);
    box-shadow: 0 0 4vmax rgba(0, 0, 0, 0.2);
  }
  .link-componenet{
    color: var(--main-color);
  }
  .main-title-controller{
    font-size: 1.4vmax;
  }
  .Enter-btn-controller{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row !important;
    gap: 1vmax;
    justify-content: center;
    align-items: center;
    background: #f00;
  }
  .controller-under-content{
    margin-top: auto;
    width: 100%;
  }
  .back-button{
    display: flex;
    padding:0.7vmax 1vmax;
    border-radius: 0.5vmax;
    background: var(--theme);
    color: var(--theme_2);
    font-size: 1vmax;
  }
  .input-element-controller{
    width: 100%;
    display: flex;
    gap: 2vmax;
    justify-content: space-between;
  }
  .form-element-controller{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 2vmax;
  }
  .main-form-title{
    display: flex;
    height: 5vmax;
  }
  .enter-footer-controller{
    margin-top: auto;
    display: flex;
    height: 3vmax;
    align-items: centers;
  }
  .form-element{
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    z-index: 1;
    gap: 2vmax;
  }
  .left-content-controller{
    display: flex;
    align-items: center;
    height: 100%;
  }
  .right-content-controller{
    margin-left: auto;
    margin-right: 0;
    width: auto;
    display: flex;
    gap: 1vmax;
    align-items: center;
  }
  .enter-button{
    padding:0.7vmax 1vmax;
    border-radius: 0.5vmax;
    background: var(--main-color);
    color: var(--theme_2);
    font-size: 1vmax;
  }
  .enter-button:disabled{
    color: var(--theme_3);
    background: var(--theme);
  }
  .controller-register-buttons{
    background: var(--theme_2);
    box-shadow: 0 0 0.5vmax rgba(0, 0, 0, 0.2);
    padding: 0.5vmax 2vmax;
    width: 15vw;
    border-radius: 0.5vmax;
    font-size: 1vmax;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2vmax;
  }
  .Button-container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1vmax;
    padding:1vmax 0 ;
  }
  .controller-register-buttons i{
    line-height: 0;
    font-size: 1.5vmax;
  }
</style>