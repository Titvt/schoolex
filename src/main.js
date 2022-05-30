import App from '@/App'
import axios from "axios";
import { createApp } from 'vue'

let debugging = true

if (debugging) {
  axios.defaults.baseURL = `${location.protocol}//${location.hostname}:5000`
} else {
  axios.defaults.baseURL = `${location.protocol}//${location.host}`
}

createApp(App).mount('#app')
