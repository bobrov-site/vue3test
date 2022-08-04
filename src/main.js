import { createApp } from 'vue'

import App from "./App";
import componets from '@/components/UI/index';

const app = createApp(App)

componets.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')
