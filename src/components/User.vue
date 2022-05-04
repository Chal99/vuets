<template>
  <div class="container">
      <table class="table table-striped">
          <thead>
              <tr>
                  <th>Name</th>
                  <th>Email</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <th>{{ user.name }}</th>
                  <th>{{ user.email }}</th>
                  <th><button @click="deleteUser">Delete</button></th>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component"
@Options({
    props: ['user'],
    methods: {
        deleteUser(): void {
            this.$store.dispatch('deleteUser',this.user);
        }
    }
})

export default class User extends Vue {}
</script>

<style>

</style>