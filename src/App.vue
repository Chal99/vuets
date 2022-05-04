<template>
<div>
  <h1 class="title">{{ title }}</h1>
  <my-form />
  <my-list />
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MyForm from './components/MyForm.vue'
import MyList from './components/MyList.vue'

@Options({
  components: {
    MyForm,MyList
  },
})
export default class App extends Vue {
  public title = 'Vuex With Typescript';
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title {
  margin-bottom: 50px;
}
</style>
