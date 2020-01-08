<template>
  <div class="main-grid">
    <style>
      :root {
        --backgroundColor: {{ texts.welcome.backgroudColor }};
        --backgroundImgGrid: url('{{ texts.urlBackgroundImg }}');
        --buttonBgColor: {{ texts.buttons.backgroundColor }};
        --buttonHvColor: {{ texts.buttons.hoverColor }};
      }
    </style>
    <!-- START FORM -->
    <div class="form-login bg-white">
      <div class="login-container">
        <!-- START title-->
        <div class="login-title">
          <span class="link-fx font-w700 font-size-h1" :hidden="texts.use !== 'company-name'">
              <span class="text-dark"> {{ texts.title }} </span>
          </span>
          <span class="logo" :hidden="texts.use !== 'logo'">
            <b-img class="logo-img" :src="texts.logo"></b-img>
          </span>
          <p class="text-uppercase font-w700 font-size-sm text-muted">{{ texts.subtitle }}</p>
<!-- @changeInput="changeInput($event)" @submit="submit($event)" :loading="loading" :configAlert="configAlert" :user="user" -->
           <formLogin />
        </div>
      </div>
    </div>
    <!-- END FORM -->
    <!-- START Meta Info -->
    <div class="container-title d-md-flex align-items-md-center justify-content-md-center text-md-center">
      <div class="welcome-title">
        <p class="title display-4 text-white">
          {{ texts.welcome.title }}
        </p>
        <p class="subtitle font-size-lg text-white-75 mb-0" :hidden="true">
          {{ texts.welcome.subtitle }} &copy; <span class="js-year-copy">{{ texts.welcome.year }}</span>
        </p>
      </div>
    </div>
    <!-- END Meta Info -->
  </div>
</template>

<script>
  import formLogin from '../components/Login/fromLogin';
  import { login, errors } from '../utils/textConfig'
  export default {
    auth: false,
    components: {
      formLogin
    },
    data () {
      return {
        texts: login,
        user: {
          identifier: '',
          password: ''
        },
        loading: false,
        configAlert: login.alertConfig
      }
    },
    methods: {
      changeInput (event) {
        this.user = event
      },
      async submit (event) {
        let user = this.user
        // this.loading = true
        let response = this.$auth.loginWith('local', {
          data: user
        }).then((response) => {
            // this.loading = false
            //this.$router.push({ name: 'index' })
            window.location.href = "/"
        }).catch((err) => {
          this.configAlert.dismissCountDown = this.configAlert.dismissSecs
          this.configAlert.msg = errors.login.authentication
          // this.loading = false
        })
      }
    }
  }
</script>

<style>
  /** config grid principal */
  .main-grid {
    background-image: var(--backgroundImgGrid);
    background-size: cover;

    height: 100vh;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100%;
  }

  .login-container {
    min-width: 400px;
  }

  /** container general del titulo de bienvenida */
  .container-title::after {
    content: "";
    opacity: 0.7; 
    background-color: var(--backgroundColor);
     background-color: cover;

    height: 100%;
    width: 100%;
    z-index: 0;
  }

  /** texto de bienvenida */
  .welcome-title {
    position: absolute;

    z-index: 10;
  }

  .login-title {
    text-align: center;
    padding-bottom: 10px;
  }

  .form-login {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-button {
    background-color: var(--buttonBgColor);
    border-color: var(--buttonBgColor);

    float: none;
  }

  .title {
    color:gold !important;
  }

  .main-button:hover {
    background-color: var(--buttonHvColor);
    border-color: var(--buttonHvColor);
  }

  .main-button:active {
    background-color: var(--buttonHvColor) !important;
    border-color: var(--buttonHvColor) !important;
  }

  @media only screen and (max-width: 770px) {
    .main-grid {
      grid-template-columns: 1fr;
    }

    .login-container {
      min-width: 100%;
    }

    .form-login {
      padding: 5%;
      padding-top: 20%;
    }

    .container-title {
      display: none;
    }
  }
</style>
