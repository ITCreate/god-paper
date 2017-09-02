
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import App from './components/App.vue';
Vue.component('app', App);

import Top from './pages/Top.vue';
import Capture from './pages/Capture.vue';

const routes = [
    {
        path: '/',
        component: Top
    },
    {
        path: '/capture',
        component: Capture
    }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    router
});