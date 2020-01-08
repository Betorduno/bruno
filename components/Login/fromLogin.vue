<template>
    <div>
        <!-- <alertToast :configAlert="configAlert" /> -->
            <div>
                <div class="form-group">
                    <!--  
                        v-model="user.identifier" 
                        @input="changeInput" 
                        
                        :placeholder="texts.fieldTexts[0]" -->
                    <input type="text" class="form-control form-control-lg form-control-alt" :placeholder="texts.fieldTexts[0]"/>
                </div>
                <div class="form-group">
                    <!--
                        v-model="user.password" 
                        @input="changeInput"
                        
                        
                        v-on:keyup.enter="submit" -->
                        
                    <input type="password"  class="form-control form-control-lg form-control-alt" :placeholder="texts.fieldTexts[2]"/>
                </div>
            </div>
            <div class="form-group">
                <!-- :hidden="loading" -->
                <!-- @click="submit()" -->
                <b-button class="main-button"  style="display:block"  block>
                   <i class="fas fa-sign-in-alt"></i>{{ texts.buttons.signIn }}
                </b-button>
                
                <!-- <b-button class="main-button" variant="secondary" style="display:block" :hidden="!loading" block disabled>
                    <b-spinner small></b-spinner> -->
                    <!-- <span class="sr-only">Loading...</span> -->
                <!-- </b-button> -->
                <div class="mt-3 mb-0 d-lg-flex justify-content-lg-between" style="display:block">
                    <!-- @click="goResetPassword()" -->
                    <a  class="btn btn-sm btn-light d-block d-lg-inline-block mb-1">
                        <i class="fa fa-exclamation-triangle text-muted mr-1"></i> {{ texts.buttons.resetPassword }}
                    </a>
                    <!-- @click="goRegistrer()"  -->
                    <a class="btn btn-sm btn-light d-block d-lg-inline-block mb-1">
                        <i class="fa fa-plus text-muted mr-1"></i> {{ texts.buttons.register }}
                    </a>
                </div>
            </div>
    </div>
</template>
<script>
import { login, errors } from '../../utils/textConfig'
// import { required, minLength } from "vuelidate/lib/validators"
// import alertToast from '../modals/alertToast'

export default {
    // components: {
    //     alertToast
    // },
    // props : [ 'user', 'configAlert', 'loading' ],
    // methods: {
    //     changeInput () {
    //         if (this.user) {
    //             this.$emit('changeInput', this.user)
    //         }
    //     },
    //     submit () {
    //         if (this.user) {
    //             this.$emit('submit')
    //         }
    //     },
    //     goResetPassword () {
    //         this.$router.push('/reset')
    //     },
    //     goRegistrer () {
    //         this.$router.push('/register')
    //     }
    // },
    data () {
        return {
            texts: login
        }
    }
}
</script>