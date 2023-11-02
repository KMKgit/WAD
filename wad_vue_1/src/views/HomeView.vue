<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <h1>This is a to-do list ayy</h1>
    <form>
      <input type="text" v-model="newTodo">
      <button type="button" class="add-task" @click="addTodo">Add task</button>
      <button type="button" class="delete-all" @click="deleteAll">Delete all</button>
    </form>
    <div class="todos-container">
      <div class="todo-item" v-for="todo in todos" :key="todo">{{ todo }}</div>
    </div>
  </div>
</template>

<style>
  h1 {
    color: #3c23cd;
    font-family: "Dubai Light";
  }

  .add-task {
    background-color: lightblue;
    color: white;
    border-radius: 50px;
    padding: 10px;
  }
  .delete-all {
    background-color: #cc372c;
    color: white;
    border-radius: 50px;
    padding: 10px;
  }
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  methods: {
    addTodo: function () {
      // console.log('Added a task!')
      this.todos.push(this.newTodo)
      console.log(this.todos)
    },
    deleteAll: function () {
      this.todos = []
    }
  },
  props: {

  },
  data: () => {
    return {
      newTodo: '',
      todos: []
    }
  }
}
</script>
