import TestComponent from './TestComponent.vue'




TestComponent.install = function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
        Vue = window.Vue;
    }

    Vue.component(TestComponent.name, TestComponent);
}


export default TestComponent;