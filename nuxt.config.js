// import { BASE_URL } from 'utils/endpoints.js'
// utils/endpoints.js
// const consult = require('./utils/endpoints');


module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: 'Caracterización',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        'css/main.css',
        'element-ui/lib/theme-chalk/reset.css',
        'element-ui/lib/theme-chalk/index.css'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/element-ui',
        '@/plugins/vuelidate'
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    // axios: {
    //     baseURL: consult.BASE_URL
    // },
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        // '@nuxtjs/axios',
        // '@nuxtjs/auth'
    ],
    // router: {
    //     // middleware: ['auth']
    // },
    // auth: {
    //     strategies: {
    //         local: {
    //             endpoints: {
    //                 login: { url: '/api/auth/login', method: 'post', propertyName: 'token' },
    //                 logout: { url: '/api/auth/logout', method: 'post' },
    //                 user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
    //             },
    //             tokenRequired: true,
    //             tokenType: 'bearer'
    //         }
    //     }
    // },
    // server: {
    //     port: 3000, // default: 3000
    //     host: '0.0.0.0', // default: localhost
    // },
    /*
     ** Build configuration
     */

    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}