import { createApp } from 'vue'

import App from "./App";
import componets from '@/components/UI/index';
import router from "@/router/router";
import VIntersection from "@/directives/VIntersection";

const app = createApp(App)

componets.forEach(component => {
    app.component(component.name, component)
})

app.directive('intersection', VIntersection);

app.use(router).mount('#app')
