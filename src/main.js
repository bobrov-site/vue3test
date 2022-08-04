import { createApp } from 'vue'

import App from "./App";
import componets from '@/components/UI/index';
import router from "@/router/router";
import router from './router'

const app = createApp(App).use(router)

componets.forEach(component => {
    app.component(component.name, component)
})

app.use(router ).mount('#app')
