// // import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

// 에미터 사용할 시 밑에 걸로 하자!
import { createApp } from 'vue'
import App from './App2.vue'

// 라이브러리 가져오기
import mitt from 'mitt';

// 에미터 인스턴스 생성
const emitter = mitt();

const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.mount('#app');