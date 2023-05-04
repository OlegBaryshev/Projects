<template>
  <section class="controller-log-in-form">
    <article class="main-form-title">
      <h2 class="main-title-controller">Авторизация</h2>
      <p>
        
      </p>
    </article>
    <form class="form-element-controller" @submit.prevent>
      <article class="form-element">
          <MainInput :placeholder="'Email/Телефон'"  @getText="(e)=>{
            this.login=e;
            this.checkForm()
          }"></MainInput>
          <MainInput :placeholder="'Пароль'"  @getText="(e)=>{
            this.password=e;
            this.checkForm()
          }"></MainInput>
          <MainInput :placeholder="'Пин-код'" @getText="(e)=>{
            this.PIN=e;
            this.checkForm()
          }"></MainInput>
          <article>
            
          </article>
      </article>
      <footer class="enter-footer-controller">
        <article class="left-content-controller">
          <router-link class="link-componenet" to="/sign-in">Регистрация</router-link>
          <!-- <button>Вернуться</button> -->
        </article>
        <article class="right-content-controller">
          <button class="enter-button" @click="this.testForm" :disabled="status">Подтвердить</button>
        </article>
      </footer>
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
      status:true,
      login:'',
      password:'',
      PIN:''
    }
  },
  components:{
    MainInput,
    seporator
  },
  watch:{
  },
  methods:{
    checkForm(){
      this.status = !(this.isBlank(this.login) && this.isBlank(this.password) && this.isBlank(this.PIN));
    },
    isBlank(str) {
        return (str && !/^\s*$/.test(str));
    },
    testForm(){
      console.log(this.enterStatus)
    }
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
  .main-title-controller{
    font-size: 1.4vmax;
  }
  .controller-under-content{
    margin-top: auto;
    width: 100%;
  }
  .input-element-controller{
    width: 100%;
    display: flex;
    gap: 2vmax;
    justify-content: space-between;
  }
  .link-componenet{
    color: var(--main-color);
    font-size: 1.2vmax;
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
    align-items: center;
  }
  .form-element{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    height: auto;
    z-index: 1;
    gap: 2vmax;
  }
  .left-content-controller{
    width: 100%;
    display: flex;
    height: auto;
    align-items: center;
    height: 100%;
  }
  .right-content-controller{
    margin-left: auto;
    margin-right: 0;
    width: auto;
    display: flex;
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