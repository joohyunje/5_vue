// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// 전역 컴포넌트 테스트!
import CheckboxItem from './components/CheckboxItem.vue';

createApp(App)
    .component('CheckboxItem', CheckboxItem)
    .mount('#app')


// 지역 컴포넌트 테스트!
// createApp(App).mount('#app')