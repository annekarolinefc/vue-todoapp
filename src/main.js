import { createApp } from 'vue'
import App from './App.vue'
//Importando a bliblioteca do PrimeVue
import PrimeVue from "primevue/config";
//Importando os componentes 
import Button from "primevue/button"
import InputText from "primevue/inputtext";

//Importando o Tema da aplicação
import "primevue/resources/themes/saga-blue/theme.css";
//Importando o CSS
import "primevue/resources/primevue.min.css";
//Importando os icones
import "primeicons/primeicons.css";

const app = createApp(App);
//Importando os componentes
app.component("Button", Button);
app.component("InputText", InputText)
app.use(PrimeVue)
//o ID de onde será montado todo o projeto -> visualizar o arquivo index.html
app.mount('#app')
