import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-organization-chart/dist/orgchart.css';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue'
// import Vue2OrgTree from 'vue2-org-tree'

// Vue.use(Vue2OrgTree)
import panZoom from 'vue-panzoom'
Vue.use(panZoom);

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  render: h => h(App),
}).$mount('#app')
