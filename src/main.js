import { createApp } from 'vue'
import App from './App.vue'
//Importando a bliblioteca do PrimeVue
import PrimeVue from "primevue/config";
//Importando o Tema da aplicação
import "primevue/resources/themes/saga-blue";
//Importando o CSS
import "primevue/resources/primevue.min.css";
//Importando os icones
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(PrimeVue)
//o ID de onde será montado todo o projeto -> visualizar o arquivo index.html
app.mount('#app')
