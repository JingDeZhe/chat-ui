import './styles/main.scss'
import 'virtual:uno.css'
import { createApp } from 'vue'
import App from './App.vue'
import useElement from './plugins/element'

const app = createApp(App)
useElement(app)
app.mount('#app')
