import './assets/main.css'
import { Button, CellGroup, Field, Form } from 'vant';
import { NavBar } from 'vant';

import 'vant/lib/index.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import './assets/main.css'
const app = createApp(App)

app.use(router)
app.use(Button);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(NavBar);

app.mount('#app')
