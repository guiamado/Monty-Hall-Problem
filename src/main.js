import Vue from 'vue'
import App from './App'

new Vue({
    render: h=> h(App)
    // Pode ser feito igualmente abaixo
    // render(createElement){
    //    return createElement(App)
    // }
}).$mount("#app")