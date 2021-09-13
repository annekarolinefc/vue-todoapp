<template>
  <h1>Todo App</h1>
  <div v-if="!editMode">
    <Button v-on:click="newTodo">Novo</Button>
    <todo-list></todo-list>
  </div>
  <todo-item v-if="editMode" @cancel="cancel"></todo-item>

</template>

<script>
//Importandos os componentes criados
import TodoList from "./components/TodoList.vue";
import TodoItem from "./components/TodoItem.vue";

export default {
  components:{
    TodoList,
    TodoItem
  },
  data(){
    return {
      editMode: false, //propriedade para alterar entre lista e item
    }
  },
  methods:{
    newTodo(){
      this.editMode = true; //ao clicar no botão, entrará no modo de exibição.
    },
    cancel(){
      this.editMode = false; //altera o status para alterar entre os dois componentes
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
